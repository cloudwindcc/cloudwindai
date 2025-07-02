import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;
  originalSize: number;
  draw: () => void;
  update: () => void;
}

export const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesArrayRef = useRef<Particle[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);

  // Initialize the canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasDimensions = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    setCanvasDimensions();

    class ParticleClass implements Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
      originalSize: number;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.originalSize = size;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.directionY = -this.directionY;
        }
        
        // Apply friction/damping to slow down particles
        this.directionX *= 0.97;
        this.directionY *= 0.97;
        
        // Reset size gradually if it was changed by an effect
        if (this.size > this.originalSize) {
          this.size -= 0.1;
        }
        
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const initParticles = () => {
      particlesArrayRef.current = [];
      const numberOfParticles = (canvas.height * canvas.width) / 10000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 1.8 + 0.6;
        const x = Math.random() * (window.innerWidth - size * 2) + size;
        const y = Math.random() * (window.innerHeight - size * 2) + size;
        const directionX = (Math.random() * 0.25) - 0.125;
        const directionY = (Math.random() * 0.25) - 0.125;
        const color = 'rgba(173, 216, 230, 0.65)';
        
        particlesArrayRef.current.push(new ParticleClass(x, y, directionX, directionY, size, color));
      }
    };

    const connectParticles = () => {
      for (let a = 0; a < particlesArrayRef.current.length; a++) {
        for (let b = a + 1; b < particlesArrayRef.current.length; b++) {
          const dx = particlesArrayRef.current[a].x - particlesArrayRef.current[b].x;
          const dy = particlesArrayRef.current[a].y - particlesArrayRef.current[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const connectionThreshold = 110;
          
          if (distance < connectionThreshold) {
            const opacityValue = 1 - (distance / connectionThreshold);
            if (ctx) {
              ctx.strokeStyle = `rgba(0, 220, 255, ${opacityValue * 0.7})`;
              ctx.lineWidth = 0.6;
              ctx.beginPath();
              ctx.moveTo(particlesArrayRef.current[a].x, particlesArrayRef.current[a].y);
              ctx.lineTo(particlesArrayRef.current[b].x, particlesArrayRef.current[b].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArrayRef.current.length; i++) {
        particlesArrayRef.current[i].update();
      }
      
      connectParticles();
      
      animationFrameIdRef.current = window.requestAnimationFrame(animate);
    };

    // Handle click interaction
    const handleCanvasClick = (event: MouseEvent) => {
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;
      
      for (let i = 0; i < particlesArrayRef.current.length; i++) {
        const dx = particlesArrayRef.current[i].x - clickX;
        const dy = particlesArrayRef.current[i].y - clickY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const interactionRadius = 150;
        const pushStrength = 12;
        
        if (distance < interactionRadius && distance > 0) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (interactionRadius - distance) / interactionRadius;
          
          particlesArrayRef.current[i].directionX += forceDirectionX * force * pushStrength;
          particlesArrayRef.current[i].directionY += forceDirectionY * force * pushStrength;
        }
      }
    };

    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions();
      initParticles();
    };

    // Initialize
    initParticles();
    animate();

    // Event listeners
    canvas.addEventListener('click', handleCanvasClick);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationFrameIdRef.current) {
        window.cancelAnimationFrame(animationFrameIdRef.current);
      }
      canvas.removeEventListener('click', handleCanvasClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      id="network-canvas" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.45,
        cursor: 'pointer'
      }}
    />
  );
};

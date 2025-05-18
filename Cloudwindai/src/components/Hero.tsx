import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section" style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      padding: '20px',
      backgroundColor: 'rgba(10, 15, 31, 0.4)',
      marginTop: '60px' // Account for fixed navbar
    }}>
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        <span className="text-sky-400">雲風智能</span> <span className="text-gray-200">赋能未来</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
        AI赋能个人和组织，做更对的选择，做更好的决策。
      </p>
    </section>
  );
};
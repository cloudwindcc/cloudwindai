import React, { useState } from 'react';
import { Menu } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(target);
    
    if (targetElement) {
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="p-4 shadow-lg fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(10, 15, 31, 0.85)', backdropFilter: 'blur(10px)' }}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="company-logo-container flex flex-col items-center">
          <div className="text-lg md:text-xl font-bold text-sky-400" style={{ fontFamily: '"STFangsong", "FangSong", "仿宋", "Noto Sans TC", "Inter", sans-serif' }}>
            雲風智能有限公司
          </div>
          <div className="text-xs md:text-sm text-gray-300 font-sans mt-0.5"> 
            CloudWind AI Limited
          </div>
        </a>
        <div className="space-x-4 text-lg hidden md:block">
          <a href="#hero" className="hover:text-sky-400 transition-colors" onClick={(e) => handleNavLinkClick(e, '#hero')}>首頁</a>
          <a href="#services" className="hover:text-sky-400 transition-colors" onClick={(e) => handleNavLinkClick(e, '#services')}>服務</a>
          <a href="#about" className="hover:text-sky-400 transition-colors" onClick={(e) => handleNavLinkClick(e, '#about')}>關於我們</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors" onClick={(e) => handleNavLinkClick(e, '#contact')}>聯繫方式</a>
        </div>
        <div className="md:hidden">
          <button 
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className={`md:hidden bg-gray-800 bg-opacity-95 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#hero" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={(e) => handleNavLinkClick(e, '#hero')}>首頁</a>
        <a href="#services" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={(e) => handleNavLinkClick(e, '#services')}>服務</a>
        <a href="#about" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={(e) => handleNavLinkClick(e, '#about')}>關於我們</a>
        <a href="#contact" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={(e) => handleNavLinkClick(e, '#contact')}>聯繫方式</a>
      </div>
    </nav>
  );
};
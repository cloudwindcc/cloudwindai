import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Menu } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    // Only prevent default for internal hash links, not for react-router-dom Links
    if (target.startsWith('#')) {
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
    }

    // Close mobile menu after click
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="p-4 shadow-lg fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(10, 15, 31, 0.85)', backdropFilter: 'blur(10px)' }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="company-logo-container flex flex-col items-center"> {/* Use Link for home */}
          <div className="text-lg md:text-xl font-bold text-sky-400" style={{ fontFamily: '"STFangsong", "FangSong", "仿宋", "Noto Sans SC", "Inter", sans-serif' }}>
            雲風智能有限公司
          </div>
          <div className="text-xs md:text-sm text-gray-300 font-sans mt-0.5">
            CloudWind AI Limited
          </div>
        </Link>
        <div className="space-x-4 text-lg hidden md:block">
          <Link to="/" className="hover:text-sky-400 transition-colors">首页</Link> {/* Use Link */}
          <a href="#services" className="hover:text-sky-400 transition-colors" onClick={(e) => handleNavLinkClick(e, '#services')}>服务</a>
          <a href="#about" className="hover:text-sky-400 transition-colors" onClick={(e) => handleNavLinkClick(e, '#about')}>关于我们</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors" onClick={(e) => handleNavLinkClick(e, '#contact')}>联系方式</a>
          <Link to="/bp" className="hover:text-sky-400 transition-colors">BP</Link> {/* Use Link for BP */}
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
        <Link to="/" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={() => setMobileMenuOpen(false)}>首页</Link> {/* Use Link */}
        <a href="#services" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={(e) => handleNavLinkClick(e, '#services')}>服务</a>
        <a href="#about" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={(e) => handleNavLinkClick(e, '#about')}>关于我们</a>
        <a href="#contact" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={(e) => handleNavLinkClick(e, '#contact')}>联系方式</a>
        <Link to="/bp" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={() => setMobileMenuOpen(false)}>BP</Link> {/* Use Link for BP */}
      </div>
    </nav>
  );
};

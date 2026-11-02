import React from 'react';
import { useLocation } from 'react-router-dom';

interface FooterProps {
  year?: number;
}

export const Footer: React.FC<FooterProps> = ({ year = new Date().getFullYear() }) => {
  const english = useLocation().pathname.startsWith('/en');
  return (
    <footer 
      className="text-center p-8 mt-12 border-t border-gray-700 relative z-10" 
      style={{ backgroundColor: 'rgba(10, 15, 31, 0.75)' }}
    >
      <p className="text-gray-500">
        &copy; {year} 雲風智能有限公司<br className="md:hidden" /> (CloudWind AI Limited)
      </p>
      <div className="flex justify-end items-center gap-6 mt-5 text-sm"><a className="text-sky-300 hover:text-white" href={english ? "/cases" : "/cases?lang=zh"}>{english ? "Client Cases" : "客户案例"}</a><a href="https://www.cloudwind.ai" target="_blank" rel="noopener noreferrer" className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-md">{english ? "Explore Products ↗" : "探索产品 ↗"}</a></div>
    </footer>
  );
};

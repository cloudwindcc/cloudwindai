import React from 'react';

interface FooterProps {
  year: number;
}

export const Footer: React.FC<FooterProps> = ({ year }) => {
  return (
    <footer 
      className="text-center p-8 mt-12 border-t border-gray-700 relative z-10" 
      style={{ backgroundColor: 'rgba(10, 15, 31, 0.75)' }}
    >
      <p className="text-gray-500">&copy; {year} 雲風智能有限公司 (CloudWind AI Limited)</p>
    </footer>
  );
};
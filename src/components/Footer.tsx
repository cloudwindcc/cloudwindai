import React from 'react';
import { useLocation } from 'react-router-dom';

interface FooterProps { year?: number; }

export const Footer: React.FC<FooterProps> = ({ year = new Date().getFullYear() }) => {
  const english = useLocation().pathname.startsWith('/en');
  return (
    <footer className="business-footer-root p-8 border-t border-gray-700 relative z-10" style={{ backgroundColor: 'rgba(10, 15, 31, 0.75)' }}>
      <div className="business-footer-container">
        <div className="business-contact-panel">
          <div className="business-contact-details">
            <h2 className="business-contact-label">{english ? 'CONTACT US' : '聯絡我們'}</h2>
            <dl className="business-contact-list">
              <div><dt>{english ? 'Address' : '地址'}</dt><dd>{english ? 'Unit 405-414, Level 4 Core E, CyberPort 3, Hong Kong' : '香港數碼港，Unit 405-414，Level 4 Core E, CyberPort 3'}</dd></div>
              <div><dt>{english ? 'Email' : '郵箱'}</dt><dd><a href="mailto:info@cloudwindai.com">info@cloudwindai.com</a></dd></div>
              <div><dt>{english ? 'Phone' : '電話'}</dt><dd><a href="tel:+85264759959">+852 64759959</a></dd></div>
            </dl>
          </div>
          <div className="business-website-block">
            <h2 className="business-contact-label">{english ? 'WEBSITES' : '官方網站'}</h2>
            <div className="business-websites">
              <a href="https://www.cloudwindai.com">www.CloudWindAI.com</a>
              <a href="https://www.cloudwind.ai" target="_blank" rel="noopener noreferrer">www.CloudWind.AI</a>
            </div>
          </div>
          <div className="business-whatsapp">
            <div className="whatsapp-qr"><img src="/contact/whatsapp-contact.jpg" alt="WhatsApp contact QR code" width="740" height="1600" /></div>
            <div className="business-whatsapp-copy"><strong>WhatsApp</strong><small>{english ? 'Scan to contact us.' : '使用 WhatsApp 掃碼聯絡我們。'}</small></div>
          </div>
        </div>
        <div className="business-footer-bottom">
          <p>&copy; {year} 雲風智能有限公司<br className="md:hidden" /> (CloudWind AI Limited)</p>
          <div className="business-footer-links">
            <a href={english ? '/cases?lang=en' : '/cases'}>{english ? 'Client Cases' : '客戶案例'}</a>
            <a href="https://www.cloudwind.ai" target="_blank" rel="noopener noreferrer" className="business-footer-action">{english ? 'Explore Products ↗' : '探索產品 ↗'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

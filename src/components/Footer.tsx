import React from 'react';
import { useLocation } from 'react-router-dom';

interface FooterProps {
  year?: number;
}

export const Footer: React.FC<FooterProps> = ({ year = new Date().getFullYear() }) => {
  const english = useLocation().pathname.startsWith('/en');
  return (
    <footer
      className="business-footer-root p-8 mt-12 border-t border-gray-700 relative z-10"
      style={{ backgroundColor: 'rgba(10, 15, 31, 0.75)' }}
    >
      <div className="business-footer-container">
        <div className="business-contact-panel">
          <div>
            <span className="business-contact-label">{english ? 'WEBSITES' : '官方网站'}</span>
            <div className="business-websites">
              <a href="https://www.cloudwindai.com">www.CloudWindAI.com</a>
              <a href="https://www.cloudwind.ai" target="_blank" rel="noopener noreferrer">www.CloudWind.AI</a>
            </div>
            <p className="business-phone"><span>{english ? 'Phone' : '电话'}</span><a href="tel:+85264759959">+852 64759959</a></p>
          </div>
          <div className="business-whatsapp">
            <a className="whatsapp-qr" href="/contact/whatsapp-contact.jpg" target="_blank" rel="noopener noreferrer" aria-label={english ? 'View full WhatsApp contact QR code' : '查看完整 WhatsApp 联系二维码'}><img src="/contact/whatsapp-contact.jpg" alt="Kevin CW WhatsApp contact QR code" width="740" height="1600" /></a>
            <div className="business-whatsapp-copy"><strong>WhatsApp</strong><span>Kevin CW</span><small>{english ? 'Scan to add us on WhatsApp.' : '使用 WhatsApp 扫码添加联系人。'}</small><a href="/contact/whatsapp-contact.jpg" target="_blank" rel="noopener noreferrer">{english ? 'View full QR code ↗' : '查看完整二维码 ↗'}</a></div>
          </div>
        </div>
        <div className="business-footer-bottom">
      <p>
        &copy; {year} 雲風智能有限公司<br className="md:hidden" /> (CloudWind AI Limited)
      </p>
      <div className="business-footer-links"><a href={english ? "/cases" : "/cases?lang=zh"}>{english ? "Client Cases" : "客户案例"}</a><a href="https://www.cloudwind.ai" target="_blank" rel="noopener noreferrer" className="business-footer-action">{english ? "Explore Products ↗" : "探索产品 ↗"}</a></div>
        </div>
      </div>
    </footer>
  );
};

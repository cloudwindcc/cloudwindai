import React from 'react';
import { OrganizationChart } from './OrganizationChart';

export const About: React.FC = () => (
  <section id="about" className="content-section" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '2rem auto', position: 'relative', zIndex: 1, backgroundColor: 'rgba(10, 15, 31, 0.7)', borderRadius: '8px' }}>
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-300">關於雲風智能</h2>
      <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">雲風智能有限公司成立於香港，專注 AI 應用、企業流程工具與數字產品開發。</p>
    </div>
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="bg-gray-800/50 p-8 rounded-lg">
        <h3 className="text-xl md:text-2xl font-bold text-sky-400 mb-4">我們的工作</h3>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">我們與團隊釐清實際工作場景，設計可使用的 AI 工具、網站和自動化流程，並按項目範圍提供開發及維護支持。</p>
      </div>
      <div className="bg-gray-800/50 p-8 rounded-lg">
        <h3 className="text-xl md:text-2xl font-bold text-sky-400 mb-4">合作方式</h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-300">
          <li>• 需求訪談與業務流程梳理</li><li>• 原型設計與功能驗證</li><li>• 網站、應用與智能體開發</li><li>• 上線後維護與迭代</li>
        </ul>
      </div>
    </div>
    <OrganizationChart />
  </section>
);

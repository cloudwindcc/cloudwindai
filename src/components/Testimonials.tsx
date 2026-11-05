import React from 'react';
export const Testimonials: React.FC = () => {
  const steps = [['01', '了解需求', '確認使用者、工作流程及具體交付目標。'], ['02', '設計原型', '以可檢視的頁面或功能原型討論方案。'], ['03', '開發迭代', '按確認的範圍實作、測試並持續調整。']];
  return <section id="testimonials" className="content-section" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '2rem auto', position: 'relative', zIndex: 1, backgroundColor: 'rgba(10, 15, 31, 0.7)', borderRadius: '8px' }}>
    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-300">項目交付流程</h2><p className="text-base md:text-lg text-gray-300">從業務問題出發，逐步形成可使用的數字工具。</p></div>
    <div className="grid md:grid-cols-3 gap-8">{steps.map(([number, title, description]) => <div key={number} className="bg-gradient-to-br from-sky-900/20 to-purple-900/20 p-6 rounded-lg border border-sky-500/20"><div className="text-2xl text-sky-400 mb-4">{number}</div><h3 className="text-xl text-sky-200 mb-3">{title}</h3><p className="text-gray-300 leading-relaxed">{description}</p></div>)}</div>
    <div className="text-center mt-10"><a href="/cases" className="text-sky-300 underline underline-offset-4">瀏覽數字產品案例 ↗</a></div>
  </section>;
};

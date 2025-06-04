import React from 'react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="content-section" style={{
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
      backgroundColor: 'rgba(10, 15, 31, 0.7)',
      borderRadius: '8px',
      marginTop: '2rem',
      marginBottom: '2rem'
    }}>
      <h2 className="text-4xl font-bold text-center mb-12 text-sky-300">我們的服務</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card p-6 rounded-lg shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300" style={{
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(55, 65, 81, 0.6)'
        }}>
          <h3 className="text-2xl font-semibold mb-4 text-sky-400">AI決策支援</h3>
          <p className="text-gray-400">利用先進的AI演算法分析複雜數據，為企業和個人提供精準的決策支援，優化戰略規劃和日常營運。</p>
        </div>
        <div className="card p-6 rounded-lg shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300" style={{
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(55, 65, 81, 0.6)'
        }}>
          <h3 className="text-2xl font-semibold mb-4 text-sky-400">個性化AI助理</h3>
          <p className="text-gray-400">開發智能AI助理，理解用戶需求，提供個性化資訊、建議和自動化服務，提升生活和工作效率。</p>
        </div>
        <div className="card p-6 rounded-lg shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300" style={{
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(55, 65, 81, 0.6)'
        }}>
          <h3 className="text-2xl font-semibold mb-4 text-sky-400">AI賦能組織轉型</h3>
          <p className="text-gray-400">幫助組織整合AI技術，優化流程，培養AI思維，實現數據驅動的智能化轉型，提升核心競爭力。</p>
        </div>
      </div>
    </section>
  );
};
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
      {/* 将 md:grid-cols-3 改为 md:grid-cols-2，实现中等屏幕及以上 2 列布局 */}
      <div className="grid md:grid-cols-2 gap-8"> 
        <div className="card p-6 rounded-lg shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300" style={{
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(55, 65, 81, 0.6)'
        }}>
          <h3 className="text-2xl font-semibold mb-4 text-sky-400">AI智能營銷套件 (AI Marketing Suite)</h3>
          <p className="text-gray-400">利用先進的AI工具，生成企業網站與APP，為客戶的官方社交媒體提供持續的內容創作支持。</p>
        </div>
        <div className="card p-6 rounded-lg shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300" style={{
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(55, 65, 81, 0.6)'
        }}>
          <h3 className="text-2xl font-semibold mb-4 text-sky-400">AI運營優化助手 (AI Operations Assistant)</h3>
          <p className="text-gray-400">開發智能AI助手及AI輔助程式設計，提供個性化服務，通過智能化手段顯著降低成本並提高效率。</p>
        </div>
        <div className="card p-6 rounded-lg shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300" style={{
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(55, 65, 81, 0.6)'
        }}>
          <h3 className="text-2xl font-semibold mb-4 text-sky-400">AI智能體定制 (AI Intelligent Agents)</h3>
          <p className="text-gray-400">提供一系列預配置及可定制的智能體，在自動化高頻、重複性的工作流程實現顯著AI降本。</p>
        </div>
        <div className="card p-6 rounded-lg shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300" style={{
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(55, 65, 81, 0.6)'
        }}>
          <h3 className="text-2xl font-semibold mb-4 text-sky-400">AI戰略決策引擎 (AI Strategy Engine)</h3>
          <p className="text-gray-400">集成AI技術，構建企業專屬的AI決策支持系統，實現數據驅動的智能化轉型，提升核心競爭力。</p>
        </div>
      </div>
    </section>
  );
};

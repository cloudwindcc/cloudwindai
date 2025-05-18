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
      <h2 className="text-4xl font-bold text-center mb-12 text-sky-300">我们的服务</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card p-6 rounded-lg shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300" style={{
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(55, 65, 81, 0.6)'
        }}>
          <h3 className="text-2xl font-semibold mb-4 text-sky-400">AI决策支持</h3>
          <p className="text-gray-400">利用先进的AI算法分析复杂数据，为企业和个人提供精准的决策支持，优化战略规划和日常运营。</p>
        </div>
        <div className="card p-6 rounded-lg shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300" style={{
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(55, 65, 81, 0.6)'
        }}>
          <h3 className="text-2xl font-semibold mb-4 text-sky-400">个性化AI助手</h3>
          <p className="text-gray-400">开发智能AI助手，理解用户需求，提供个性化信息、建议和自动化服务，提升生活和工作效率。</p>
        </div>
        <div className="card p-6 rounded-lg shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300" style={{
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(55, 65, 81, 0.6)'
        }}>
          <h3 className="text-2xl font-semibold mb-4 text-sky-400">AI赋能组织转型</h3>
          <p className="text-gray-400">帮助组织集成AI技术，优化流程，培养AI思维，实现数据驱动的智能化转型，提升核心竞争力。</p>
        </div>
      </div>
    </section>
  );
};
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="content-section" style={{
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
      <h2 className="text-4xl font-bold text-center mb-12 text-sky-300">关于雲風智能</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-4">
          雲風智能有限公司 (CloudWind AI Limited) 是一家在香港成立的人工智能创新企业。我们的核心使命是利用尖端的人工智能技术，赋能全球的个人与组织。
        </p>
        <p className="text-lg text-gray-300 mb-4">
          我们坚信，AI的力量能够帮助人们洞察复杂性，做出更明智的决策，从而在关键的人生和商业岔路口上，选择正确的方向。无论是优化业务流程、提升个人效率，还是探索未知领域，雲風智能都致力于成为您最值得信赖的AI伙伴。
        </p>
        <p className="text-lg text-gray-300">
          我们的团队由经验丰富的AI研究员、工程师和行业专家组成，共同推动AI技术的边界，创造真正有价值的应用。
        </p>
      </div>
    </section>
  );
};
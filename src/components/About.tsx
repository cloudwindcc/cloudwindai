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
          雲風智能有限公司（CloudWind AI Limited）是一家在香港成立的人工智能創新企業。我們的核心使命是利用尖端的人工智能技術，賦能全球的個人與組織。
        </p>
        <p className="text-lg text-gray-300 mb-4">
          我們堅信，AI 能幫助人們洞察複雜性，做出更明智的決策，從而在關鍵的人生和商業路口，選擇正確的方向。無論是優化業務流程、提升個人效率，還是探索未知領域，雲風智能都致力於成為您最值得信賴的 AI 夥伴。
        </p>
        <p className="text-lg text-gray-300">
          我們的團隊由經驗豐富的研究員、行業專家組成，為客戶創造真正的價值。
        </p>
      </div>
    </section>
  );
};

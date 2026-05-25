import React from 'react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: '雲風智能的 AI 營銷方案協助我們在 30 天內將獲客成本降低 65%，銷售轉化率提升了 3 倍。',
      author: '零售企業客戶',
      company: '連鎖零售行業',
      role: '管理層回饋',
    },
    {
      content: 'AI 客服與營運助手上線後，客服團隊人力成本減少 50%，客戶滿意度反而提升了 20%。',
      author: '電商平台客戶',
      company: '線上交易行業',
      role: '營運團隊回饋',
    },
    {
      content: '30 天標準交付流程非常清晰，AI 決策系統讓庫存周轉率提升 40%，投資回報可被清楚衡量。',
      author: '製造企業客戶',
      company: '製造行業',
      role: '董事會回饋',
    },
  ];

  return (
    <section id="testimonials" className="content-section" style={{
      padding: '6rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
      backgroundColor: 'rgba(10, 15, 31, 0.7)',
      borderRadius: '8px',
      marginTop: '2rem',
      marginBottom: '2rem'
    }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-300">客戶成功案例</h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          以可衡量的效率提升、成本優化與投資回報，支持企業完成 AI 轉型。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.author} className="bg-gradient-to-br from-sky-900/20 to-purple-900/20 p-6 rounded-lg border border-sky-500/20">
            <div className="mb-4">
              <div className="text-3xl text-sky-400 mb-2">"</div>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">{testimonial.content}</p>
            </div>

            <div className="border-t border-sky-500/20 pt-4">
              <div className="font-bold text-sky-400">{testimonial.author}</div>
              <div className="text-sm text-gray-400">{testimonial.role}</div>
              <div className="text-sm text-gray-500">{testimonial.company}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex flex-wrap justify-center gap-8 text-center">
          <div className="bg-green-900/20 p-4 rounded-lg">
            <div className="text-xl md:text-2xl font-bold text-green-400">98%</div>
            <div className="text-sm text-gray-300">客戶滿意度</div>
          </div>
          <div className="bg-blue-900/20 p-4 rounded-lg">
            <div className="text-xl md:text-2xl font-bold text-blue-400">300%+</div>
            <div className="text-sm text-gray-300">平均投資回報率</div>
          </div>
          <div className="bg-purple-900/20 p-4 rounded-lg">
            <div className="text-xl md:text-2xl font-bold text-purple-400">50+</div>
            <div className="text-sm text-gray-300">成功案例</div>
          </div>
        </div>
      </div>
    </section>
  );
};

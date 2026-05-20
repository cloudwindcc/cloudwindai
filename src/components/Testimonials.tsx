import React from 'react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "雲風智能的AI营销方案帮我们在30天内将获客成本降低了65%，现在我们的销售转化率提升了3倍！",
      author: "李总",
      company: "某连锁零售企业",
      role: "CEO"
    },
    {
      content: "AI客服系统上线后，我们的客服团队人力成本减少了50%，客户满意度反而提升了20%。",
      author: "王经理",
      company: "某电商平台",
      role: "运营总监"
    },
    {
      content: "30天标准交付流程非常专业，AI决策系统让库存周转率提升了40%，这个投资太值了！",
      author: "张董",
      company: "某制造企业",
      role: "董事长"
    }
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-300">客户成功案例</h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          50+企业已选择雲風智能，平均ROI超过300%
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap=8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gradient-to-br from-sky-900/20 to-purple-900/20 p-6 rounded-xl border border-sky-500/20">
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
            <div className="text-sm text-gray-300">客户满意度</div>
          </div>
          <div className="bg-blue-900/20 p-4 rounded-lg">
            <div className="text-xl md:text-2xl font-bold text-blue-400">300%+</div>
            <div className="text-sm text-gray-300">平均投资回报率</div>
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

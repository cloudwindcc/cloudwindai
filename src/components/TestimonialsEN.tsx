import React from 'react';

export const TestimonialsEN: React.FC = () => {
  const testimonials = [
    {
      content: "CloudWind AI's marketing solution helped us reduce customer acquisition costs by 65% within 30 days, and now our sales conversion rate has increased 3x!",
      author: "Mr. Li",
      company: "Retail Chain Enterprise",
      role: "CEO"
    },
    {
      content: "After the AI customer service system went online, our customer service team labor costs were reduced by 50%, while customer satisfaction actually increased by 20%.",
      author: "Manager Wang",
      company: "E-commerce Platform",
      role: "Operations Director"
    },
    {
      content: "The 30-day standard delivery process is very professional. The AI decision-making system improved inventory turnover by 40%. This investment is really worthwhile!",
      author: "Chairman Zhang",
      company: "Manufacturing Enterprise",
      role: "Chairman"
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-300">Customer Success Stories</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          50+ enterprises have chosen CloudWind AI, with average ROI exceeding 300%
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gradient-to-br from-sky-900/20 to-purple-900/20 p-6 rounded-xl border border-sky-500/20">
            <div className="mb-4">
              <div className="text-4xl text-sky-400 mb-2">"</div>
              <p className="text-gray-300 leading-relaxed mb-4">{testimonial.content}</p>
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
            <div className="text-2xl font-bold text-green-400">98%</div>
            <div className="text-sm text-gray-300">Customer Satisfaction</div>
          </div>
          <div className="bg-blue-900/20 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-400">300%+</div>
            <div className="text-sm text-gray-300">Average Return on Investment</div>
          </div>
          <div className="bg-purple-900/20 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-400">50+</div>
            <div className="text-sm text-gray-300">Success Cases</div>
          </div>
        </div>
      </div>

    </section>
  );
};
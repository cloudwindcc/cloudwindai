import React from 'react';

export const ServicesEN: React.FC = () => {
  const services = [
    {
      title: "AI Marketing Suite",
      description: "One-stop AI marketing solution: intelligent website generation, social media content creation, and brand story development. Build a complete digital marketing system within 30 days, reducing customer acquisition costs by up to 60%.",
      features: ["AI Website/App Generation", "Social Media Content Engine", "Brand Story Planning", "Marketing Data Analysis"],
      price: "From $1,280 USD",
      icon: "🚀"
    },
    {
      title: "AI Operations Assistant", 
      description: "Enterprise internal operations intelligence: AI-assisted programming, intelligent customer service, and process automation. Average operational efficiency increases by 40%, reducing labor costs by 35%.",
      features: ["AI-Assisted Programming", "Intelligent Customer Service", "Process Automation", "Efficiency Analysis"],
      price: "$200-650 USD/month",
      icon: "⚡"
    },
    {
      title: "AI Intelligent Agents",
      description: "Custom AI agent development: tailored to business needs, 24/7 non-stop operation. Can replace 80% of repetitive work with ROI exceeding 300%.",
      features: ["Intelligent Customer Service", "Legal Assistant", "Financial Analyst", "Business Process Automation"],
      price: "Custom Quote",
      icon: "🤖"
    },
    {
      title: "AI Strategic Decision Engine",
      description: "Enterprise-level AI decision system: build decision models based on private data, providing business insights. Help enterprises make smarter strategic decisions.",
      features: ["Private Knowledge Base", "Decision Support Models", "Business Insight Analysis", "Strategic Planning Assistance"],
      price: "From $65 USD/hour",
      icon: "🎯"
    }
  ];

  return (
    <section id="services" className="content-section" style={{
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-300">Four Core AI Solutions</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          AI cost reduction and efficiency solutions designed for traditional enterprises, 30-day standard delivery with quantifiable business value
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="card p-8 rounded-xl shadow-2xl hover:shadow-sky-500/40 transition-all duration-300 transform hover:-translate-y-2" style={{
            backgroundColor: 'rgba(17, 24, 39, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(55, 65, 81, 0.4)'
          }}>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{service.icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-sky-400">{service.title}</h3>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-sky-300 mb-2">Core Features:</h4>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="text-xs bg-sky-800/30 text-sky-300 px-3 py-1 rounded-full">{feature}</span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-400">{service.price}</span>
              <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300">
                Consult Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-sky-600 to-purple-600 p-6 rounded-xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">🎯 30-Day Standard Delivery Commitment</h3>
          <p className="text-gray-200 mb-4">
            Fixed Cycle · Fixed Price · Prototype First · Measurable Results
          </p>
          <div className="flex justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold">60%+</div>
              <div className="text-sm">Customer Acquisition Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">40%+</div>
              <div className="text-sm">Operational Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">300%+</div>
              <div className="text-sm">Return on Investment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
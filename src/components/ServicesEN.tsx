import React from 'react';

export const ServicesEN: React.FC = () => {
  const services = [
    {
      title: 'AI Marketing Suite',
      description:
        'One-stop AI marketing support for websites, social content, brand storytelling, and marketing data analysis, helping enterprises reduce acquisition costs and improve brand execution.',
      features: ['Website/App Generation', 'Content Engine', 'Brand Story Planning', 'Marketing Analytics'],
      price: 'From $1,280 USD',
      icon: '🚀',
    },
    {
      title: 'AI Operations & Agent Automation',
      description:
        'A unified product combining operations optimization and custom AI agents: AI-assisted development, intelligent customer service, workflow automation, and role-specific assistants.',
      features: ['AI-Assisted Development', 'Service Agents', 'Workflow Automation', 'Role Assistants'],
      price: 'Scenario-based Quote',
      icon: '⚙️',
    },
    {
      title: 'AI Strategic Decision Engine',
      description:
        'Build private knowledge bases and decision models from enterprise data, providing business insights, operating analysis, and strategic planning support for management teams.',
      features: ['Private Knowledge Base', 'Decision Models', 'Business Insight Analysis', 'Strategic Planning'],
      price: 'From $65 USD/hour',
      icon: '🎯',
    },
    {
      title: 'Financial Consulting & Advisory',
      description:
        'Financial advisory services for growing companies: business model review, financial modeling, financing strategy, valuation planning, and investor material preparation.',
      features: ['Financial Modeling', 'Financing Strategy', 'Valuation Planning', 'Investor Materials'],
      price: 'Project-based Quote',
      icon: '💼',
    },
  ];

  return (
    <section
      id="services"
      className="content-section"
      style={{
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        backgroundColor: 'rgba(10, 15, 31, 0.7)',
        borderRadius: '8px',
        marginTop: '2rem',
        marginBottom: '2rem',
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-300">
          Core Services
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Four focused service modules across AI implementation, operating efficiency, strategic decisions, and capital planning
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-7">
        {services.map((service) => (
          <div
            key={service.title}
            className="card p-7 md:p-8 rounded-lg shadow-2xl hover:shadow-sky-500/35 transition-all duration-300 transform hover:-translate-y-2"
            style={{
              backgroundColor: 'rgba(17, 24, 39, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(55, 65, 81, 0.4)',
            }}
          >
            <div className="flex items-start gap-4 mb-5">
              <span className="text-3xl leading-none">{service.icon}</span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-sky-400">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-300 mb-5 leading-relaxed">
              {service.description}
            </p>

            <div className="mb-5">
              <h4 className="text-sm font-semibold text-sky-300 mb-3">
                Core Features:
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs bg-sky-800/30 text-sky-300 px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center gap-4">
              <span className="text-base font-bold text-green-400">
                {service.price}
              </span>
              <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300">
                Consult Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-sky-600 to-purple-600 p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            30-Day Standard Delivery Commitment
          </h3>
          <p className="text-sm md:text-base text-gray-200 mb-4">
            Fixed Cycle · Fixed Price · Prototype First · Measurable Results
          </p>
          <div className="flex justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">60%+</div>
              <div className="text-sm">Customer Acquisition Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">40%+</div>
              <div className="text-sm">Operational Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">300%+</div>
              <div className="text-sm">Return on Investment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

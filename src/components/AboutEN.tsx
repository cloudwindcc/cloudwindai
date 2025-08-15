import React from 'react';

export const AboutEN: React.FC = () => {
  const stats = [
    { label: "AI Project Experience", value: "50+", desc: "Successfully Delivered Cases" },
    { label: "Customer Satisfaction", value: "98%", desc: "Continuous Partnership Rate" },
    { label: "Average ROI", value: "300%", desc: "Return on Investment Multiple" },
    { label: "Delivery Cycle", value: "30 Days", desc: "Standard Delivery Time" }
  ];

  const team = [
    { name: "Kevin", role: "CEO & Founder", expertise: "AI Strategy, Business Consulting", avatar: "K" },
    { name: "Edward", role: "CTO & Technical Director", expertise: "AI Architecture, Product Development", avatar: "E" },
    { name: "Mary", role: "CMO & Marketing Director", expertise: "Brand Building, Customer Growth", avatar: "M" }
  ];

  return (
    <section id="about" className="content-section" style={{
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-300">About CloudWind AI</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Hong Kong's leading AI solution provider, focused on empowering digital transformation for traditional enterprises
        </p>
      </div>

      {/* Core Data Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-sky-900/20 rounded-lg border border-sky-500/20">
            <div className="text-3xl font-bold text-sky-400 mb-2">{stat.value}</div>
            <div className="text-sm text-sky-300 mb-1">{stat.label}</div>
            <div className="text-xs text-gray-400">{stat.desc}</div>
          </div>
        ))}
      </div>

      {/* Company Introduction */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800/50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-sky-400 mb-4">🎯 Our Mission</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            CloudWind AI Limited was established in Hong Kong, focusing on providing AI cost reduction and efficiency solutions for traditional enterprises.
            We believe AI technology can help businesses understand complexity, make smarter decisions, and choose the right direction at critical decision points.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Through our 30-day standard delivery process, we have helped 50+ enterprises achieve digital transformation with an average ROI exceeding 300%,
            becoming the most trusted AI solution provider in the Hong Kong region.
          </p>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-sky-400 mb-4">🏆 Core Advantages</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span><strong>Industry Experts:</strong> Team from top AI companies and consulting firms</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span><strong>Rapid Delivery:</strong> 30-day standard process, prototype first</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span><strong>Results Guaranteed:</strong> Quantifiable cost reduction and efficiency improvements</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span><strong>Continuous Support:</strong> 24/7 AI customer service, long-term maintenance</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Founding Team */}
      <div className="bg-gradient-to-r from-sky-900/30 to-purple-900/30 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-center mb-8 text-sky-300">💎 Diamond Combination Founding Team</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg">
              <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                {member.avatar}
              </div>
              <h4 className="text-lg font-bold text-sky-400">{member.name}</h4>
              <p className="text-sm text-sky-300 mb-2">{member.role}</p>
              <p className="text-xs text-gray-400">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Success Stories */}
      <div className="mt-12 bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-center mb-6 text-green-300">📈 Customer Success Cases</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-green-400">Retail Industry</div>
            <div className="text-sm text-gray-300">After AI customer service launched in a supermarket chain, labor costs reduced by 45%</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">Manufacturing Industry</div>
            <div className="text-sm text-gray-300">AI quality inspection system in a factory, defect rate decreased by 60%</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">Financial Industry</div>
            <div className="text-sm text-gray-300">AI risk control model for a bank, bad debt rate reduced by 35%</div>
          </div>
        </div>
      </div>

    </section>
  );
};
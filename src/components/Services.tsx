import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "AI智能營銷套件",
      english: "AI Marketing Suite",
      description: "一站式AI營銷解決方案：智能網站生成、社交媒體內容創作、品牌故事策劃。30天內構建完整的數字營銷體系，降低獲客成本達60%。",
      features: ["AI網站/APP生成", "社交媒體內容引擎", "品牌故事策劃", "營銷數據分析"],
      price: "10,000 HKD起",
      icon: "🚀"
    },
    {
      title: "AI運營優化助手", 
      english: "AI Operations Assistant",
      description: "企業內部運營智能化：AI輔助程式設計、智能客服、流程自動化。平均可提升運營效率40%，降低人力成本35%。",
      features: ["AI輔助程式設計", "智能客服系統", "流程自動化", "效率提升分析"],
      price: "1,500-5,000 HKD/月",
      icon: "⚡"
    },
    {
      title: "AI智能體定制",
      english: "AI Intelligent Agents",
      description: "專屬AI智能體開發：根據業務需求定制，7x24小時不間斷工作。可替代80%重複性工作，投資回報率超過300%。",
      features: ["智能客服", "法務助手", "財務分析師", "業務流程自動化"],
      price: "定制報價",
      icon: "🤖"
    },
    {
      title: "AI戰略決策引擎",
      english: "AI Strategy Engine", 
      description: "企業級AI決策系統：基於私有數據構建決策模型，提供商業洞察。協助企業做出更明智的戰略決策。",
      features: ["私有知識庫構建", "決策支持模型", "商業洞察分析", "戰略規劃輔助"],
      price: "500 HKD/小時起",
      icon: "🎯"
    },
    {
      title: "財務諮詢與融資顧問",
      english: "Financial Advisory",
      description: "面向成長型企業的財務顧問服務：梳理商業模式、搭建財務模型、設計融資方案，協助企業準備投資人溝通材料並提升融資效率。",
      features: ["財務模型搭建", "融資方案設計", "估值與股權規劃", "投資人材料準備"],
      price: "按項目評估",
      icon: "💼"
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-300">主营业务</h2>
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          围绕AI落地、经营效率和资本规划，为企业提供可执行、可衡量的增长支持
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="card p-8 rounded-xl shadow-2xl hover:shadow-sky-500/40 transition-all duration-300 transform hover:-translate-y-2" style={{
            backgroundColor: 'rgba(17, 24, 39, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(55, 65, 81, 0.4)'
          }}>
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">{service.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-sky-400">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.english}</p>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">{service.description}</p>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-sky-300 mb-2">核心功能：</h4>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="text-xs bg-sky-800/30 text-sky-300 px-3 py-1 rounded-full">{feature}</span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-base font-bold text-green-400">{service.price}</span>
              <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300">
                立即咨询
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-sky-600 to-purple-600 p-6 rounded-xl max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">30天标准交付承诺</h3>
          <p className="text-sm md:text-base text-gray-200 mb-4">
            固定周期 · 固定价格 · 原型先行 · 效果可测
          </p>
          <div className="flex justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">60%+</div>
              <div className="text-sm">获客成本降低</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">40%+</div>
              <div className="text-sm">运营效率提升</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">300%+</div>
              <div className="text-sm">投资回报率</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

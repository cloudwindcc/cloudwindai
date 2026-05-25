import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'AI 智能營銷套件',
      english: 'AI Marketing Suite',
      description:
        '一站式 AI 營銷解決方案：智能網站生成、社交媒體內容創作、品牌故事策劃與營銷數據分析，協助企業降低獲客成本並提升品牌表達效率。',
      features: ['AI 網站/App 生成', '內容引擎', '品牌故事策劃', '營銷數據分析'],
      price: '10,000 HKD 起',
      icon: '🚀',
    },
    {
      title: 'AI 營運與智能體助手',
      english: 'AI Operations & Agents',
      description:
        '將營運優化與智能體定制合併為統一產品：覆蓋 AI 輔助開發、智能客服、流程自動化、法務/財務/業務助手，減少重複工作並提升內部協作效率。',
      features: ['AI 輔助開發', '智能客服與 Agent', '流程自動化', '崗位助手定制'],
      price: '按場景評估',
      icon: '⚙️',
    },
    {
      title: 'AI 戰略決策引擎',
      english: 'AI Strategy Engine',
      description:
        '基於企業私有數據構建知識庫與決策模型，提供經營洞察、業務分析和戰略規劃輔助，讓管理層更快做出高質量判斷。',
      features: ['私有知識庫', '決策支持模型', '商業洞察分析', '戰略規劃輔助'],
      price: '500 HKD/小時起',
      icon: '🎯',
    },
    {
      title: '財務諮詢與融資顧問',
      english: 'Financial Advisory',
      description:
        '面向成長型企業的財務顧問服務：梳理商業模式、搭建財務模型、設計融資方案，協助企業準備投資人溝通材料並提升融資效率。',
      features: ['財務模型搭建', '融資方案設計', '估值與股權規劃', '投資人材料準備'],
      price: '按項目評估',
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
        backgroundColor: 'rgba(10, 15, 31, 0.68)',
        borderRadius: '8px',
        marginTop: '2rem',
        marginBottom: '2rem',
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-300">
          核心業務
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          四個清晰模組，覆蓋 AI 落地、營運效率、戰略決策和資本規劃，為企業提供可執行、可衡量的增長支持。
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
                <p className="text-sm text-gray-400">{service.english}</p>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-300 mb-5 leading-relaxed">
              {service.description}
            </p>

            <div className="mb-5">
              <h4 className="text-sm font-semibold text-sky-300 mb-3">
                核心功能：
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
              <a
                href="#contact"
                className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
              >
                預約諮詢
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-sky-600 to-purple-600 p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            30 天標準交付承諾
          </h3>
          <p className="text-sm md:text-base text-gray-200 mb-4">
            固定週期 · 固定價格 · 原型先行 · 效果可測
          </p>
          <div className="flex justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">60%+</div>
              <div className="text-sm">獲客成本降低</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">40%+</div>
              <div className="text-sm">營運效率提升</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">300%+</div>
              <div className="text-sm">投資回報率</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

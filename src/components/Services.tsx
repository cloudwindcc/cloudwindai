import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'AI 智能營銷套件',
      english: 'AI Marketing Suite',
      description:
        '網站及數字內容工具的設計與開發，涵蓋品牌內容、網站體驗和營銷數據整理。',
      features: ['AI 網站/App 生成', '內容引擎', '品牌故事策劃', '營銷數據分析'],
      price: '10,000 HKD 起',
      icon: '🚀',
    },
    {
      title: 'AI 營運與智能體助手',
      english: 'AI Operations & Agents',
      description:
        '為內部知識檢索、客戶支援及日常流程建立智能體和自動化工具，減少重複操作。',
      features: ['AI 輔助開發', '智能客服與 Agent', '流程自動化', '崗位助手定製'],
      price: '按場景評估',
      icon: '⚙️',
    },
    {
      title: 'AI 戰略決策引擎',
      english: 'AI Strategy Engine',
      description:
        '基於企業資料建立知識庫、數據面板及分析工具，協助團隊整理資訊與支援營運規劃。',
      features: ['私有知識庫', '決策支持模型', '商業洞察分析', '戰略規劃輔助'],
      price: '500 HKD/小時起',
      icon: '🎯',
    },
    {
      title: '網站與應用開發',
      english: 'Web & App Development',
      description:
        '按需求設計企業網站、內容平台及網絡應用，提供原型、前端開發與後續維護。',
      features: ['企業網站', '內容平台', '應用原型', '維護與迭代'],
      price: '按項目評估',
      icon: '🧩',
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
          聚焦 AI 工具、營運流程、數據分析與數字產品，按項目需求確定交付範圍。
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
            從需求到交付
          </h3>
          <p className="text-sm md:text-base text-gray-200 mb-4">
            需求溝通 · 方案設計 · 原型驗證 · 開發迭代
          </p>
          <a href="#contact" className="inline-block text-white underline underline-offset-4">討論項目需求 ↗</a>
        </div>
      </div>
    </section>
  );
};

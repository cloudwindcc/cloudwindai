import React from 'react';

export const About: React.FC = () => {
  const stats = [
    { label: 'AI 項目經驗', value: '50+', desc: '成功交付案例' },
    { label: '客戶滿意度', value: '98%', desc: '持續合作率' },
    { label: '平均 ROI', value: '300%', desc: '投資回報倍數' },
    { label: '交付週期', value: '30天', desc: '標準交付時間' },
  ];

  const team = [
    { role: '戰略與執行負責人', expertise: '負責公司戰略、商業諮詢、客戶關係與融資推進', avatar: '01' },
    { role: '技術與 AI 架構負責人', expertise: '負責 AI 架構、產品開發、技術路線與交付質量', avatar: '02' },
    { role: '市場與增長負責人', expertise: '負責品牌建設、市場拓展、客戶增長與渠道合作', avatar: '03' },
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-300">關於雲風智能</h2>
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          香港 AI 解決方案與企業增長顧問，專注為傳統企業提供可落地的智能轉型支持。
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center p-6 bg-sky-900/20 rounded-lg border border-sky-500/20">
            <div className="text-2xl md:text-3xl font-bold text-sky-400 mb-2">{stat.value}</div>
            <div className="text-sm text-sky-300 mb-1">{stat.label}</div>
            <div className="text-xs text-gray-400">{stat.desc}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800/50 p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold text-sky-400 mb-4">我們的使命</h3>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
            雲風智能有限公司（CloudWind AI Limited）成立於香港，專注為傳統企業提供 AI 降本增效、營運自動化與財務顧問解決方案。
          </p>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            我們相信 AI 技術不只是工具，而是企業重構效率、收入與資本價值的底層能力。
          </p>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold text-sky-400 mb-4">核心優勢</h3>
          <ul className="space-y-3 text-sm md:text-base text-gray-300">
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span><strong>行業專家：</strong>團隊具備 AI、諮詢與企業服務經驗</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span><strong>快速交付：</strong>30 天標準流程，原型先行</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span><strong>效果可衡量：</strong>以效率、收入與資本溝通成果作為交付目標</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span><strong>持續支持：</strong>提供長期維護、流程優化與顧問支持</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-sky-900/30 to-purple-900/30 p-8 rounded-lg">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-8 text-sky-300">核心團隊分工</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.role} className="text-center p-6 bg-gray-800/50 rounded-lg">
              <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-4">
                {member.avatar}
              </div>
              <h4 className="text-base font-bold text-sky-400 mb-2">{member.role}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

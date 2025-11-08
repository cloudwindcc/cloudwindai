import React from 'react';

export const About: React.FC = () => {
  const stats = [
    { label: "AI项目经验", value: "50+", desc: "成功交付案例" },
    { label: "客户满意度", value: "98%", desc: "持续合作率" },
    { label: "平均ROI", value: "300%", desc: "投资回报倍数" },
    { label: "交付周期", value: "30天", desc: "标准交付时间" }
  ];

  const team = [
    { name: "William", role: "CEO & 创始人", expertise: "AI战略、商业咨询", avatar: "K" },
    { name: "Edward", role: "CTO & 技术总监", expertise: "AI架构、产品开发", avatar: "E" },
    { name: "Mary", role: "CMO & 市场总监", expertise: "品牌建设、客户增长", avatar: "M" }
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-300">关于雲風智能</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          香港领先的AI解决方案提供商，专注为传统企业数字化转型赋能
        </p>
      </div>

      {/* 核心数据展示 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-sky-900/20 rounded-lg border border-sky-500/20">
            <div className="text-3xl font-bold text-sky-400 mb-2">{stat.value}</div>
            <div className="text-sm text-sky-300 mb-1">{stat.label}</div>
            <div className="text-xs text-gray-400">{stat.desc}</div>
          </div>
        ))}
      </div>

      {/* 公司介绍 */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800/50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-sky-400 mb-4">🎯 我们的使命</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            雲風智能有限公司（CloudWind AI Limited）成立于香港，专注为传统企业提供AI降本增效解决方案。
            我们相信AI技术能够帮助企业洞察复杂性，做出更明智的决策，在关键决策点选择正确方向。
          </p>
          <p className="text-gray-300 leading-relaxed">
            通过30天标准交付流程，我们已为50+企业实现数字化转型，平均ROI超过300%，
            成为香港地区最受信赖的AI解决方案提供商。
          </p>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-sky-400 mb-4">🏆 核心优势</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span><strong>行业专家：</strong>团队来自顶尖AI公司和咨询机构</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span><strong>快速交付：</strong>30天标准流程，原型先行</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span><strong>效果保证：</strong>可量化的降本增效成果</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span><strong>持续支持：</strong>7x24小时AI客服，长期维护</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 创始团队 */}
      <div className="bg-gradient-to-r from-sky-900/30 to-purple-900/30 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-center mb-8 text-sky-300">💎 钻石组合创始团队</h3>
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

      {/* 客户见证 */}
      <div className="mt-12 bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-center mb-6 text-green-300">📈 客户成功案例</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-green-400">零售行业</div>
            <div className="text-sm text-gray-300">某连锁超市AI客服上线后，人力成本降低45%</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">制造行业</div>
            <div className="text-sm text-gray-300">某工厂AI质检系统，次品率下降60%</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">金融行业</div>
            <div className="text-sm text-gray-300">某银行AI风控模型，坏账率降低35%</div>
          </div>
        </div>
      </div>

    </section>
  );
};

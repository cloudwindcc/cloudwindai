import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'AI智能营销套件',
      english: 'AI Marketing Suite',
      description:
        '一站式AI营销解决方案：智能网站生成、社交媒体内容创作、品牌故事策划与营销数据分析，帮助企业降低获客成本并提升品牌表达效率。',
      features: ['AI网站/App生成', '内容引擎', '品牌故事策划', '营销数据分析'],
      price: '10,000 HKD起',
      icon: '🚀',
    },
    {
      title: 'AI运营与智能体助手',
      english: 'AI Operations & Agents',
      description:
        '将运营优化与智能体定制合并为统一产品：覆盖AI辅助开发、智能客服、流程自动化、法务/财务/业务助手，减少重复工作并提升内部协作效率。',
      features: ['AI辅助开发', '智能客服与Agent', '流程自动化', '岗位助手定制'],
      price: '按场景评估',
      icon: '⚙️',
    },
    {
      title: 'AI战略决策引擎',
      english: 'AI Strategy Engine',
      description:
        '基于企业私有数据构建知识库与决策模型，提供经营洞察、业务分析和战略规划辅助，让管理层更快做出高质量判断。',
      features: ['私有知识库', '决策支持模型', '商业洞察分析', '战略规划辅助'],
      price: '500 HKD/小时起',
      icon: '🎯',
    },
    {
      title: '财务咨询与融资顾问',
      english: 'Financial Advisory',
      description:
        '面向成长型企业的财务顾问服务：梳理商业模式、搭建财务模型、设计融资方案，协助企业准备投资人沟通材料并提升融资效率。',
      features: ['财务模型搭建', '融资方案设计', '估值与股权规划', '投资人材料准备'],
      price: '按项目评估',
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
          主营业务
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          四个清晰模块，覆盖AI落地、运营效率、战略决策和资本规划，为企业提供可执行、可衡量的增长支持
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
              <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300">
                立即咨询
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-sky-600 to-purple-600 p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            30天标准交付承诺
          </h3>
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

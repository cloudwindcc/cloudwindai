import React from 'react';

export const Hero: React.FC = () => {
  const metrics = [
    { value: '4', label: '核心业务模块' },
    { value: '30天', label: '标准交付周期' },
    { value: '60%+', label: '获客成本优化目标' },
    { value: '7x24', label: '智能服务覆盖' },
  ];

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        padding: '110px 24px 80px',
        backgroundColor: 'rgba(10, 15, 31, 0.42)',
        marginTop: '60px',
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-center">
          <div className="text-left">
            <p className="text-sm md:text-base font-medium text-sky-300 mb-5">
              CloudWind AI Limited
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-7">
              <span className="block text-sky-400">雲風智能</span>
              <span className="block text-gray-100 text-3xl md:text-5xl lg:text-6xl mt-3">
                让 AI 成为企业增长的执行力
              </span>
            </h1>

            <p className="text-base md:text-xl text-gray-300 max-w-2xl mb-9 leading-relaxed">
              面向传统企业提供 AI 落地、运营自动化、战略决策与财务顾问服务。以清晰的交付周期、可衡量的效率提升和资本规划能力，帮助企业完成下一阶段增长。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg text-base transition-colors duration-300 shadow-lg hover:shadow-sky-500/40 text-center"
              >
                联系我们
              </a>
              <a
                href="#services"
                className="border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-white font-semibold py-3 px-8 rounded-lg text-base transition-colors duration-300 text-center"
              >
                查看主营业务
              </a>
            </div>
          </div>

          <div className="lg:pl-10">
            <div className="border border-sky-500/20 bg-slate-950/45 backdrop-blur-sm rounded-lg p-6 md:p-8">
              <div className="mb-7">
                <p className="text-sm uppercase tracking-[0.18em] text-gray-400 mb-3">
                  operating focus
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-100 leading-snug">
                  从业务效率到融资沟通，形成可执行的增长闭环
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                {metrics.map((metric) => (
                  <div key={metric.label} className="border-t border-sky-500/20 pt-4">
                    <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400 leading-relaxed">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-8">
                主营业务已聚合为四个清晰模块：AI营销、运营与智能体自动化、AI战略决策、财务咨询与融资顾问。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

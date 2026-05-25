import React from 'react';

export const Hero: React.FC = () => {
  const priorities = [
    { title: 'AI 落地', desc: '從場景拆解到原型交付' },
    { title: '營運自動化', desc: '以智能體承接重複流程' },
    { title: '戰略決策', desc: '把數據轉化為管理判斷' },
    { title: '財務顧問', desc: '提升融資與資本溝通效率' },
  ];

  const metrics = [
    { value: '4', label: '核心業務模組' },
    { value: '30天', label: '標準交付週期' },
    { value: '60%+', label: '獲客成本優化目標' },
  ];

  return (
    <section
      id="hero"
      className="hero-section overflow-hidden"
      style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        padding: '120px 24px 88px',
        background:
          'radial-gradient(circle at 18% 24%, rgba(14, 165, 233, 0.18), transparent 28%), linear-gradient(135deg, rgba(8, 13, 28, 0.92), rgba(10, 15, 31, 0.55))',
        marginTop: '60px',
      }}
    >
      <div className="pointer-events-none absolute inset-y-24 left-0 w-px bg-sky-300/20" />
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-14 lg:gap-20 items-center">
          <div className="text-left">
            <p className="text-sm md:text-base font-medium text-sky-300 mb-6">
              CloudWind AI Limited
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-7">
              <span className="block text-sky-300">雲起風行，</span>
              <span className="block text-gray-100 text-3xl md:text-5xl lg:text-6xl mt-4">
                AI 驅動企業增長
              </span>
            </h1>

            <p className="text-base md:text-xl text-gray-300 max-w-2xl mb-9 leading-relaxed">
              雲風智能為傳統企業提供 AI
              落地、營運自動化、戰略決策與財務顧問服務，讓智能真正轉化為效率、收入與資本價值。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold py-3 px-8 rounded-lg text-base transition-colors duration-300 shadow-lg hover:shadow-sky-500/40 text-center"
              >
                預約諮詢
              </a>
              <a
                href="#services"
                className="border border-sky-400/80 text-sky-200 hover:bg-sky-500 hover:text-slate-950 font-semibold py-3 px-8 rounded-lg text-base transition-colors duration-300 text-center"
              >
                查看核心業務
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-xl border-t border-sky-300/20 pt-6">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-2xl md:text-3xl font-bold text-sky-300">
                    {metric.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-4">
            <div className="relative rounded-lg border border-sky-300/20 bg-slate-950/55 p-6 md:p-8 shadow-2xl shadow-sky-950/50 backdrop-blur-sm">
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />

              <div className="mb-8">
                <p className="text-sm text-sky-300 mb-3">CloudWind Growth Stack</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-100 leading-snug">
                  把「技術能力」整理成可以被管理、衡量和複製的增長系統
                </h2>
              </div>

              <div className="space-y-5">
                {priorities.map((item, index) => (
                  <div
                    key={item.title}
                    className="grid grid-cols-[48px_1fr] gap-4 border-t border-slate-700/70 pt-5"
                  >
                    <div className="h-10 w-10 rounded-full border border-sky-300/30 bg-sky-400/10 flex items-center justify-center text-sm font-semibold text-sky-200">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-100">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg bg-sky-400/10 border border-sky-300/20 p-5">
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  適合正在尋找 AI 轉型、營運提效、融資準備與企業增長顧問支持的中小型及成長型企業。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

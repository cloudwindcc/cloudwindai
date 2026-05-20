import React from 'react';

export const HeroEN: React.FC = () => {
  const metrics = [
    { value: '4', label: 'Core service modules' },
    { value: '30 Days', label: 'Standard delivery cycle' },
    { value: '60%+', label: 'Customer acquisition cost target' },
    { value: '24/7', label: 'Intelligent service coverage' },
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
              <span className="block text-sky-400">CloudWind AI</span>
              <span className="block text-gray-100 text-3xl md:text-5xl lg:text-6xl mt-3">
                AI Execution for Enterprise Growth
              </span>
            </h1>

            <p className="text-base md:text-xl text-gray-300 max-w-2xl mb-9 leading-relaxed">
              We help traditional enterprises implement AI, automate operations, improve strategic decisions, and prepare stronger financial and fundraising communications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg text-base transition-colors duration-300 shadow-lg hover:shadow-sky-500/40 text-center"
              >
                Contact Us
              </a>
              <a
                href="#services"
                className="border border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-white font-semibold py-3 px-8 rounded-lg text-base transition-colors duration-300 text-center"
              >
                View Services
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
                  A practical growth loop from efficiency gains to capital readiness
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
                The main business now centers on four focused modules: AI marketing, operations and agent automation, AI strategy, and financial advisory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

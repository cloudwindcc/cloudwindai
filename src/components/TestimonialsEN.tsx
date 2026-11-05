import React from 'react';
export const TestimonialsEN: React.FC = () => {
  const steps = [['01', 'Discovery', 'Define users, workflows and the intended deliverables.'], ['02', 'Prototype', 'Review a visible page or functional prototype together.'], ['03', 'Build and Iterate', 'Implement, test and refine within an agreed scope.']];
  return <section id="testimonials" className="content-section" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '2rem auto', position: 'relative', zIndex: 1, backgroundColor: 'rgba(10, 15, 31, 0.7)', borderRadius: '8px' }}>
    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-300">Project Delivery</h2><p className="text-base md:text-lg text-gray-300">From practical challenges to usable digital tools.</p></div>
    <div className="grid md:grid-cols-3 gap-8">{steps.map(([number, title, description]) => <div key={number} className="bg-gradient-to-br from-sky-900/20 to-purple-900/20 p-6 rounded-lg border border-sky-500/20"><div className="text-2xl text-sky-400 mb-4">{number}</div><h3 className="text-xl text-sky-200 mb-3">{title}</h3><p className="text-gray-300 leading-relaxed">{description}</p></div>)}</div>
    <div className="text-center mt-10"><a href="/cases?lang=en" className="text-sky-300 underline underline-offset-4">Explore Digital Projects ↗</a></div>
  </section>;
};

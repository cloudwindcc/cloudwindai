import React from 'react';
import { OrganizationChart } from './OrganizationChart';

export const AboutEN: React.FC = () => (
  <section id="about" className="content-section" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '2rem auto', position: 'relative', zIndex: 1, backgroundColor: 'rgba(10, 15, 31, 0.7)', borderRadius: '8px' }}>
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-300">About CloudWind AI</h2>
      <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">CloudWind AI Limited was established in Hong Kong. We focus on AI applications, business workflow tools and digital product development.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="bg-gray-800/50 p-8 rounded-lg">
        <h3 className="text-xl md:text-2xl font-bold text-sky-400 mb-4">What We Do</h3>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">We work with teams to understand practical use cases, design usable AI tools, websites and automated workflows, and provide development and maintenance within an agreed project scope.</p>
      </div>
      <div className="bg-gray-800/50 p-8 rounded-lg">
        <h3 className="text-xl md:text-2xl font-bold text-sky-400 mb-4">How We Work</h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-300">
          <li>• Discovery and workflow mapping</li><li>• Prototyping and validation</li><li>• Websites, applications and AI agents</li><li>• Maintenance and iteration</li>
        </ul>
      </div>
    </div>
    <OrganizationChart english />
  </section>
);

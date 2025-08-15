import React from 'react';
import { Link } from 'react-router-dom';

export const HeroEN: React.FC = () => {
  return (
    <section id="hero" className="hero-section" style={{
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      padding: '20px',
      backgroundColor: 'rgba(10, 15, 31, 0.4)',
      marginTop: '60px' // Account for fixed navbar
    }}>
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-sky-400">CloudWind AI</span>
          <br />
          <span className="text-gray-200 text-4xl md:text-5xl lg:text-6xl">AI Empowerment · Cost Reduction</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
          AI solutions designed specifically for traditional enterprises<br className="hidden md:block" />
          30-day standard delivery with quantifiable cost reduction results
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
          <div className="bg-sky-500/20 backdrop-blur-sm border border-sky-500/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-sky-400">$811B</div>
            <div className="text-sm text-gray-300">AI Market Size 2028</div>
          </div>
          <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-400">30 Days</div>
            <div className="text-sm text-gray-300">Standard Delivery</div>
          </div>
          <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-purple-400">$1M</div>
            <div className="text-sm text-gray-300">Seed Funding</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/bp" 
            className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-sky-500/50"
          >
            📊 View Business Plan
          </Link>
          <a 
            href="#contact" 
            className="border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            📧 Contact CEO Now
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-400 mb-1">4</div>
            <div className="text-sm text-gray-300">Core AI Products</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">$10K+</div>
            <div className="text-sm text-gray-300">Minimum Investment</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
            <div className="text-sm text-gray-300">AI Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">500+</div>
            <div className="text-sm text-gray-300">Consultations/Hour</div>
          </div>
        </div>
      </div>
    </section>
  );
};
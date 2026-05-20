import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LayoutEN } from './components/LayoutEN';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';
import { HeroEN } from './components/HeroEN';
import { ServicesEN } from './components/ServicesEN';
import { AboutEN } from './components/AboutEN';
import { ContactEN } from './components/ContactEN';
import { TestimonialsEN } from './components/TestimonialsEN';
import { ParticleNetwork } from './components/ParticleNetwork';

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <div className="relative">
        <ParticleNetwork />
        <Routes>
          {/* Chinese Version */}
          <Route path="/" element={
            <Layout>
              <Hero />
              <Services />
              <About />
              <Testimonials />
              <Contact />
            </Layout>
          } />
          
          {/* English Version */}
          <Route path="/en" element={
            <LayoutEN>
              <HeroEN />
              <ServicesEN />
              <AboutEN />
              <TestimonialsEN />
              <ContactEN />
            </LayoutEN>
          } />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

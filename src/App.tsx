import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';
import { ParticleNetwork } from './components/ParticleNetwork';
import { BPPage } from './components/BPPage';

function App() {
  return (
    <Router>
      <div className="relative">
        <ParticleNetwork />
        <Routes>
          <Route path="/" element={
            <Layout>
              <Hero />
              <Services />
              <About />
              <Testimonials />
              <Contact />
            </Layout>
          } />
          <Route path="/bp" element={<BPPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ParticleNetwork } from './components/ParticleNetwork';

function App() {
  return (
    <div className="relative">
      <ParticleNetwork />
      <Layout>
        <Hero />
        <Services />
        <About />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
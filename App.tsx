import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { StrategyGenerator } from './components/StrategyGenerator';
import { Footer } from './components/Footer';
import { TechBackground } from './components/TechBackground';
import { SectorTicker } from './components/SectorTicker';
import { TechStack } from './components/TechStack';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#1c1c1e]">

      {/* Dark background with subtle glowing orbs */}
      <TechBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechStack />
        <div id="services-section">
          <Services />
        </div>
        <Methodology />

        {/* Sector Ticker Section */}
        <section className="py-20 text-center relative z-10 pointer-events-none">
          <h2 className="text-2xl md:text-4xl font-bold inline-block text-gradient-accent" style={{fontFamily: 'Syne, sans-serif'}}>
            L'IA pour <SectorTicker words={["la Finance", "l'Immobilier", "le Retail", "la Santé", "le Juridique"]} />
          </h2>
        </section>

        <StrategyGenerator />
        <Footer />
      </div>

    </div>
  );
}

export default App;

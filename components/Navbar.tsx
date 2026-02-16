import React from 'react';
import { Cpu, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3 bg-[#1c1c1e]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="neumorphic-icon-btn w-9 h-9 text-[#00d4ff]">
            <Cpu size={18} />
          </div>
          <span className="text-lg font-bold text-gradient-accent hidden sm:block" style={{fontFamily: 'Syne, sans-serif'}}>
            Lumina
          </span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="neumorphic-nav-container">
            <a href="#services" className="neumorphic-nav-item">Expertise</a>
            <a href="#demo" className="neumorphic-nav-item">Démonstration</a>
            <a href="#temoignages" className="neumorphic-nav-item">Résultats</a>
          </div>
          <button className="neumorphic-btn-primary px-5 py-2 text-sm">
            Réserver un audit
          </button>
        </div>

        <div className="md:hidden neumorphic-icon-btn w-9 h-9">
          <Menu size={18} />
        </div>
      </div>
    </nav>
  );
};

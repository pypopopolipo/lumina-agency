import React from 'react';
import { Sparkles, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-gradient-to-tr from-indigo-500 to-purple-600 p-2 rounded-lg text-white shadow-lg group-hover:rotate-12 transition-transform">
            <Sparkles size={20} />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors">Lumina</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium text-sm">
          <a href="#services" className="hover:text-indigo-600 transition-colors">Expertise</a>
          <a href="#demo" className="hover:text-indigo-600 transition-colors">Démonstration</a>
          <a href="#temoignages" className="hover:text-indigo-600 transition-colors">Résultats</a>
          <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold text-xs tracking-wide uppercase">
            Réserver un audit
          </button>
        </div>
        
        <div className="md:hidden text-gray-600 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
          <Menu size={24} />
        </div>
      </div>
    </nav>
  );
};
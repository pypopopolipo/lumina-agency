import React from 'react';
import { Zap, PlayCircle } from 'lucide-react';
import { SectorTicker } from './SectorTicker';

export const Hero: React.FC = () => {
  const words = ["Vos Contenus", "Votre Administratif", "Votre Prospection", "Vos Reportings"];

  return (
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center items-center overflow-visible">

      {/* Dynamic Glow Effect behind Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="text-center max-w-5xl mx-auto space-y-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-md border border-indigo-100 shadow-sm text-indigo-600 text-sm font-semibold hover:scale-105 transition-transform cursor-default ring-1 ring-indigo-50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Nouvelle technologie Gemini 2.5 Disponible
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 leading-tight tracking-tight drop-shadow-sm">
          Automatisez <br />
          <SectorTicker words={words} />
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
          Vos équipes passent 30% de leur temps sur des tâches répétitives. Nos agents IA gèrent l'exécution opérationnelle pour que vos talents se concentrent enfin sur la stratégie et le client.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 items-center">
          <a
            href="#demo"
            className="group relative px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-bold shadow-2xl hover:bg-gray-800 transition-all hover:-translate-y-1 overflow-hidden ring-4 ring-transparent hover:ring-indigo-100"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out]"></div>
            <span className="flex items-center gap-2">
              <Zap size={20} className="text-yellow-400 group-hover:rotate-12 transition-transform" />
              Estimer mes gains (Audit)
            </span>
          </a>

          <button className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 font-semibold transition-colors px-6 py-4 bg-white/50 backdrop-blur-sm rounded-full border border-transparent hover:border-indigo-100">
            <PlayCircle size={24} />
            Voir des exemples
          </button>
        </div>
      </div>
    </section>
  );
};
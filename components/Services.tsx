import React from 'react';
import { Radar, Eye, Zap, Brain, TrendingUp, Play, ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  techTag: string;
}

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Veille Stratégique Executive',
    description: 'Ne noyez plus votre ComEx sous l\'info. Nos agents scannent le secteur, filtrent le bruit, synthétisent les tendances clés et livrent un briefing décisionnel mensuel.',
    icon: Radar,
    techTag: 'Perplexity + Claude'
  },
  {
    id: '2',
    title: 'Radar Concurrentiel 360°',
    description: 'Sachez ce qu\'ils font avant leurs clients. Analyse hebdomadaire automatique : changements de prix, nouvelles Ads, features produits et pivots de positionnement.',
    icon: Eye,
    techTag: 'Scraping + Vision AI'
  },
  {
    id: '3',
    title: 'Outreach Contextuel',
    description: 'Fini le \'Spray and Pray\'. À partir d\'un nom, l\'IA trouve le LinkedIn, détecte un \'Buying Signal\' récent (news, levée, poste) et rédige l\'approche ultra-personnalisée.',
    icon: Zap,
    techTag: 'Apify + Clay'
  },
  {
    id: '4',
    title: 'Knowledge Base Agent (RAG)',
    description: 'L\'omniscient de votre entreprise. Un agent sécurisé qui répond instantanément aux questions techniques ou RH de vos équipes en citant vos propres documents internes.',
    icon: Brain,
    techTag: 'LangChain + Pinecone'
  },
  {
    id: '5',
    title: 'SEO & Intent Capture',
    description: 'Captez la demande à la source. L\'IA détecte les questions brûlantes sur Reddit/Forums et génère automatiquement les articles de réponse qui positionnent votre marque en expert.',
    icon: TrendingUp,
    techTag: 'Reddit API + GPT-4'
  },
  {
    id: '6',
    title: 'Infinite Creative Studio',
    description: 'Scalez vos Ads sans studio. Génération quotidienne de vidéos UGC et assets visuels via Veo3/Sora pour tester 10x plus de créatives sur vos canaux d\'acquisition.',
    icon: Play,
    techTag: 'Veo3 + Sora'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">Nos Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Une suite complète pour <br /> <span className="text-gray-400">scaler sans recruter.</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-gray-900 font-bold hover:text-indigo-600 transition-colors">
            Voir tous les services <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 card-gradient-hover"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight className="text-gray-300 group-hover:text-indigo-500" />
              </div>

              <div className="ai-icon-container mb-6 group-hover:scale-110 transition-all duration-300">
                <service.icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed text-sm mb-6">
                {service.description}
              </p>

              {/* Tech Tag */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-all duration-300">
                  <svg className="w-3 h-3 mr-1.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  via {service.techTag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-ai-bottom transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
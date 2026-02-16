import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Globe2, Zap, LineChart, Users, Database, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface TechTool {
  name: string;
  color: string;
}

interface UseCase {
  id: string;
  category: 'Stratégie' | 'Pipeline' | 'Opérations';
  title: string;
  description: string;
  impacts: string[];
  image: string;
  clientLogo: string;
  tools: TechTool[];
  icon: React.ElementType;
}

const toolColors: Record<string, string> = {
  'Claude 3.5': 'bg-purple-100 text-purple-600 border-purple-200',
  'OpenAI': 'bg-blue-100 text-blue-600 border-blue-200',
  'Perplexity': 'bg-emerald-100 text-emerald-600 border-emerald-200',
  'ScrapingBee': 'bg-orange-100 text-orange-600 border-orange-200',
  'Vision AI': 'bg-indigo-100 text-indigo-600 border-indigo-200',
  'Clay': 'bg-slate-100 text-slate-700 border-slate-200',
  'Phantombuster': 'bg-red-100 text-red-600 border-red-200',
  'n8n': 'bg-orange-600/10 text-orange-600 border-orange-200',
  'Salesforce': 'bg-blue-500/10 text-blue-500 border-blue-200',
  'Voiceflow': 'bg-cyan-100 text-cyan-600 border-cyan-200',
  'LangChain': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  'Fivetran': 'bg-blue-100 text-blue-700 border-blue-200',
  'Dash': 'bg-indigo-50 text-indigo-600 border-indigo-100'
};

const useCases: UseCase[] = [
  {
    id: 'veille-luxe',
    category: 'Stratégie',
    title: 'Veille Stratégique Executive',
    description: 'Automatisation de la veille sectorielle et consolidation des signaux stratégiques pour faciliter la prise de décision au niveau ComEx.',
    impacts: ['Agrégation multi-flux intelligente', 'Filtrage par entités nommées (IA)', 'Génération de rapports de synthèse'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    clientLogo: 'MAISON ALMA',
    tools: [
      { name: 'Perplexity', color: toolColors['Perplexity'] },
      { name: 'Claude 3.5', color: toolColors['Claude 3.5'] }
    ],
    icon: Globe2
  },
  {
    id: 'radar-retail',
    category: 'Stratégie',
    title: 'Radar Concurrentiel 360°',
    description: 'Surveillance continue des actifs digitaux concurrents pour détecter les évolutions de pricing, de catalogue ou de positionnement marketing.',
    impacts: ['Scraping récurrent des sites cibles', 'Détection de changements visuels', 'Alerting temps réel'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    clientLogo: 'NEXUS RETAIL',
    tools: [
      { name: 'ScrapingBee', color: toolColors['ScrapingBee'] },
      { name: 'Vision AI', color: toolColors['Vision AI'] }
    ],
    icon: LineChart
  },
  {
    id: 'outreach-b2b',
    category: 'Pipeline',
    title: 'Outreach Contextuel',
    description: 'Détection automatisée de signaux d’achat (news, recrutements, posts LinkedIn) et génération d’outreach personnalisé, directement exploitable par les équipes commerciales.',
    impacts: ['Scraping LinkedIn et sites corporate', 'Analyse de signaux faibles', 'Génération de messages contextualisés'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop',
    clientLogo: 'FORCE VENTE',
    tools: [
      { name: 'Clay', color: toolColors['Clay'] },
      { name: 'Phantombuster', color: toolColors['Phantombuster'] }
    ],
    icon: Users
  },
  {
    id: 'crm-saas',
    category: 'Pipeline',
    title: 'CRM Intelligent',
    description: 'Enrichissement et mise à jour automatique du CRM à partir des signatures mails, profils LinkedIn et sources publiques, sans saisie manuelle.',
    impacts: ['Extraction automatique des informations clés', 'Déduplication et mise à jour des contacts', 'Synchronisation continue avec le CRM'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
    clientLogo: 'CLOUD SYSTEMS',
    tools: [
      { name: 'n8n', color: toolColors['n8n'] },
      { name: 'Salesforce', color: toolColors['Salesforce'] }
    ],
    icon: Database
  },
  {
    id: 'support-fintech',
    category: 'Opérations',
    title: 'Support Client Augmenté',
    description: 'Automatisation du support client via un agent IA connecté à la base documentaire interne. Les demandes simples sont traitées instantanément, les cas complexes sont qualifiés et escaladés vers les équipes humaines.',
    impacts: ['Ingestion de la knowledge base interne', 'Qualification automatique des tickets', 'Escalade intelligente vers les équipes support'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1200&auto=format&fit=crop',
    clientLogo: 'FINTECH ONE',
    tools: [
      { name: 'Voiceflow', color: toolColors['Voiceflow'] },
      { name: 'LangChain', color: toolColors['LangChain'] }
    ],
    icon: Zap
  },
  {
    id: 'reporting-indus',
    category: 'Opérations',
    title: 'Reporting Unifié',
    description: 'Centralisation des données Ads, CRM et finance dans un pipeline unique pour produire des dashboards temps réel et des synthèses décisionnelles automatisées.',
    impacts: ['Synchronisation multi-sources quotidienne', 'Normalisation et consolidation des données', 'Vues direction automatisées'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    clientLogo: 'INDUS GLOBAL',
    tools: [
      { name: 'Fivetran', color: toolColors['Fivetran'] },
      { name: 'Dash', color: toolColors['Dash'] }
    ],
    icon: Building2
  }
];

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Stratégie' | 'Pipeline' | 'Opérations'>('Stratégie');

  const filteredCases = useCases.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#00d4ff] font-semibold tracking-wider uppercase text-sm mb-4 block">
            Expertise & Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-accent" style={{fontFamily: 'Syne, sans-serif'}}>
            L'Intelligence Opérationnelle
          </h2>
        </div>

        <div className="flex justify-center mb-16">
          <div className="neumorphic-card p-2 flex gap-4 rounded-2xl">
            {['Stratégie', 'Pipeline', 'Opérations'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`
                                    px-8 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap text-sm
                                    ${activeCategory === cat
                    ? 'neumorphic-inset text-[#00d4ff]'
                    : 'text-[#8e8e93] hover:text-[#f5f5f7]'}
                                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="wait">
            {filteredCases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="neumorphic-card p-8 flex flex-col group h-full"
              >
                {/* Icon Header with gradient background */}
                <div className="relative overflow-hidden rounded-2xl h-32 mb-6 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(168, 85, 247, 0.1))'
                  }}
                >
                  <div className="neumorphic-icon-btn group-hover:scale-110 transition-transform duration-500">
                    <useCase.icon size={32} className="text-[#00d4ff]" />
                  </div>
                  <div className="absolute top-4 right-4 neumorphic-inset px-3 py-1 rounded-lg">
                    <span className="text-[10px] font-bold tracking-widest text-[#00d4ff] uppercase">
                      {useCase.clientLogo}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold tracking-widest text-[#8e8e93] uppercase">{useCase.category}</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#f5f5f7] mb-4">{useCase.title}</h3>

                  <p className="text-[#8e8e93] text-sm leading-relaxed mb-6">
                    {useCase.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {useCase.impacts.map((impact, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-[#00e68a] flex-shrink-0" />
                        <span className="text-xs text-[#8e8e93]">{impact}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                    {useCase.tools.map((tool) => (
                      <span
                        key={tool.name}
                        className="neumorphic-inset px-3 py-1 rounded-full text-[10px] font-medium text-[#8e8e93]"
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

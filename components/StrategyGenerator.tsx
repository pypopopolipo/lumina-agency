import React, { useState, useEffect } from 'react';
import { generateStrategy } from '../services/geminiService';
import { AutomationStrategy } from '../types';
import { Sparkles, Loader2, Send, CheckCircle2, Terminal, ArrowRight, Cpu } from 'lucide-react';

export const StrategyGenerator: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [strategies, setStrategies] = useState<AutomationStrategy[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  // Simulation of "Thinking" steps
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingStep(prev => (prev < 3 ? prev + 1 : prev));
      }, 800);
      return () => clearInterval(interval);
    } else {
      setLoadingStep(0);
    }
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry.trim()) return;

    setLoading(true);
    setStrategies(null);
    try {
      const result = await generateStrategy(industry);
      setStrategies(result);
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de la communication avec l'IA.");
    } finally {
      setLoading(false);
    }
  };

  const loadingMessages = [
    "Connexion au modèle Gemini...",
    `Analyse du secteur : ${industry}...`,
    "Identification des goulots d'étranglement...",
    "Génération des solutions à fort ROI..."
  ];

  return (
    <section id="demo" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="inline-block neumorphic-inset text-[#00d4ff] font-bold px-4 py-2 rounded-full text-sm mb-4">
              ✨ Démo Interactive
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-accent mb-6 leading-tight" style={{fontFamily: 'Syne, sans-serif'}}>
              Activez votre <br /> Croissance IA
            </h2>
            <p className="text-lg text-[#8e8e93] mb-8 leading-relaxed">
              Fini la théorie. Entrez simplement votre secteur d'activité et regardez notre IA générer en temps réel des cas d'usage concrets et à fort impact.
            </p>

            <form onSubmit={handleSubmit} className="relative max-w-md">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Sparkles className="text-[#00d4ff]" size={20} />
              </div>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="Votre secteur (ex: Immobilier, E-commerce...)"
                className="w-full pl-12 pr-4 py-5 neumorphic-inset text-lg rounded-2xl outline-none transition-all placeholder:text-[#636366] text-[#f5f5f7] focus:border-[#00d4ff]/30"
              />
              <button
                type="submit"
                disabled={loading || !industry.trim()}
                className="absolute right-2 top-2 bottom-2 neumorphic-btn-primary px-6 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <ArrowRight size={24} />}
              </button>
            </form>
          </div>

          <div className="relative">
            {/* Terminal / Result Area */}
            <div className="neumorphic-card p-2 min-h-[400px] flex flex-col relative overflow-hidden">
              {/* Window Controls - Dark Neumorphic Style */}
              <div className="px-6 py-4 flex items-center gap-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-auto text-xs font-mono text-[#8e8e93]">ai-architect.exe</span>
              </div>

              <div className="p-6 md:p-8 flex-1 overflow-y-auto bg-[#2c2c2e] rounded-b-3xl">
                {!loading && !strategies && (
                  <div className="h-full flex flex-col items-center justify-center text-center text-[#8e8e93] space-y-4">
                    <div className="w-20 h-20 neumorphic-inset rounded-full flex items-center justify-center animate-pulse">
                      <Cpu size={32} className="text-[#00d4ff]" />
                    </div>
                    <p className="font-medium">En attente d'input...</p>
                  </div>
                )}

                {loading && (
                  <div className="font-mono text-sm space-y-4">
                    {loadingMessages.map((msg, idx) => (
                      <div key={idx} className={`flex items-center gap-3 ${idx > loadingStep ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                        <span className="text-[#00d4ff]">➜</span>
                        <span className={`${idx === loadingStep ? 'text-[#00d4ff] font-semibold' : 'text-[#8e8e93]'}`}>
                          {msg}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {strategies && (
                  <div className="space-y-6">
                    {strategies.map((strategy, idx) => (
                      <div key={idx} className="neumorphic-card p-5 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-[#f5f5f7]">{strategy.title}</h3>
                          <span className="neumorphic-inset px-3 py-1 rounded-lg text-xs font-medium text-[#00e68a]">{strategy.impact}</span>
                        </div>
                        <p className="text-sm text-[#8e8e93] mb-3 leading-relaxed">{strategy.description}</p>
                        <div className="flex gap-2 flex-wrap">
                          {strategy.tools.map((tool, tIdx) => (
                            <span key={tIdx} className="text-xs neumorphic-inset px-3 py-1 rounded-md text-[#8e8e93]">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

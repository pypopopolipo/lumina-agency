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
            <div className="inline-block bg-indigo-100 text-indigo-700 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
              ✨ Démo Interactive
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Activez votre <br /> <span className="text-gradient-ai">Croissance IA</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Fini la théorie. Entrez simplement votre secteur d'activité et regardez notre IA générer en temps réel des cas d'usage concrets et à fort impact, taillés sur mesure pour votre business.
            </p>

            <form onSubmit={handleSubmit} className="relative max-w-md">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Sparkles className="text-indigo-400" size={20} />
              </div>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="Votre secteur (ex: Immobilier, E-commerce B2B...)"
                className="w-full pl-12 pr-4 py-5 bg-white text-lg rounded-2xl border-2 border-indigo-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all shadow-lg placeholder:text-gray-400"
              />
              <button
                type="submit"
                disabled={loading || !industry.trim()}
                className="absolute right-2 top-2 bottom-2 bg-indigo-600 text-white px-6 rounded-xl font-medium hover:bg-indigo-700 transition-all disabled:bg-gray-200 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-lg shadow-indigo-200"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <ArrowRight size={24} />}
              </button>
            </form>
          </div>

          <div className="relative">
            {/* Terminal / Result Area */}
            <div className="glass-card rounded-3xl p-1 shadow-2xl min-h-[400px] flex flex-col relative overflow-hidden bg-white/40">
              {/* Window Controls */}
              <div className="bg-white/50 px-6 py-3 border-b border-white/50 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-4 text-xs font-mono text-gray-400">ai-architect.exe</span>
              </div>

              <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                {!loading && !strategies && (
                  <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4">
                    <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center animate-pulse">
                      <Cpu size={40} className="text-indigo-300" />
                    </div>
                    <p className="font-medium">En attente d'input...</p>
                  </div>
                )}

                {loading && (
                  <div className="font-mono text-sm space-y-4">
                    {loadingMessages.map((msg, idx) => (
                      <div key={idx} className={`flex items-center gap-3 ${idx > loadingStep ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                        <span className="text-green-500">➜</span>
                        <span className={`${idx === loadingStep ? 'text-gray-800 font-bold' : 'text-gray-500'}`}>
                          {msg}
                        </span>
                        {idx === loadingStep && <span className="animate-blink block w-2 h-4 bg-gray-800 ml-2"></span>}
                      </div>
                    ))}
                  </div>
                )}

                {strategies && (
                  <div className="space-y-4 animate-float">
                    {strategies.map((strategy, idx) => (
                      <div key={idx} className="bg-white/80 p-5 rounded-xl border border-indigo-50 hover:border-indigo-200 transition-colors shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-indigo-900">{strategy.title}</h3>
                          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">{strategy.impact}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{strategy.description}</p>
                        <div className="flex gap-2 flex-wrap">
                          {strategy.tools.map((tool, tIdx) => (
                            <span key={tIdx} className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-md border border-gray-200">
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

            {/* Decorative background behind terminal */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2.5rem] -z-10 blur-xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
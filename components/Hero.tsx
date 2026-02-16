import React from 'react';
import { Zap, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-16 w-full min-h-[85vh] flex flex-col justify-center items-center">
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl pb-2 text-center leading-tight"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          <span className="block text-[#f5f5f7]">Automatisez l'opérationnel.</span>
          <span className="block text-gradient-accent mt-2">Concentrez-vous sur l'essentiel.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-[#8e8e93] max-w-xl mx-auto mt-8 mb-12 text-center leading-relaxed"
        >
          Vos équipes passent 30% de leur temps sur des tâches répétitives.
          Nos agents IA gèrent l'exécution opérationnelle pour que vos talents
          se concentrent enfin sur la stratégie.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#demo"
            className="neumorphic-btn-primary px-8 py-4 text-sm group"
          >
            <Zap className="mr-2 h-4 w-4" />
            <span>Estimer mes gains</span>
          </a>

          <button className="neumorphic-btn-secondary px-8 py-4 text-sm group">
            <PlayCircle size={18} className="mr-2 text-[#00d4ff]" />
            Voir des exemples
          </button>
        </motion.div>
      </div>
    </section>
  );
};

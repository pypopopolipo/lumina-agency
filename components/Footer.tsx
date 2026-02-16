import React from 'react';
import { Sparkles, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="neumorphic-inset p-2 rounded-lg text-[#00d4ff]">
                <Sparkles size={24} />
              </div>
              <span className="text-2xl font-bold text-gradient-accent tracking-tight" style={{fontFamily: 'Syne, sans-serif'}}>Lumina</span>
            </div>
            <p className="text-[#8e8e93] max-w-sm">
              Nous aidons les entreprises visionnaires à gagner du temps et à augmenter leurs profits grâce à l'intelligence artificielle.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-[#f5f5f7]">Services</h4>
            <ul className="space-y-4 text-[#8e8e93]">
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Consulting IA</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Développement Chatbot</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Automatisation CRM</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Formation Équipes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-[#f5f5f7]">Légal</h4>
            <ul className="space-y-4 text-[#8e8e93]">
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">CGV</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8e8e93] text-sm">© 2024 Lumina AI Agency. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="neumorphic-icon-btn"><Linkedin size={20} /></a>
            <a href="#" className="neumorphic-icon-btn"><Twitter size={20} /></a>
            <a href="#" className="neumorphic-icon-btn"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

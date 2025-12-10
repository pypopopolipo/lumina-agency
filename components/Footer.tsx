import React from 'react';
import { Sparkles, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-indigo-500 p-2 rounded-lg text-white">
                <Sparkles size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">Lumina</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Nous aidons les entreprises visionnaires à gagner du temps et à augmenter leurs profits grâce à l'intelligence artificielle et l'automatisation.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Consulting IA</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Développement Chatbot</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Automatisation CRM</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Formation Équipes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Légal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">CGV</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Lumina AI Agency. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
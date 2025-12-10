import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { StrategyGenerator } from './components/StrategyGenerator';
import { Footer } from './components/Footer';
import { Bot, Zap, Cpu, Globe, Database, Lock } from 'lucide-react';
import { TechBackground } from './components/TechBackground';


function App() {
  return (
    <div className="min-h-screen relative text-gray-800 selection:bg-indigo-500 selection:text-white overflow-hidden">

      {/* Tech Background (Global) */}
      <TechBackground />


      <Navbar />

      <main className="relative z-10">
        <Hero />

        {/* Infinite Tech Marquee */}
        <div className="py-10 bg-white/50 backdrop-blur-sm border-y border-white/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Propulsé par les meilleures technologies</p>
          </div>
          <div className="relative flex overflow-hidden">
            {/* Marquee container with animation */}
            <div className="marquee-container">
              {/* First set of logos */}
              <div className="marquee-track flex items-center">
                {/* AI Models */}
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" /></svg><span>OpenAI</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0m6.672 16.909a.799.799 0 0 1-.665.354.793.793 0 0 1-.44-.134l-5.565-3.609-5.566 3.609a.798.798 0 0 1-.44.134.8.8 0 0 1-.665-.354.803.803 0 0 1 .12-.994l5.562-3.609L5.452 8.7a.803.803 0 0 1-.12-.994.8.8 0 0 1 1.105-.22l5.566 3.609 5.565-3.609a.8.8 0 0 1 1.105.22.803.803 0 0 1-.12.994l-5.562 3.606 5.562 3.609a.803.803 0 0 1 .119.994" /></svg><span>Gemini</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M17.557 1.2c-.933 0-1.688.77-1.688 1.72v18.16c0 .95.755 1.72 1.688 1.72.932 0 1.687-.77 1.687-1.72V2.92c0-.95-.755-1.72-1.687-1.72M6.42 8.77c-.932 0-1.688.77-1.688 1.72v10.59c0 .95.756 1.72 1.688 1.72.933 0 1.688-.77 1.688-1.72V10.49c0-.95-.755-1.72-1.688-1.72m5.58-4.29c-.932 0-1.688.77-1.688 1.72v14.88c0 .95.756 1.72 1.688 1.72.933 0 1.688-.77 1.688-1.72V6.2c0-.95-.755-1.72-1.688-1.72" /></svg><span>Anthropic</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M6.236 7.715h3.402v5.639h.077L14.3 7.715h3.96l-5.05 5.716L18.484 21h-4.017l-4.658-6.12-.17.188V21H6.236V7.715M4.3 3h15.4A1.3 1.3 0 0 1 21 4.3v15.4a1.3 1.3 0 0 1-1.3 1.3H4.3A1.3 1.3 0 0 1 3 19.7V4.3A1.3 1.3 0 0 1 4.3 3" /></svg><span>Mistral AI</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" /><path fill="currentColor" d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0m6 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-3 3a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2" /></svg><span>Perplexity</span></div>
                {/* Automation & Data */}
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 0L1.5 6v12L12 24l10.5-6V6zm0 2.34l8.14 4.66L12 11.66 3.86 7zM3.5 8.84l7.5 4.33v8.5l-7.5-4.34zm17 8.5l-7.5 4.33v-8.5l7.5-4.33z" /></svg><span>n8n</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M19.5 12c0-4.14-3.36-7.5-7.5-7.5S4.5 7.86 4.5 12s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m-1 5h2v6h-2zm0 8h2v2h-2z" /></svg><span>Make</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39" /></svg><span>Apify</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 4a1 1 0 0 0-1 1v4H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2h-4V7a1 1 0 0 0-1-1" /></svg><span>Captain Data</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M21 5.5c0-.83-.67-1.5-1.5-1.5h-15C3.67 4 3 4.67 3 5.5v13c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-13M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6" /></svg><span>Supabase</span></div>
                {/* Growth & Sales */}
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z" /></svg><span>Lovable</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9" /></svg><span>Clay</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /></svg><span>LaGrowthMachine</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5-8-5V6l8 5 8-5z" /></svg><span>Lemlist</span></div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="marquee-track flex items-center" aria-hidden="true">
                {/* AI Models */}
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" /></svg><span>OpenAI</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0m6.672 16.909a.799.799 0 0 1-.665.354.793.793 0 0 1-.44-.134l-5.565-3.609-5.566 3.609a.798.798 0 0 1-.44.134.8.8 0 0 1-.665-.354.803.803 0 0 1 .12-.994l5.562-3.609L5.452 8.7a.803.803 0 0 1-.12-.994.8.8 0 0 1 1.105-.22l5.566 3.609 5.565-3.609a.8.8 0 0 1 1.105.22.803.803 0 0 1-.12.994l-5.562 3.606 5.562 3.609a.803.803 0 0 1 .119.994" /></svg><span>Gemini</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M17.557 1.2c-.933 0-1.688.77-1.688 1.72v18.16c0 .95.755 1.72 1.688 1.72.932 0 1.687-.77 1.687-1.72V2.92c0-.95-.755-1.72-1.687-1.72M6.42 8.77c-.932 0-1.688.77-1.688 1.72v10.59c0 .95.756 1.72 1.688 1.72.933 0 1.688-.77 1.688-1.72V10.49c0-.95-.755-1.72-1.688-1.72m5.58-4.29c-.932 0-1.688.77-1.688 1.72v14.88c0 .95.756 1.72 1.688 1.72.933 0 1.688-.77 1.688-1.72V6.2c0-.95-.755-1.72-1.688-1.72" /></svg><span>Anthropic</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M6.236 7.715h3.402v5.639h.077L14.3 7.715h3.96l-5.05 5.716L18.484 21h-4.017l-4.658-6.12-.17.188V21H6.236V7.715M4.3 3h15.4A1.3 1.3 0 0 1 21 4.3v15.4a1.3 1.3 0 0 1-1.3 1.3H4.3A1.3 1.3 0 0 1 3 19.7V4.3A1.3 1.3 0 0 1 4.3 3" /></svg><span>Mistral AI</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" /><path fill="currentColor" d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0m6 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-3 3a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2" /></svg><span>Perplexity</span></div>
                {/* Automation & Data */}
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 0L1.5 6v12L12 24l10.5-6V6zm0 2.34l8.14 4.66L12 11.66 3.86 7zM3.5 8.84l7.5 4.33v8.5l-7.5-4.34zm17 8.5l-7.5 4.33v-8.5l7.5-4.33z" /></svg><span>n8n</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M19.5 12c0-4.14-3.36-7.5-7.5-7.5S4.5 7.86 4.5 12s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m-1 5h2v6h-2zm0 8h2v2h-2z" /></svg><span>Make</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39" /></svg><span>Apify</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 4a1 1 0 0 0-1 1v4H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2h-4V7a1 1 0 0 0-1-1" /></svg><span>Captain Data</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M21 5.5c0-.83-.67-1.5-1.5-1.5h-15C3.67 4 3 4.67 3 5.5v13c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-13M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6" /></svg><span>Supabase</span></div>
                {/* Growth & Sales */}
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z" /></svg><span>Lovable</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9" /></svg><span>Clay</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /></svg><span>LaGrowthMachine</span></div>
                <div className="tech-logo"><svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5-8-5V6l8 5 8-5z" /></svg><span>Lemlist</span></div>
              </div>
            </div>
          </div>
        </div>

        <Services />
        <Methodology />
        <StrategyGenerator />

        {/* Modern CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-900 skew-y-3 transform origin-bottom-right scale-110"></div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              L'IA n'attend pas. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Pourquoi vous ?</span>
            </h2>
            <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
              Réservez votre audit de faisabilité gratuit. Nous identifierons ensemble où vous perdez de l'argent et comment l'IA peut le récupérer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-50 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Réserver mon audit offert
              </button>
              <button className="px-8 py-4 rounded-full text-lg font-bold text-white border border-gray-700 hover:bg-gray-800 transition-all">
                Voir nos études de cas
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
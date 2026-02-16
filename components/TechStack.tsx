import React from 'react';
import { Cpu, Zap, Database, Globe, Workflow, MessageSquare } from 'lucide-react';

const techs = [
    { name: 'OpenAI', icon: MessageSquare },
    { name: 'Anthropic', icon: Cpu },
    { name: 'Zapier', icon: Zap },
    { name: 'Make', icon: Workflow },
    { name: 'n8n', icon: Globe },
    { name: 'Pinecone', icon: Database },
];

export const TechStack: React.FC = () => {
    return (
        <section className="py-10 relative z-10 pointer-events-none">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-[#8e8e93] text-sm font-semibold uppercase tracking-widest mb-8">
                    Propulsé par les meilleures technologies
                </p>

                <div className="mx-auto max-w-4xl">
                    {/* Dark Neumorphic Inset Track */}
                    <div className="neumorphic-inset rounded-2xl p-4 overflow-hidden relative">
                        <div className="flex gap-12 items-center justify-center animate-scroll whitespace-nowrap">
                            {[...techs, ...techs].map((tech, index) => (
                                <div key={index} className="flex items-center gap-3 text-[#8e8e93] font-semibold">
                                    <tech.icon size={20} className="text-[#00d4ff]" />
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Fade Edges - Dark */}
                        <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-[#1c1c1e] to-transparent"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#1c1c1e] to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};


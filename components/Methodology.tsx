import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calculator, Boxes, Rocket } from 'lucide-react';

interface MethodologyStep {
    id: string;
    letter: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
}

const methodologySteps: MethodologyStep[] = [
    {
        id: '1',
        letter: 'S',
        title: 'Identification Ciblée',
        description: 'Nous échangeons avec vos équipes opérationnelles pour isoler les tâches manuelles chronophages et détecter les cas d\'usage à fort potentiel immédiat.',
        icon: MessageCircle
    },
    {
        id: '2',
        letter: 'C',
        title: 'Qualification du ROI',
        description: 'Nous validons ensemble la pertinence économique. L\'objectif est de confirmer la faisabilité et de projeter un retour sur investissement réaliste avant tout développement.',
        icon: Calculator
    },
    {
        id: '3',
        letter: 'A',
        title: 'Architecture & POC',
        description: 'Conception d\'une preuve de concept (POC) fonctionnelle. Vous testez la solution en conditions réelles pour valider concrètement la performance sur vos propres données.',
        icon: Boxes
    },
    {
        id: '4',
        letter: 'N',
        title: 'Déploiement & Itération',
        description: 'Intégration finale dans votre environnement. Nous ajustons les paramètres selon les retours utilisateurs pour garantir une adoption fluide et une performance durable.',
        icon: Rocket
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15
        }
    }
};

const connectorVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
};

export const Methodology: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#00d4ff] font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Framework SCAN
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient-accent mb-6" style={{fontFamily: 'Syne, sans-serif'}}>
                        Notre Méthodologie
                    </h2>
                    <p className="text-[#8e8e93] text-lg max-w-2xl mx-auto">
                        Une approche pragmatique en 4 étapes pour transformer vos opérations.
                    </p>
                </motion.div>

                {/* Methodology Steps */}
                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
                        {methodologySteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                variants={cardVariants}
                                className="neumorphic-card p-8 flex flex-col h-full relative transition-transform duration-300 hover:-translate-y-2"
                            >
                                {/* Step Number Badge (Inset) */}
                                <div className="absolute top-6 right-6 w-10 h-10 rounded-full neumorphic-inset flex items-center justify-center text-xs font-bold text-[#00d4ff]">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Icon Button (Outward) */}
                                <div className="neumorphic-icon-btn mb-6 pointer-events-none">
                                    <step.icon size={24} className="text-[#00d4ff]" />
                                </div>

                                {/* Title with Letter */}
                                <h3 className="text-xl font-semibold text-[#f5f5f7] mb-4">
                                    <span className="text-[#00d4ff] opacity-90">{step.letter}</span> - {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#8e8e93] text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};


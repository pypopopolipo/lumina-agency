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
        <section className="py-24 relative overflow-hidden bg-[#111827]">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#111827] via-[#111827] to-[#111827]" />

            {/* Animated background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-[#5EA5F4]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#5EA5F4] font-bold tracking-wider uppercase text-sm mb-4 block">
                        Framework SCAN
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Notre <span className="text-gradient-ai">Méthodologie</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Une approche pragmatique en 4 étapes pour transformer vos opérations avec l'IA.
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
                    {/* Desktop: Horizontal layout with connectors */}
                    <div className="hidden lg:grid lg:grid-cols-4 gap-0 relative">
                        {methodologySteps.map((step, index) => (
                            <div key={step.id} className="relative flex items-stretch">
                                {/* Step Card */}
                                <motion.div
                                    variants={cardVariants}
                                    className="methodology-card group relative p-6 rounded-2xl bg-gradient-to-b from-[#12121a] to-[#0d0d14] border border-gray-800/50 flex-1 mx-3 overflow-hidden transition-all duration-500 hover:border-[#5EA5F4]/50"
                                    whileHover={{
                                        y: -8,
                                        transition: { type: 'spring', stiffness: 300 }
                                    }}
                                >
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#5EA5F4]/0 via-[#5EA5F4]/0 to-[#5EA5F4]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
                                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#5EA5F4]/0 to-[#5EA5F4]/0 opacity-0 group-hover:from-[#5EA5F4]/20 group-hover:to-[#5EA5F4]/10 transition-all duration-500" />

                                    {/* Step Number Badge */}
                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center text-xs font-bold text-gray-500 group-hover:text-[#5EA5F4] group-hover:border-[#5EA5F4]/50 transition-all duration-300">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    {/* Icon */}
                                    <div className="relative mb-5">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-b from-[#5EA5F4]/20 to-[#5EA5F4]/10 border border-[#5EA5F4]/30 flex items-center justify-center group-hover:from-[#5EA5F4]/30 group-hover:to-[#5EA5F4]/20 group-hover:border-[#5EA5F4]/50 group-hover:shadow-[0_0_30px_rgba(94,165,244,0.3)] transition-all duration-500">
                                            <step.icon size={26} className="text-[#5EA5F4] group-hover:text-[#8ac2ff] transition-colors duration-300" />
                                        </div>
                                    </div>

                                    {/* Title with Letter */}
                                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#5EA5F4] transition-colors duration-300">
                                        <span className="text-[#5EA5F4] group-hover:text-[#8ac2ff]">{step.letter}</span> - {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                        {step.description}
                                    </p>

                                    {/* Bottom glow line */}
                                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5EA5F4]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </motion.div>

                                {/* Connector (except for last item) */}
                                {index < methodologySteps.length - 1 && (
                                    <motion.div
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 flex items-center"
                                        variants={connectorVariants}
                                    >
                                        <div className="relative">
                                            {/* Connector line */}
                                            <div className="w-6 h-px bg-gradient-to-r from-[#5EA5F4]/60 via-[#5EA5F4]/60 to-[#5EA5F4]/60 connector-pulse" />
                                            {/* Connector dot */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#5EA5F4] shadow-[0_0_10px_rgba(94,165,244,0.6)]" />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile/Tablet: Vertical layout with connectors */}
                    <div className="lg:hidden flex flex-col gap-6">
                        {methodologySteps.map((step, index) => (
                            <div key={step.id} className="relative">
                                <motion.div
                                    variants={cardVariants}
                                    className="methodology-card group relative p-6 rounded-2xl bg-gradient-to-b from-[#12121a] to-[#0d0d14] border border-gray-800/50 overflow-hidden transition-all duration-500"
                                >
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#5EA5F4]/0 to-[#5EA5F4]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />

                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className="shrink-0">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-b from-[#5EA5F4]/20 to-[#5EA5F4]/10 border border-[#5EA5F4]/30 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(94,165,244,0.3)] transition-all duration-500">
                                                <step.icon size={26} className="text-[#5EA5F4]" />
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            {/* Step Badge */}
                                            <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-800/80 border border-gray-700/50 text-gray-400 mb-2">
                                                Étape {index + 1}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg font-bold text-white mb-2">
                                                <span className="text-[#5EA5F4]">{step.letter}</span> - {step.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Vertical Connector */}
                                {index < methodologySteps.length - 1 && (
                                    <motion.div
                                        className="flex justify-center py-2"
                                        initial={{ opacity: 0, scaleY: 0 }}
                                        whileInView={{ opacity: 1, scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                    >
                                        <div className="relative h-8">
                                            {/* Vertical connector line */}
                                            <div className="w-px h-full bg-gradient-to-b from-[#5EA5F4]/60 via-[#5EA5F4]/60 to-[#5EA5F4]/60" />
                                            {/* Connector dot */}
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#5EA5F4] shadow-[0_0_10px_rgba(94,165,244,0.6)]" />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

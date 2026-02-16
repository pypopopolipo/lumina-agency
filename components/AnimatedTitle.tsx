import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedTitleProps {
    text: string;
    className?: string; // Additional classes for the container
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className = '' }) => {
    // Split the sentence into words
    const words = text.split(' ');

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: {
            y: '100%',
        },
        visible: {
            y: '0%',
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1], // Very smooth easeOut
            },
        },
    };

    return (
        <motion.div
            className={`inline-block whitespace-wrap text-gradient-accent ${className}`}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{fontFamily: 'Syne, sans-serif'}}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em] align-top">
                    <motion.span
                        className="inline-block font-bold"
                        variants={wordVariants}
                    >
                        {word.split('').map((char, charIndex) => (
                            <span key={charIndex} className="inline-block">
                                {char}
                            </span>
                        ))}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
};

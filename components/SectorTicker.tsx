import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectorTickerProps {
    words: string[];
}

export const SectorTicker: React.FC<SectorTickerProps> = ({ words }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Cycle every 3 seconds
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <span className="inline-flex relative h-[1.2em] overflow-hidden align-text-bottom">
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="text-gradient-accent absolute left-0 whitespace-nowrap font-bold"
                    style={{ position: 'relative' }} // Ensure it takes up space in flow
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};


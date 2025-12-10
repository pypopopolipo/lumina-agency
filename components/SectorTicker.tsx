import React, { useState, useEffect, useCallback } from 'react';

interface SectorTickerProps {
    words: string[];
}

export const SectorTicker: React.FC<SectorTickerProps> = ({ words }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const typeSpeed = 80;
    const deleteSpeed = 50;
    const pauseDuration = 2000;

    const handleTyping = useCallback(() => {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            if (displayText.length < currentWord.length) {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
            } else {
                setTimeout(() => setIsDeleting(true), pauseDuration);
                return;
            }
        } else {
            if (displayText.length > 0) {
                setDisplayText(currentWord.substring(0, displayText.length - 1));
            } else {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }
    }, [displayText, isDeleting, wordIndex, words]);

    useEffect(() => {
        const speed = isDeleting ? deleteSpeed : typeSpeed;
        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [handleTyping, isDeleting]);

    return (
        <span className="inline-flex items-baseline">
            <span className="text-gradient-ai">
                {displayText}
            </span>
            <span className="ml-1 w-[4px] h-[0.9em] bg-[#7182ff] animate-pulse rounded-sm inline-block align-middle"></span>
        </span>
    );
};

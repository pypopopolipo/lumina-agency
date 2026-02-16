import React, { useState, useEffect } from 'react';

interface TypingTitleProps {
    text: string;
    className?: string;
    startDelay?: number;
    typingSpeed?: number;
}

export const TypingTitle: React.FC<TypingTitleProps> = ({
    text,
    className = '',
    startDelay = 0,
    typingSpeed = 50
}) => {
    const [displayText, setDisplayText] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStarted(true);
        }, startDelay);
        return () => clearTimeout(timer);
    }, [startDelay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [started, text, typingSpeed]);

    return (
        <div className={`neumorph-typing text-gradient-accent ${className}`} aria-label={text} style={{fontFamily: 'Syne, sans-serif'}}>
            <span className="text font-bold" data-text={displayText}>
                {displayText}
            </span>
            <span className="cursor text-[#00d4ff]" data-text="|">|</span>
        </div>
    );
};

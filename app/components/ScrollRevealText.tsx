'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export default function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'center center'],
  });

  const words = text.split(' ');
  const totalCharCount = text.replace(/\s/g, '').length;
  let charIndex = 0;

  return (
    <h2 ref={containerRef} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split('').map((char, index) => {
            const currentCharIndex = charIndex++;
            const progress = currentCharIndex / totalCharCount;

            const charOpacity = useTransform(
              scrollYProgress,
              [0, progress * 0.8, progress * 0.8 + 0.2],
              [0.1, 0.1, 1],
            );

            return (
              <motion.span key={`${wordIndex}-${index}`} style={{ opacity: charOpacity }}>
                {char}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </h2>
  );
}

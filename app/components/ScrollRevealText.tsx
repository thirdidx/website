'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * ScrollRevealText component animates text reveal on scroll with color transitions
 * 
 * Features:
 * - Word-by-word color animation from gray to black
 * - Scroll-triggered animation using Framer Motion
 * - Supports HTML content with <em> tags for emphasis
 * - Parses HTML to maintain formatting while animating
 * - Configurable CSS classes for styling
 * - Smooth color transitions based on scroll progress
 * 
 * @param text - Text content to animate (supports <em> HTML tags)
 * @param className - CSS classes for styling
 */

interface ScrollRevealTextProps {
  /** Text content to animate - supports <em> HTML tags for emphasis */
  text: string;
  /** Optional CSS classes for styling */
  className?: string;
}

/**
 * Main ScrollRevealText component that renders animated text with scroll-based color transitions
 */
export default function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'center center'],
  });

  /**
   * Parse HTML string to extract text content and preserve <em> tag information
   */
  const parseHtmlString = (html: string) => {
    const parts: { text: string; isEm: boolean }[] = [];
    const regex = /<em>(.*?)<\/em>|([^<]+)/g;
    let match;

    while ((match = regex.exec(html)) !== null) {
      if (match[1]) {
        // Text inside <em> tags
        parts.push({ text: match[1], isEm: true });
      } else if (match[2]) {
        // Regular text
        parts.push({ text: match[2], isEm: false });
      }
    }

    return parts;
  };

  const parts = parseHtmlString(text);

  // Build word array with metadata
  const allWords: { word: string; isEm: boolean; wordIndex: number }[] = [];
  let globalWordIndex = 0;

  parts.forEach((part) => {
    const words = part.text.split(' ').filter((w) => w.length > 0);
    words.forEach((word) => {
      allWords.push({
        word,
        isEm: part.isEm,
        wordIndex: globalWordIndex++,
      });
    });
  });

  const totalWords = allWords.length;

  return (
    <h2 ref={containerRef} className={className}>
      {allWords.map((wordData, index) => {
        // Calculate progress for each word based on its position
        const wordProgress = index / totalWords;

        // Each word animates over a portion of the scroll
        const animationSpread = 0.8; // Use 80% of scroll progress for animation
        const wordAnimationDuration = animationSpread / totalWords;

        // Color transform from light grey to black
        const wordColor = useTransform(
          scrollYProgress,
          [wordProgress * animationSpread, wordProgress * animationSpread + wordAnimationDuration],
          ['rgba(0,0,0,.1)', 'rgb(0, 0, 0)'], // from gray-400 to black
        );

        return (
          <motion.span
            key={index}
            className={`inline-block ${wordData.isEm ? 'italic' : ''}`}
            style={{ color: wordColor }}
          >
            {wordData.word}
            {index < totalWords - 1 && <span className="inline-block">&nbsp;</span>}
          </motion.span>
        );
      })}
    </h2>
  );
}

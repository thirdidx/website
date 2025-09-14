'use client';

import { motion } from 'framer-motion';
import ProcessCard from './ProcessCard';

/**
 * Process component displays the development process in three animated steps
 * 
 * Features:
 * - Three-step development process with staggered animations
 * - Cards appear on scroll with custom easing
 * - Responsive grid layout with vertical offset on larger screens
 * - Uses Framer Motion for smooth scroll-triggered animations
 */

/**
 * Main Process component that renders the development workflow section
 */
export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Custom easing for smooth drop
      },
    },
  };

  return (
    <section id="process" className="py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-mono mb-4 text-2xl md:text-4xl">our process</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            technical excellence meets collaborative execution. transparent, iterative, results-focused.
          </p>
        </div>

        {/* Process cards grid with scroll animations */}
        <motion.div
          className="grid gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants}>
            <ProcessCard
              number="01"
              title="discovery & planning"
              description="we dive deep into your technical requirements, user needs, and business objectives. clear project scope and technical architecture from day one."
            />
          </motion.div>

          <motion.div variants={cardVariants} className="md:mt-12">
            <ProcessCard
              number="02"
              title="design & development"
              description="iterative build cycles with regular check-ins. we design and code simultaneously, ensuring the final product matches your vision exactly."
            />
          </motion.div>

          <motion.div variants={cardVariants} className="md:mt-24">
            <ProcessCard
              number="03"
              title="launch & optimize"
              description="production deployment with performance monitoring. we ensure your application scales smoothly and provides ongoing technical support."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

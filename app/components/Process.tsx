'use client';

import { motion } from 'framer-motion';
import ProcessCard from './ProcessCard';

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
          <h2 className="font-mono mb-4 text-2xl md:text-4xl">Our Process</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Technical excellence meets collaborative execution. Transparent, iterative, results-focused.
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
              title="Discovery & Planning"
              description="We dive deep into your technical requirements, user needs, and business objectives. Clear project scope and technical architecture from day one."
            />
          </motion.div>

          <motion.div variants={cardVariants} className="md:mt-12">
            <ProcessCard
              number="02"
              title="Design & Development"
              description="Iterative build cycles with regular check-ins. We design and code simultaneously, ensuring the final product matches your vision exactly."
            />
          </motion.div>

          <motion.div variants={cardVariants} className="md:mt-24">
            <ProcessCard
              number="03"
              title="Launch & Optimize"
              description="Production deployment with performance monitoring. We ensure your application scales smoothly and provides ongoing technical support."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

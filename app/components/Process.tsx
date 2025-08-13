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
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth drop
      },
    },
  };

  return (
    <section id="process" className="py-32 md:py-40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold">How We Work</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We build in the open with weekly demos and fast feedback loops.
          </p>
        </div>

        {/* Process cards grid with scroll animations */}
        <motion.div
          className="grid gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants}>
            <ProcessCard
              number="01"
              title="Discovery & Planning"
              description="We start with your business goals and user needs. Bring your design direction and we'll execute it, or we'll handle design and development together."
            />
          </motion.div>
          
          <motion.div variants={cardVariants} className="md:mt-12">
            <ProcessCard
              number="02"
              title="Rapid Development"
              description="Weekly demos and iterative builds covering code, design and motion. Fast feedback loops mean fewer wrong turns."
            />
          </motion.div>
          
          <motion.div variants={cardVariants} className="md:mt-24">
            <ProcessCard
              number="03"
              title="Launch & Optimize"
              description="Deployment, monitoring, and performance optimization. Your complete product launches right, not just fast."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
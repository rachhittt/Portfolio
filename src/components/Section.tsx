'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {title && (
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-gray-900 dark:text-white"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </motion.section>
  );
}

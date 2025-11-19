'use client';

import { motion } from 'framer-motion';
import Section from './Section';

interface Achievement {
  title: string;
  description: string;
  year: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      title: '1st Place - Web Development Competition',
      description:
        'Won first prize in school web development competition for E-Waste Management Website project.',
      year: 'School',
    },
  ];

  return (
    <Section id="achievements" title="Achievements">
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 10 }}
            className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400 shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">🏆</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{achievement.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.year}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

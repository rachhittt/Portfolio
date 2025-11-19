'use client';

import { motion } from 'framer-motion';
import Section from './Section';

export default function About() {
  const interests = ['Playing Guitar', 'Gym & Fitness', 'Problem Solving', 'Learning New Tech'];
  const languages = ['English', 'Hindi', 'Spanish'];

  return (
    <Section id="about" title="About Me">
      <div className="grid grid:cols-1 md:grid-cols-2 gap-8">
        {/* Bio Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate ECE student at BITS Pilani with a strong interest in web development.
            Through hands-on projects and real-world experience, I've developed a solid foundation in
            full-stack web development.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I won 1st place in a school web development competition, which sparked my journey into
            building functional, responsive digital experiences. Currently, I'm focused on deepening
            my backend knowledge and exploring modern web technologies.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            When I'm not coding, you'll find me playing guitar, hitting the gym, or exploring new
            technologies to stay ahead in the ever-evolving tech landscape.
          </p>
        </motion.div>

        {/* Interests & Languages */}
        <div className="space-y-6">
          {/* Hobbies/Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interests</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <motion.span
                  key={interest}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <motion.span
                  key={lang}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Birthday */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-800"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Birthday</h3>
            <p className="text-orange-700 dark:text-orange-300 font-semibold">20th October 2004</p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Section from './Section';

interface SkillCategory {
  name: string;
  skills: string[];
  color: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'PHP'],
      color: 'from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20',
    },
    {
      name: 'Web Development',
      skills: ['HTML', 'CSS', 'MySQL', 'Responsive UI/UX', 'Authentication Systems', 'State Management'],
      color: 'from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20',
    },
    {
      name: 'Tools & Other',
      skills: ['Git / GitHub', 'Debugging & Testing', 'UI Responsiveness', 'API Development'],
      color: 'from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20',
    },
  ];

  const textColors: { [key: string]: string } = {
    Languages: 'text-blue-700 dark:text-blue-300',
    'Web Development': 'text-purple-700 dark:text-purple-300',
    'Tools & Other': 'text-green-700 dark:text-green-300',
  };

  const badgeColors: { [key: string]: string } = {
    Languages: 'bg-blue-200 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200',
    'Web Development': 'bg-purple-200 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200',
    'Tools & Other': 'bg-green-200 dark:bg-green-900/50 text-green-800 dark:text-green-200',
  };

  return (
    <Section id="skills" title="Skills & Expertise">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -5 }}
            className={`p-6 rounded-lg bg-gradient-to-br ${category.color} border border-gray-200 dark:border-gray-700 shadow-lg`}
          >
            <h3 className={`text-xl font-bold mb-4 ${textColors[category.name]}`}>{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColors[category.name]} cursor-default`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

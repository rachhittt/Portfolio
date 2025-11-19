'use client';

import { motion } from 'framer-motion';
import Section from './Section';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
  type: 'work' | 'responsibility';
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: 'Web Developer',
      company: 'Docquity',
      duration: 'May 2025 – Jul 2025',
      description: [
        'Developed redirection logic for URL-shortener service',
        'Assisted in debugging, unit testing, and feature development',
        'Gained hands-on exposure to backend architecture in a production environment',
      ],
      type: 'work',
    },
  ];

  const responsibilities = [
    {
      title: 'AUGSD Coordinator',
      company: 'BITS Pilani',
      duration: 'June 2025 – Present',
      description: [
        'Collaborate with the academic administration and student body to streamline the functioning of the Academic Undergraduate Studies Division.',
        'Assist with course registration workflows and administrative processes.',
        'Collect and communicate student concerns, queries, and feedback to the academic administration.',
      ],
      type: 'responsibility' as const,
    },
    {
      title: 'SARC Events Head',
      company: 'BITS Pilani',
      duration: 'July 2025 – Present',
      description: [
        'Lead planning and execution of alumni engagement events.',
        'Manage logistics, communication, and coordination for alumni meets, speaker sessions, and reunion-based activities.',
        'Strengthen and maintain an active alumni-student network through recurring engagement initiatives.',
      ],
      type: 'responsibility' as const,
    },
    {
      title: 'Joint Secretary — Sanskrit and Foreign Languages (SAFL) Club',
      company: 'BITS Pilani',
      duration: 'July 2024 – June 2025',
      description: [
        'Organized and managed diverse cultural and entertainment-focused events.',
        'Examples include anime screenings, mythology and K-pop quizzes, and a student club trip to Comic-Con.',
        'Contributed to engagement, participation, and club-level execution of creative student activities.',
      ],
      type: 'responsibility' as const,
    },
  ];

  return (
    <Section id="experience" title="Experience & Responsibility">
      {/* Work Experience */}
      <div className="mb-12">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Professional Experience
        </motion.h3>

        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.title}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/50 border-l-4 border-blue-500"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 md:text-right mt-2 md:mt-0">
                {exp.duration}
              </span>
            </div>
            <ul className="space-y-2">
              {exp.description.map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Positions of Responsibility */}
      <div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Positions of Responsibility
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {responsibilities.map((resp, index) => (
            <motion.div
              key={`${resp.company}-${resp.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800 shadow-md"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{resp.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{resp.duration}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{resp.description[0]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

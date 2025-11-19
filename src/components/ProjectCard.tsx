'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  githubUrl = '#',
  demoUrl = '#',
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-gray-900/50 hover:shadow-2xl dark:hover:shadow-indigo-900/30 transition-all duration-300 border border-gray-200 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-500/30"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 dark:group-hover:from-blue-400/5 dark:group-hover:to-indigo-400/5 transition-all duration-300 z-0"></div>

      {/* Project Image */}
      <div className="relative h-56 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative p-7 z-10">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <motion.span
              key={t}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold border border-blue-200 dark:border-blue-800/50 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700/50">
          {githubUrl !== '#' ? (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </motion.a>
          ) : (
            <button
              disabled
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Coming Soon
            </button>
          )}

          {demoUrl !== '#' ? (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </motion.a>
          ) : (
            <button
              disabled
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

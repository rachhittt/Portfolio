'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-10 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white dark:from-gray-900/0 dark:via-gray-900/50 dark:to-gray-900"></div>
      </div>

      <div className="text-center max-w-3xl relative z-10">
        {/* Greeting Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8"
        >
          <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></span>
          <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">Welcome to my portfolio</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent mb-6 leading-tight"
        >
          Rachit Pandey
        </motion.h1>

        {/* Title with Gradient */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-200 mb-2">
            Web Developer & 
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-bold">
            ECE Student
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          Electronics and Communication student at BITS Pilani, passionate about building beautiful and functional digital experiences. Specialized in full-stack development with expertise in modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            View My Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-300 font-semibold rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Social Links Preview */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12"
        >
          <motion.a
            href="https://www.linkedin.com/in/rachhittt"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://github.com/rachhittt"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-8"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
}

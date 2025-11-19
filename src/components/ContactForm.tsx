'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Initialize EmailJS
      emailjs.init('2Ef4oCbb9wOs-Xq1E');

      const result = await emailjs.send(
        'service_il0thgq',
        'template_332ti5a',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(
        error.text || 'Failed to send message. Please try again or contact directly via email.'
      );
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
      {/* Name */}
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Your Name
        </label>
        <motion.input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02 }}
          className="w-full px-5 py-3 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:shadow-lg focus:shadow-blue-500/10 dark:focus:shadow-blue-400/10 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
          placeholder="John Doe"
        />
      </motion.div>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Your Email
        </label>
        <motion.input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02 }}
          className="w-full px-5 py-3 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:shadow-lg focus:shadow-blue-500/10 dark:focus:shadow-blue-400/10 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
          placeholder="you@example.com"
        />
      </motion.div>

      {/* Subject */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Subject
        </label>
        <motion.input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02 }}
          className="w-full px-5 py-3 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:shadow-lg focus:shadow-blue-500/10 dark:focus:shadow-blue-400/10 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
          placeholder="Project inquiry"
        />
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Message
        </label>
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          whileFocus={{ scale: 1.02 }}
          className="w-full px-5 py-3 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:shadow-lg focus:shadow-blue-500/10 dark:focus:shadow-blue-400/10 transition-all duration-300 resize-none placeholder-gray-400 dark:placeholder-gray-500"
          placeholder="Your message here..."
        />
      </motion.div>

      {/* Status Messages */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-green-700 dark:text-green-300 rounded-xl border-2 border-green-200 dark:border-green-800 flex items-center gap-3"
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Message sent successfully! I'll get back to you soon.</span>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 text-red-700 dark:text-red-300 rounded-xl border-2 border-red-200 dark:border-red-800 flex items-center gap-3"
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <span>{errorMessage}</span>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg transition-all duration-300"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </motion.button>
    </form>
  );
}

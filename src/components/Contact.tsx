'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import ContactForm from './ContactForm';

interface ContactInfo {
  label: string;
  value: string;
  icon: React.ReactNode;
  link?: string;
}

export default function Contact() {
  const contactDetails: ContactInfo[] = [
    {
      label: 'Email',
      value: 'f20231123@hyderabad.bits-pilani.ac.in',
      icon: '✉️',
      link: 'mailto:f20231123@hyderabad.bits-pilani.ac.in',
    },
    {
      label: 'Phone',
      value: '+91 6306319856',
      icon: '📱',
      link: 'tel:+916306319856',
    },
    {
      label: 'Location',
      value: 'Hyderabad, India',
      icon: '📍',
    },
    {
      label: 'LinkedIn',
      value: '@rachhittt',
      icon: '💼',
      link: 'https://www.linkedin.com/in/rachhittt/',
    },
    {
      label: 'GitHub',
      value: '@rachhittt',
      icon: '🐙',
      link: 'https://github.com/rachhittt',
    },
  ];

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="lg:col-span-1 space-y-4">
          {contactDetails.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link || '#'}
              target={contact.link?.startsWith('http') ? '_blank' : undefined}
              rel={contact.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className={`block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/70 transition-shadow ${
                contact.link ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{contact.icon}</span>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {contact.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white break-all">
                    {contact.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}

          {/* Resume Download */}
          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block p-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white rounded-lg shadow-md dark:shadow-gray-900/50 hover:shadow-lg dark:hover:shadow-gray-900/70 transition-shadow text-center font-semibold"
          >
            📄 Download Resume
          </motion.a>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  );
}

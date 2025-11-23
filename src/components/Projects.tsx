'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Music Visualizer',
      description:
        'Interactive music visualizer with dynamic audio-reactive animations. Displays real-time frequency spectrum visualization synchronized with audio playback. Smooth, responsive design with immersive visual effects.',
      tech: ['JavaScript', 'Canvas API', 'Web Audio API', 'HTML', 'CSS'],
      image: '/music-visualizer.png',
      githubUrl: 'https://github.com/rachhittt/music-visualizer',
      demoUrl: 'https://music-visualizzer.vercel.app/',
    },
    {
      id: '2',
      title: 'Anime Merchandise E-Commerce',
      description:
        'Full-featured PHP-based e-commerce platform with authentication, cart management, product filters, and dynamic content. Fully responsive with video support.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      image: 'https://images4.alphacoders.com/133/thumb-1920-1332281.jpeg',
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: '3',
      title: 'Docquity - Universal URL Shortener',
      description:
        'A scalable, privacy-compliant URL shortener and universal linking platform. Features custom/random URL generation, deep linking for iOS/Android, server-side analytics with GDPR compliance, and sub-100ms redirection latency using Redis caching.',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS'],
      image: 'https://acv.vc/wp-content/uploads/2023/03/logos-47.png',
      githubUrl: 'https://github.com/rachhittt/Docquity',
      demoUrl: 'https://github.com/rachhittt/Docquity',
    },
  ];

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}

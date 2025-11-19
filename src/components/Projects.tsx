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
      title: 'Anime Merchandise E-Commerce',
      description:
        'Full-featured PHP-based e-commerce platform with authentication, cart management, product filters, and dynamic content. Fully responsive with video support.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      image: 'https://images4.alphacoders.com/133/thumb-1920-1332281.jpeg',
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: '2',
      title: 'URL Shortener System (Docquity)',
      description:
        'Backend redirection logic and service architecture. Worked on API routing, debugging, and unit testing as part of a collaborative team during internship.',
      tech: ['Backend', 'API Routing', 'Unit Testing'],
      image: 'https://acv.vc/wp-content/uploads/2023/03/logos-47.png',
      githubUrl: '#',
      demoUrl: '#',
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

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
      title: 'E-Waste Management Website',
      description:
        'First portfolio website built during school. Won 1st prize in school web development competition. Demonstrates fundamentals of web design.',
      tech: ['HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: '2',
      title: 'Interfaith Website',
      description:
        'Second school-level project that added interactivity and responsive layouts. Enhanced skills in JavaScript and UI design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1516534775068-bb57ce954b08?w=500&h=300&fit=crop',
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: '3',
      title: 'Anime Merchandise E-Commerce',
      description:
        'Full-featured PHP-based e-commerce platform with authentication, cart management, product filters, and dynamic content. Fully responsive with video support.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e9c6d7c1?w=500&h=300&fit=crop',
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: '4',
      title: 'URL Shortener System (Docquity)',
      description:
        'Backend redirection logic and service architecture. Worked on API routing, debugging, and unit testing as part of a collaborative team during internship.',
      tech: ['Backend', 'API Routing', 'Unit Testing'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
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

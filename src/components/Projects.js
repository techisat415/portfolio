import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    num: '01',
    category: 'App Development',
    title: 'Campus Utility Platform',
    desc: 'A cross-platform mobile application using Flutter for campus utility services including lost & found item search and ride sharing',
    tags: [
      { label: 'Flutter', type: '' },
      { label: 'Firebase',    type: 'neutral' },
      { label: 'FastAPI',  type: 'blue' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Radiation444/CollegeUtility' },
    ],
  },
  {
    num: '02',
    category: 'Full Stack Development & Graph Algorithms',
    title: 'Metro Route Planner',
    desc: 'A web application that computes optimised routes in a metro system, utilizing graph algorithms for efficient pathfinding based on user preferences and real-time data.',
    tags: [
      { label: 'Node.js', type: 'blue' },
      { label: 'Express.js', type: 'green' },
      { label: 'React',  type: 'red' },
      { label: 'PostgreSQL', type: 'neutral' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/techisat415/metro-routing' },
    ],
  },
  {
    num: '03',
    category: 'Research Project',
    title: 'Adaptive GNN Pipeline for Component Classification in Graphs',
    desc: 'Worked on the problem of component classification in complex graph datasets integrated multiple GNN architectures within a unified training framework',
    tags: [
      { label: 'Graph Neural Networks', type: 'blue' },
      { label: 'Pytorch',   type: 'blue' },
      { label: 'Deep Learning', type: 'neutral' },
      { label: 'Math', type: 'neutral' },
    ],
    links: [
      // { label: 'GitHub', href: '#' },
      // { label: 'Live',   href: '#' },
    ],
  },
  {
    num: '04',
    category: 'Backend Development',
    title: 'Tasks and Notes Manager',
    desc: 'A simple yet effective task and note management application built with a modern backend stack.',
    tags: [
      { label: 'Node.js',      type: 'blue' },
      { label: 'Express.js',   type: 'green' },
      { label: 'MongoDB',      type: 'neutral' },
      { label: 'REST API',     type: 'neutral' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/techisat415/tasks-notes-backend' },
      // { label: 'Case Study', href: '#' },
    ],
  },
];

function ProjectCard({ num, category, title, desc, tags, links }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`project-card ${hovered ? 'project-card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-card__num">{num} — {category}</div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{desc}</p>
      <div className="project-card__tags">
        {tags.map(({ label, type }) => (
          <span key={label} className={`tag ${type}`}>{label}</span>
        ))}
      </div>
      <div className="project-card__links">
        {links.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="project-card__link">→ {label}</a>
        ))}
      </div>
      <div className="project-card__underline" />
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      <div className="section-header">
        <p className="section-tag">What I've Built</p>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects__grid">
        {projects.map((p) => (
          <ProjectCard key={p.num} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

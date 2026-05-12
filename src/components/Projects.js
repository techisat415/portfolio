import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    num: '01',
    category: 'Research',
    title: 'AdaCC-GNN',
    desc: 'Adaptive Connected Component prediction using Graph Neural Networks. Integrates ChebNet & GraphSAGE with cumulative node coverage filtering for imbalanced graph regimes.',
    tags: [
      { label: 'PyTorch', type: '' },
      { label: 'GNNs',    type: '' },
      { label: 'Python',  type: 'blue' },
      { label: 'Research',type: 'neutral' },
    ],
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Paper',  href: '#' },
    ],
  },
  {
    num: '02',
    category: 'ML',
    title: 'VQA on SHAPES',
    desc: 'Visual Question Answering research on the SHAPES dataset. Focused on dataset loading, visualization pipelines, and model evaluation with presentation-ready outputs.',
    tags: [
      { label: 'PyTorch', type: '' },
      { label: 'VQA',     type: '' },
      { label: 'Python',  type: 'blue' },
      { label: 'CV',      type: 'neutral' },
    ],
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Demo',   href: '#' },
    ],
  },
  {
    num: '03',
    category: 'Web',
    title: 'MLP from Scratch',
    desc: 'Multi-layer perceptron implemented from scratch for XOR classification. Features manual backpropagation and an interactive browser-based visualization widget.',
    tags: [
      { label: 'JavaScript', type: 'blue' },
      { label: 'HTML/CSS',   type: 'blue' },
      { label: 'Math',       type: 'neutral' },
      { label: 'Neural Net', type: '' },
    ],
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Live',   href: '#' },
    ],
  },
  {
    num: '04',
    category: 'UX',
    title: 'Shopping App UX',
    desc: 'End-to-end UX research deliverable for an e-commerce app. Includes persona-based user journey maps, swim lanes, emotion curves, and touchpoint analysis.',
    tags: [
      { label: 'Figma',      type: 'neutral' },
      { label: 'UX Research',type: 'neutral' },
      { label: 'Prototyping',type: 'neutral' },
    ],
    links: [
      { label: 'Figma',      href: '#' },
      { label: 'Case Study', href: '#' },
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
          <a key={label} href={href} className="project-card__link">→ {label}</a>
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

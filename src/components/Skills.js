import React from 'react';
import './Skills.css';

const skills = [
  {
    icon: '🧠',
    title: 'Machine Learning',
    tags: [
      { label: 'PyTorch',     type: '' },
      { label: 'Scikit-learn',type: '' },
      { label: 'GNNs',        type: '' },
      { label: 'CNNs',        type: '' },
      { label: 'NumPy',       type: '' },
      { label: 'Pandas',      type: '' },
    ],
  },
  {
    icon: '⚙️',
    title: 'Software Engineering',
    tags: [
      { label: 'Python', type: 'blue' },
      { label: 'Java',   type: 'blue' },
      { label: 'C/C++',  type: 'blue' },
      { label: 'Git',    type: 'blue' },
      { label: 'Agile',  type: 'blue' },
    ],
  },
  {
    icon: '🌐',
    title: 'Web & Frontend',
    tags: [
      { label: 'React',      type: '' },
      { label: 'JavaScript', type: '' },
      { label: 'HTML/CSS',   type: '' },
      { label: 'Figma',      type: '' },
      { label: 'UX Design',  type: '' },
    ],
  },
  {
    icon: '🔬',
    title: 'Research & Analysis',
    tags: [
      { label: 'LaTeX',        type: 'neutral' },
      { label: 'Matplotlib',   type: 'neutral' },
      { label: 'Jupyter',      type: 'neutral' },
      { label: 'Graph Theory', type: 'neutral' },
    ],
  },
  {
    icon: '💡',
    title: 'Hardware & Systems',
    tags: [
      { label: 'Digital Electronics', type: 'blue' },
      { label: 'Thermodynamics',      type: 'blue' },
      { label: 'Logic Design',        type: 'blue' },
    ],
  },
  {
    icon: '🎨',
    title: 'Design & Creative',
    tags: [
      { label: 'Figma Pro',     type: 'neutral' },
      { label: 'Prototyping',   type: 'neutral' },
      { label: 'Storyboarding', type: 'neutral' },
      { label: 'UI/UX',         type: 'neutral' },
    ],
  },
];

function SkillCard({ icon, title, tags }) {
  return (
    <div className="skill-card">
      <span className="skill-card__icon">{icon}</span>
      <h3 className="skill-card__title">{title}</h3>
      <div className="skill-card__tags">
        {tags.map(({ label, type }) => (
          <span key={label} className={`tag ${type}`}>{label}</span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-wrapper skills">
      <div className="section-header">
        <p className="section-tag">What I Know</p>
        <h2 className="section-title">Skills</h2>
      </div>
      <div className="skills__grid">
        {skills.map((s) => (
          <SkillCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

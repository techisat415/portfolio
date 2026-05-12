import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    period: '2024 – Present',
    role: 'ML Researcher',
    org: 'University Research Lab',
    desc: 'Working on graph neural network architectures for connected component prediction. Developed AdaCC-GNN with novel imbalanced graph handling strategies and published results through performance analysis charts.',
  },
  {
    period: '2024',
    role: 'Software Engineering — Academic Project',
    org: 'CSL 2060 Coursework',
    desc: 'Studied COCOMO estimation, function point analysis, agile metrics, cyclomatic complexity, and CFDs. Built structured workflows for software lifecycle planning and quality assurance.',
  },
  {
    period: '2023 – Present',
    role: 'B.Tech Student — CSE',
    org: 'University',
    desc: 'Pursuing a comprehensive CS curriculum spanning software engineering, machine learning, digital electronics, thermodynamics, and UX design. Active in campus tech events and hostel competitions.',
  },
];

function TimelineItem({ period, role, org, desc, index }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="timeline__item">
      <div className="timeline__dot" />
      <button className="timeline__header" onClick={() => setOpen((o) => !o)}>
        <span className="timeline__period">{period}</span>
        <span className="timeline__toggle">{open ? '−' : '+'}</span>
      </button>
      <h3 className="timeline__role">{role}</h3>
      <p className="timeline__org">{org}</p>
      {open && <p className="timeline__desc">{desc}</p>}
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="section-header">
        <p className="section-tag">My Journey</p>
        <h2 className="section-title">Experience</h2>
      </div>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <TimelineItem key={exp.period} {...exp} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Experience;

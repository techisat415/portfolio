import React from 'react';
import './About.css';

const info = [
  { label: 'Study',    value: 'Computer Science & Engineering' },
  { label: 'Focus',    value: 'Software Engineering' },
  { label: 'Research', value: 'Graph Neural Networks, VQA' },
  { label: 'Tools',    value: 'Python, PyTorch, React, Figma' },
  { label: 'Location', value: 'India' },
];

function About() {
  return (
    <section id="about" className="section-wrapper about">
      <div className="about__text">
        <div className="section-header">
          <p className="section-tag">Who I Am</p>
          <h2 className="section-title">About Me</h2>
        </div>
        <p>
          I'm a <strong>Computer Science &amp; Engineering student</strong> with a passion
          for building intelligent systems and elegant software. My interests span machine
          learning, software engineering, and digital design.
        </p>
        <p>
          When I'm not coding, I'm working on research problems involving{' '}
          <strong>graph neural networks</strong> and visual question answering, or
          contributing to hostel events and team competitions.
        </p>
        <p>
          I thrive at the intersection of rigorous engineering and creative problem-solving.
        </p>
      </div>

      <div className="about__card">
        <div className="about__card-name">Saksham Panghal</div>
        <div className="about__card-title">// CS &amp; Engineering Student</div>
        <div className="about__card-info">
          {info.map(({ label, value }) => (
            <div className="about__info-row" key={label}>
              <span className="about__info-label">{label}</span>
              <span className="about__info-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

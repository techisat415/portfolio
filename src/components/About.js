import React from 'react';
import './About.css';

const info = [
  { label: 'Study',    value: 'Computer Science & Engineering' },
  { label: 'Focus',    value: 'Software Engineering' },
  { label: 'Research', value: 'Graph Neural Networks' },
  { label: 'Languages', value: 'C/C++, Python, JavaScript, Dart' },
  { label: 'Tools',    value: 'React, Node.js, MongoDB, PostgreSQL, Flutter' },
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
          Hi! I am <strong>Saksham Panghal</strong>, a developer passionate about software engineering 
          and building impactful products.
          I am currently pursuing my B.Tech in <strong>Computer Science & Engineering</strong> at the 
          Indian Institute of Technology Jodhpur, 
          where I have honed my skills in <strong>full-stack development</strong> and research.
          
        </p>
        <p>
          I enjoy learning new things as much as I can and working on projects that enhance 
          user experiences and solve real problems.
          Lately, I have been exploring <strong>DevOps and distributed systems</strong>, driven by curiosity 
          about building scalable and reliable software.

        </p>
        <p>
          Apart from programming, some things that interest me are theoretical computer science, comics, history, and philosophy.
          Would love to connect with like-minded people, so feel free to reach out!
        </p>
      </div>

      {/* <div className="about__card">
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
      </div> */}
    </section>

  );
}

export default About;

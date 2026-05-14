import React, { useEffect, useState } from 'react';
import './Hero.css';

const ROLES = ['Software Engineer', 'Avid Learner', 'Full Stack Developer'];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero__grid-bg" />
      <div className="hero__content">
        <p className="hero__tag">Available for opportunities</p>

        <h1 className="hero__name">
          Saksham Panghal
        </h1>

        <p className="hero__role">
          CS Student &amp; <span className="hero__role-highlight">{displayed}</span>
          <span className="hero__cursor" />
        </p>

        <div className="hero__cta">
          <a href="#projects" className="btn-primary"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Projects
          </a>
          <a href="#contact" className="btn-outline"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get in Touch
          </a>
        </div>

        <div className="hero__stats">
          {[
            { num: '10+', label: 'Projects Built' },
            { num: '3+',  label: 'Research Areas' },
            { num: '6+',  label: 'Tech Domains' },
          ].map(({ num, label }) => (
            <div className="hero__stat" key={label}>
              <span className="hero__stat-num">{num}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

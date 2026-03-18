import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';

function Hero() {
  const roles = [
    'Fullstack Web Developer',
    'React & Node.js Engineer',
    'Crypto & Tech Enthusiast',
    'API Architect',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.content}>
        <p className={styles.pretitle}>
          <span className={styles.dot} />
          Available for opportunities
        </p>
        <h1 className={styles.name}>
          Izehiuwa<br />
          <span className={styles.nameAccent}>Joshua</span>
        </h1>
        <p className={`${styles.role} ${fade ? styles.fadeIn : styles.fadeOut}`}>
          <span className={styles.rolePrefix}>_</span>{roles[roleIndex]}
        </p>
        <p className={styles.bio}>
          Building modern, scalable web applications & APIs. Based in{' '}
          <span className={styles.highlight}>São Paulo, Brazil</span> 🇧🇷 — originally from{' '}
          <span className={styles.highlight}>Nigeria</span> 🇳🇬
        </p>
        <div className={styles.actions}>
          <a href="#projects" className="btn-primary">View Projects ↓</a>
          <a href="#contact" className="btn-outline">Get In Touch</a>
        </div>
        <div className={styles.stack}>
          {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Git', 'CI/CD'].map((tech) => (
            <span key={tech} className={styles.pill}>{tech}</span>
          ))}
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  );
}

export default Hero;
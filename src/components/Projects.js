import React from 'react';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    name: 'CryptoIQ',
    tagline: 'Real-time cryptocurrency intelligence dashboard',
    description: 'A modern crypto dashboard that provides real-time market data, price tracking, and portfolio insights. Built with React and integrated with live crypto APIs to deliver accurate market intelligence to traders and enthusiasts.',
    technologies: ['React', 'JavaScript', 'REST APIs', 'CSS Modules', 'Chart.js'],
    github: 'https://github.com/Josueize/cryptoiq',
    category: 'Frontend',
    highlight: true,
  },
  {
    id: 2,
    name: 'JobTrackr',
    tagline: 'Smart job application management system',
    description: 'A full-featured job application tracker that helps developers manage their job search pipeline. Track applications, interviews, and offers with a clean, organized dashboard and status management system.',
    technologies: ['React', 'Node.js', 'JavaScript', 'REST API', 'Styled Components'],
    github: 'https://github.com/Josueize/jobtrackr-app',
    category: 'Fullstack',
    highlight: false,
  },
  {
    id: 3,
    name: 'CareerPulse',
    tagline: 'Career growth and skill tracking platform',
    description: 'A platform for developers to track their career growth, set learning goals, and visualize skill progression over time. Focused on helping professionals measure their development journey with actionable insights.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Git', 'CI/CD'],
    github: 'https://github.com/Josueize/careerpulse',
    category: 'Fullstack',
    highlight: false,
  },
];

function ProjectCard({ project }) {
  return (
    <article className={`${styles.card} ${project.highlight ? styles.featured : ''}`}>
      <div className={styles.cardTop}>
        <span className={styles.category}>{project.category}</span>
        {project.highlight && <span className={styles.featuredBadge}>⭐ Featured</span>}
      </div>
      <h3 className={styles.cardTitle}>{project.name}</h3>
      <p className={styles.cardTagline}>{project.tagline}</p>
      <p className={styles.cardDesc}>{project.description}</p>
      <div className={styles.techStack}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles.tech}>{tech}</span>
        ))}
      </div>
      <div className={styles.cardLinks}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
          GitHub ↗
        </a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="section-wrapper">
        <p className="section-tag">&#47;&#47; my work</p>
        <h2 className="section-title">Projects</h2>
        <div className="section-divider" />
        <div className={styles.grid}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className={styles.cta}>
          <p className={styles.ctaText}>Want to see more of my work?</p>
          <a href="https://github.com/Josueize" target="_blank" rel="noopener noreferrer" className="btn-outline">
            View All on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
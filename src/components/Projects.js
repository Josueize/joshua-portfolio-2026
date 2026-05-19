import React from 'react';
import styles from './Projects.module.css';

// Import project screenshots from src folder
import cryptoiqImg from '../cryptoiq.png';
import jobtrackrImg from '../jobtrackr.png';
import careerpulseImg from '../careerpulse.png';
import cachosnaturaisImg from '../cachosnaturais.png';
import scriptforgeImg from '../scriptforge.png';

// Array of project data — add or remove projects here
const projectsData = [
  {
    id: 1,
    name: 'CryptoIQ',
    tagline: 'Real-time cryptocurrency intelligence dashboard',
    description: 'A modern crypto dashboard that provides real-time market data, price tracking, and portfolio insights. Built with React and integrated with live crypto APIs to deliver accurate market intelligence to traders and enthusiasts.',
    technologies: ['React', 'JavaScript', 'REST APIs', 'CSS Modules', 'Chart.js'],
    github: 'https://github.com/Josueize/cryptoiq',
    image: cryptoiqImg,
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
    image: jobtrackrImg,
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
    image: careerpulseImg,
    category: 'Fullstack',
    highlight: false,
  },
  {
    id: 4,
    name: 'Cachos Naturais',
    tagline: 'Luxury hair salon website for Mônica Santos',
    description: 'A premium beauty salon website built for Cachos Naturais — Mônica Santos. Features service listings, WhatsApp booking integration, Instagram feed, client testimonials, and Stripe payment processing.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'Stripe API'],
    github: 'https://pages.github.com',
    demo: 'https://cachosmoninaturais.com.br',
    image: cachosnaturaisImg,
    category: 'Fullstack',
    highlight: false,
  },
  {
    id: 5,
    name: 'ScriptForge',
    tagline: 'AI-powered multi-platform content generation',
    description: 'A multi-agent content repurposing platform where a content strategist enters one idea and every publish-ready asset for every channel is generated automatically — YouTube scripts, LinkedIn posts, X/Twitter threads and more.',
    technologies: ['React', 'Node.js', 'AI APIs', 'JavaScript', 'REST API'],
    github: 'https://github.com/Josueize/scriptforge',
    image: scriptforgeImg,
    category: 'AI / Fullstack',
    highlight: false,
  },
];

/**
 * ProjectCard — reusable component that renders a single project.
 * Displays screenshot, title, description, tech stack and GitHub link.
 * @param {object} project - Project data object from projectsData array
 */
function ProjectCard({ project }) {
  return (
    <article className={`${styles.card} ${project.highlight ? styles.featured : ''}`}>
      {/* Project screenshot */}
      <div className={styles.imageWrapper}>
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className={styles.image}
        />
      </div>

      {/* Card header with category and featured badge */}
      <div className={styles.cardTop}>
        <span className={styles.category}>{project.category}</span>
        {project.highlight && <span className={styles.featuredBadge}>⭐ Featured</span>}
      </div>

      {/* Project title and tagline */}
      <h3 className={styles.cardTitle}>{project.name}</h3>
      <p className={styles.cardTagline}>{project.tagline}</p>

      {/* Project description */}
      <p className={styles.cardDesc}>{project.description}</p>

      {/* Technologies used */}
      <div className={styles.techStack}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles.tech}>{tech}</span>
        ))}
      </div>

      {/* Links to GitHub and live demo */}
      <div className={styles.cardLinks}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
          GitHub ↗
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}>
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}

/**
 * Projects section — displays all portfolio projects in a responsive grid.
 * Uses ProjectCard component for each project entry.
 */
function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="section-wrapper">
        <p className="section-tag">&#47;&#47; my work</p>
        <h2 className="section-title">Projects</h2>
        <div className="section-divider" />

        {/* Project cards grid */}
        <div className={styles.grid}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
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
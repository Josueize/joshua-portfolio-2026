import React from 'react';
import styles from './Skills.module.css';

const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 70 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'CSS Modules / Styled Components', level: 75 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'REST API Design', level: 72 },
      { name: 'Express.js', level: 68 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'GitLab / Bitbucket', level: 70 },
      { name: 'CI/CD Pipelines', level: 60 },
      { name: 'Vercel / Netlify', level: 80 },
    ],
  },
  {
    category: 'Crypto & Web3',
    icon: '₿',
    skills: [
      { name: 'Crypto Market Data APIs', level: 75 },
      { name: 'DeFi Concepts', level: 65 },
      { name: 'Blockchain Fundamentals', level: 60 },
    ],
  },
];

function SkillBar({ name, level }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.bar}>
        <div className={styles.barFill} style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="section-wrapper">
        <p className="section-tag">&#47;&#47; what I know</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider" />
        <div className={styles.grid}>
          {skillCategories.map(({ category, icon, skills }) => (
            <div key={category} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>{icon}</span>
                {category}
              </h3>
              <div className={styles.skillsList}>
                {skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.softSkills}>
          <h3 className={styles.softTitle}>Beyond the Code</h3>
          <div className={styles.softGrid}>
            {['Strategic Thinking', 'Problem Solving', 'System Design', 'Continuous Learning', 'Results-Oriented', 'Remote Collaboration'].map((skill) => (
              <div key={skill} className={styles.softPill}>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
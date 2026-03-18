import React from 'react';
import styles from './About.module.css';

function About() {
  const facts = [
    { label: 'Location', value: 'São Paulo, Brazil 🇧🇷' },
    { label: 'Origin', value: 'Nigeria 🇳🇬' },
    { label: 'Focus', value: 'Fullstack Development' },
    { label: 'Interests', value: 'Crypto & Web3, Cloud, APIs' },
    { label: 'Languages', value: 'English, Portuguese (learning)' },
    { label: 'Status', value: 'Open to opportunities' },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="section-wrapper">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatar}>
                <span className={styles.avatarInitials}>JO</span>
              </div>
              <div className={styles.avatarGlow} />
            </div>
            <div className={styles.facts}>
              {facts.map(({ label, value }) => (
                <div key={label} className={styles.fact}>
                  <span className={styles.factLabel}>{label}</span>
                  <span className={styles.factValue}>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <p className="section-tag">&#47;&#47; about me</p>
            <h2 className="section-title">Who I Am</h2>
            <div className="section-divider" />
            <div className={styles.bio}>
              <p>I'm <strong>Izehiuwa Igiebor Omogiate</strong>, English name <strong>Joshua</strong> — a Nigerian Fullstack Web Developer in training, currently based in <strong>São Paulo, Brazil</strong>. I'm passionate about building modern, scalable web applications and APIs that solve real human problems.</p>
              <p>My stack revolves around <strong>JavaScript</strong> and <strong>TypeScript</strong> on both frontend and backend — working with <strong>React</strong> for interfaces and <strong>Node.js</strong> for server-side logic. I use <strong>Git</strong> daily across GitHub, GitLab, and Bitbucket, and I follow CI/CD practices to ship reliable software.</p>
              <p>I'm deeply interested in <strong>crypto and Web3 technology</strong>, which has shaped projects like CryptoIQ. I approach every challenge with a strategic, results-oriented mindset, always focused on continuous improvement.</p>
              <p>Currently sharpening my skills in <strong>backend development</strong> and <strong>cloud deployment</strong>, with my sights set on becoming a well-rounded fullstack engineer.</p>
            </div>
            <div className={styles.actions}>
              <a href="mailto:izategbese1@gmail.com" className="btn-primary">Say Hello ✉</a>
              <a href="https://github.com/Josueize" target="_blank" rel="noopener noreferrer" className="btn-outline">GitHub ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
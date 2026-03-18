import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>
            <span className={styles.accent}>&lt;</span>Joshua<span className={styles.accent}>/&gt;</span>
          </span>
          <p className={styles.credit}>
            Designed & Built by <strong>Izehiuwa Joshua Omogiate</strong> · {year}
          </p>
        </div>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
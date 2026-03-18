import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoAccent}>&lt;</span>Joshua<span className={styles.logoAccent}>/&gt;</span>
        </a>
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href="https://github.com/Josueize" target="_blank" rel="noopener noreferrer" className={styles.cta}>GitHub ↗</a>
        <button className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>{link.label}</a>
        ))}
        <a href="https://github.com/Josueize" target="_blank" rel="noopener noreferrer" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>GitHub ↗</a>
      </div>
    </nav>
  );
}

export default Navbar;
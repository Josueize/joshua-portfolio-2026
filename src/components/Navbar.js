import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../logo.png';

/**
 * Navbar component
 * Handles responsive navigation with mobile hamburger menu.
 * @param {boolean} scrolled - Whether the page has been scrolled past 50px
 */
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
        {/* Izate Lab logo and name */}
        <a href="#hero" className={styles.logo}>
          <img src={logo} alt="Izate Lab" className={styles.logoImg} />
          <span className={styles.logoText}>Izate Lab</span>
        </a>

        {/* Desktop nav links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* GitHub CTA button */}
        <a href="https://github.com/Josueize" target="_blank" rel="noopener noreferrer" className={styles.cta}>
          GitHub ↗
        </a>

        {/* Hamburger button for mobile */}
        <button className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown menu */}
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
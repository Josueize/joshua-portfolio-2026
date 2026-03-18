import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Josueize', icon: '⌨', description: 'View my code and projects' },
    { label: 'Email', href: 'mailto:izategbese1@gmail.com', icon: '✉', description: 'izategbese1@gmail.com' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:izategbese1@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="section-wrapper">
        <p className="section-tag">// get in touch</p>
        <h2 className="section-title">Contact Me</h2>
        <div className="section-divider" />
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.intro}>
              I'm currently open to new opportunities — whether it's a full-time role, freelance project,
              or just a conversation about tech and crypto. Feel free to reach out!
            </p>
            <div className={styles.socials}>
              {socialLinks.map(({ label, href, icon, description }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className={styles.socialCard}>
                  <span className={styles.socialIcon}>{icon}</span>
                  <div>
                    <p className={styles.socialLabel}>{label}</p>
                    <p className={styles.socialDesc}>{description}</p>
                  </div>
                  <span className={styles.socialArrow}>↗</span>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            {submitted ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✓</span>
                <p>Message prepared! Check your email client to send it.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Your Name</label>
                  <input id="name" name="name" type="text" required className={styles.input} placeholder="John Doe" value={formData.name} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input id="email" name="email" type="email" required className={styles.input} placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea id="message" name="message" required className={`${styles.input} ${styles.textarea}`} placeholder="Tell me about your project or opportunity..." rows={6} value={formData.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message ✉
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
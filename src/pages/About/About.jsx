import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Our Story</h1>
      <div className={styles.content}>
        <p>Founded in 2010, we specialize in artisanal jewelry crafted with ethically sourced materials.</p>
        <h2>Meet the Team</h2>
        {/* Team bios would go here */}
      </div>
    </div>
  );
}
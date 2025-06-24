import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Our Jewelry Store</h1>
      <div className={styles.hero}>
        <p>Discover exquisite handcrafted jewelry</p>
        <button className={styles.cta}>Shop Now</button>
      </div>
      {/* Featured products will go here */}
    </div>
  );
}
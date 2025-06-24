import React from 'react';
import styles from './Checkout.module.css';

export default function Checkout() {
  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <div className={styles.steps}>
        <div className={styles.step}>Shipping</div>
        <div className={styles.step}>Payment</div>
        <div className={styles.step}>Review</div>
      </div>
      {/* Form components will go here */}
    </div>
  );
}
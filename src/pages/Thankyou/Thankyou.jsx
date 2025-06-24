import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ThankYou.module.css';

export default function Thankyou() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Thank You for Your Order!</h1>
        <p>Your order has been received and is being processed.</p>
        <p>We've sent a confirmation email with your order details.</p>
        
        <div className={styles.recommendations}>
          <h2>You Might Also Like</h2>
          <div className={styles.products}>
            {/* Recommended products would go here */}
          </div>
        </div>

        <Link to="/shop" className={styles.continueShopping}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
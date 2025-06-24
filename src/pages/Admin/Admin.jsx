import React from 'react';
import styles from './Admin.module.css';

export default function Admin() {
  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      <div className={styles.sections}>
        <section className={styles.productsManagement}>
          <h2>Products Management</h2>
          {/* CRUD operations will go here */}
        </section>
        <section className={styles.orders}>
          <h2>Orders</h2>
          {/* Order management will go here */}
        </section>
      </div>
    </div>
  );
}
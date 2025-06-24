import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Shop.module.css';

const products = [
  { id: 1, name: 'Diamond Ring', price: 599.99, image: '/ring.jpg' },
  { id: 2, name: 'Gold Necklace', price: 399.99, image: '/necklace.jpg' }
];

export default function Shop() {
  const [filter, setFilter] = useState('all');

  return (
    <div className={styles.container}>
      <h1>Our Collection</h1>
      
      <div className={styles.filters}>
        <button 
          className={filter === 'all' ? styles.active : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'rings' ? styles.active : ''}
          onClick={() => setFilter('rings')}
        >
          Rings
        </button>
        <button 
          className={filter === 'necklaces' ? styles.active : ''}
          onClick={() => setFilter('necklaces')}
        >
          Necklaces
        </button>
      </div>

      <div className={styles.products}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
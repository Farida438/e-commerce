import React from 'react';
import styles from './Home.module.css';
import { assets } from '../../assets/assets.jsx';
import Slider from '../../components/slider/Slider.jsx';

export default function Home() {
  return (
    <div className={styles.container}>
      
      <div className={styles.gif}>
        <img src={assets.homegif} alt="Home GIF" />
      </div>

      <Slider />

      <div className={styles.collection}>
        <h1 className={styles.collectionTitle}>"Jewelry is more than just an accessory — it's a timeless expression of elegance, crafted to celebrate the beauty, strength, and individuality of every woman who wears it."</h1>
        <div className={styles.collectionImages}>
          <img src={assets.collection} alt="Collection" className={styles.collectionimg} />
        </div>
      </div>
    </div>
  );
}
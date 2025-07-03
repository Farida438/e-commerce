import React from 'react';
import CountUp from 'react-countup';
import { assets } from '../../assets/assets.jsx';
import styles from './About.module.css';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import abt from '../../assets/photo/abt.jpg'; 
import ClientHappiness from '../../components/client/ClientHappiness.jsx';

function AnimatedNumber({ value, suffix = '', decimals = 0 }) {
  return <CountUp end={value} duration={3} decimals={decimals} suffix={suffix} className={styles.anime} />;
}

export default function About() {
  return (
    <div className={styles.container}>

      {/* Background Image with Overlay & Title */}
    <div
  className={styles.abt}
  style={{ backgroundImage: `url(${abt})` }}
>
  <div className={styles.overlay}>
    <div className={styles.abtContent}>
      <h1 className={styles.title}>About Us</h1>

      <div className={styles.statsInline}>
        <div className={styles.statBoxInline}>
          <AnimatedNumber value={20} suffix="+" />
          <p className={styles.animes}>Years of Expertise</p>
        </div>
        <div className={styles.statBoxInline}>
          <AnimatedNumber value={1289} />
          <p className={styles.animes}>Designs Created</p>
        </div>
        <div className={styles.statBoxInline}>
          <AnimatedNumber value={98} suffix="%" />
          <p className={styles.animes}>Customer Satisfaction</p>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* About Text Section */}
     <div className={styles.letter}>
  <div className={styles.item}>
    <div className={styles.head}>
       Note from the Co-Founders
    </div>

    <div className={styles.founders}>
      <blockquote className={styles.quote}>
        “Crafted to last, designed to be worn.”
      </blockquote>

      <p className={styles.rest}>
        At Catbird, we create quality jewelry and accessories thoughtfully designed in San Diego. <br /><br />
        We believe that beautiful things are meant to be worn, not saved for "someday." That's why we meticulously craft each piece to maintain its beauty wear after wear, creating essentials you'll actually reach for daily. 
        Our design philosophy is simple: create pieces that seamlessly integrate into your everyday style while elevating each look. <br /><br />
        As sisters, we founded Catbird on the principle that quality shouldn't be a luxury. We take pride in our craftsmanship and attention to detail. From delicate layers to statement pieces, each design is created with love. 
        Welcome to Catbird – where quality meets your everyday. <br /><br />
        Follow our journey on social media for a closer look at the brand & us!
      </p>

      
    </div>
  </div>

  <div className={styles.item}>
    <img src={assets.about} className={styles.about} alt="About Visual" />
  </div>
</div>


    

<h2 className={styles.sectionHeader}>Why Choose Us?</h2>

<div className={styles.advantagesSection}>
  <div className={styles.advantageItem}>
    <div className={styles.number}>01</div>
    <h3 className={styles.advTitle}>Timeless Craftsmanship</h3>
    <p className={styles.advText}>
      Every piece is carefully handcrafted to last a lifetime, capturing elegance in every curve and detail.
    </p>
  </div>

  <div className={styles.advantageItem}>
    <div className={styles.number}>02</div>
    <h3 className={styles.advTitle}>Everyday Elegance</h3>
    <p className={styles.advText}>
      Our designs are created to complement your daily style — refined, effortless, and truly yours.
    </p>
  </div>

  <div className={styles.advantageItem}>
    <div className={styles.number}>03</div>
    <h3 className={styles.advTitle}>Sister-Led Story</h3>
    <p className={styles.advText}>
      Built by family, for families. A shared dream turned into a brand that celebrates connection.
    </p>
  </div>

  <div className={styles.advantageItem}>
    <div className={styles.number}>04</div>
    <h3 className={styles.advTitle}>Ethical & Intentional</h3>
    <p className={styles.advText}>
      We source sustainably, produce mindfully, and design with purpose. Beauty should never compromise values.
    </p>
  </div>
</div>





<h2 className={styles.sectionHeader}>Meet Our Team</h2>

<div className={styles.teamSection}>
  {[
    {
      name: "Amelia Catbird",
      role: "Creative Director",
      age: 45,
      quote: "I turn ideas into elegance — one sketch at a time.",
      img: assets.sophia,
    },
    {
      name: "Sophia Catbird",
      role: "Brand Strategist",
      age: 29,
      quote: "Jewelry is the punctuation of personal style.",
      img: assets.angelina,
    },
    {
      name: "Lily Moreau",
      role: "Head of Production",
      age: 35,
      quote: "Details matter. That’s where the magic begins.",
      img: assets.amelia,
    },
    {
      name: "James Lee",
      role: "Operations Lead",
      age: 38,
      quote: "A seamless experience begins with solid foundations.",
      img: assets.james,
    },
  ].map((member, i) => (
    <div className={styles.teamCard} key={i}>
      <img src={member.img} alt={member.name} className={styles.teamPhoto} />
      <h3 className={styles.teamName}>{member.name}</h3>
      <p className={styles.teamRole}>
        {member.role}, <span className={styles.age}>Age: {member.age}</span>
      </p>
      <p className={styles.teamQuote}>"{member.quote}"</p>
      <div className={styles.socials}>
        <a href="#" className={styles.social}><FaLinkedinIn /></a>
        <a href="#" className={styles.social}><FaInstagram /></a>
        <a href="#" className={styles.social}><FaFacebookF /></a>
      </div>
    </div>
  ))}
</div>

      <ClientHappiness/>
    </div>
  );
}

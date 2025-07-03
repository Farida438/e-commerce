import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Client.module.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Willie Bradley",
    title: "Reporter",
    feedback: "This smart home assistant has become a very important part of my daily routine. From managing my schedule and setting reminders to controlling smart home devices and answering questions.",
    product: "Smart Home Assistant",
    stars: 5,
  },
  {
    name: "Lisa Decamp",
    title: "Investor, Zemlex Co.",
    feedback: "The product quality is outstanding. It has transformed the way I interact with my smart devices and daily life.",
    product: "Best quality product",
    stars: 5,
  },
  {
    name: "Cameron Williamson",
    title: "Banker, Simtom Bank Co.",
    feedback: "The build quality is fantastic, and the performance is even better. I highly recommend this for anyone looking to upgrade their smart home setup.",
    product: "Amazing build quality",
    stars: 5,
  },
  {
    name: "Alex Morgan",
    title: "Fashion Retailer",
    feedback: "I love how this fits into my style while still delivering great performance. Absolutely love it!",
    product: "Stylish and Reliable",
    stars: 5,
  },
  {
    name: "Nora Bennett",
    title: "Interior Designer",
    feedback: "This brand has never disappointed me. Every release brings something even better.",
    product: "My Favorite Brand",
    stars: 4,
  },
  {
    name: "David Tran",
    title: "Engineer",
    feedback: "Efficient, sleek and dependable. I trust this product with my work and life.",
    product: "Tech that Works",
    stars: 5,
  }
];

export default function ClientHappiness() {
  return (
    <section className={styles.clientSection}>
      <h2 className={styles.heading}>Our Client’s Happiness</h2>
      <p className={styles.subheading}>
        The Best electronics products continue to drive innovation and shape <br />
        the way we live, work, and interact with our environment.
      </p>

      {/* NAVIGATION BUTTONS */}
      <div className={`prev ${styles.navBtnpr}`}>❮</div>
      <div className={`next ${styles.navBtnnx}`}>❯</div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={3}
        navigation={{ nextEl: '.next', prevEl: '.prev' }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.swiperContainer}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.card}>
              <div className={styles.stars}>
                {[...Array(t.stars)].map((_, i) => (
                  <FaStar key={i} className={styles.star} />
                ))}
              </div>
              <h3 className={styles.product}>{t.product}</h3>
              <p className={styles.feedback}>{t.feedback}</p>
              <div className={styles.profile}>
                <div className={styles.avatar}>{t.name[0]}</div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.title}>{t.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className={`swiper-pagination ${styles.pagination}`}></div>
      </Swiper>
    </section>
  );
}

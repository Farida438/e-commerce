import React from 'react';
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import { assets } from '../../assets/assets.jsx';
import Button from '../ui/Button/Button.jsx';

const Slider = () => {
  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.galleryTitle}>Presenting Summer Forever Collection</h1>

      <Button />
      
      <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView="auto"
  loop={true}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: false,
  }}
  pagination={{
    el: ".custom-pagination",
    clickable: true,
  }}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
  modules={[Navigation, Pagination, EffectCoverflow]}
  className={styles.gallerySwiper}
><div className={styles.controlsWrapper}>
  <div className={`custom-prev ${styles.customNav}`}>&lt;</div>
  <div className={`custom-pagination ${styles.customPagination}`}></div>
  <div className={`custom-next ${styles.customNav}`}>&gt;</div>
</div>


      
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
          <SwiperSlide key={item} className={styles.gallerySlide}>
            <img 
              src={assets[`img${item}`]} 
              alt={`Flower ${item}`} 
              className={styles.galleryImage} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
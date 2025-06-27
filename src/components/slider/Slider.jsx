import React from 'react';
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { assets } from '../../assets/assets.jsx';
import Button from '../ui/Button/Button.jsx';

const Slider = () => {
  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.galleryTitle}>Presenting Summer Forever Collection</h1>

      <Button />
      
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className={styles.gallerySwiper}
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          }
        }}
      >
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
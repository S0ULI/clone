'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from '../cards/Card';

const Slider = () => {
  return (
    <div>
      <Swiper 
        slidesPerView={3}
        freeMode={true}
        modules={[FreeMode]}
      >
        <SwiperSlide>
          <Card data={{ id: 1, title: 'kir' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data={{ id: 2, title: 'kir' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data={{ id: 3, title: 'kir' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data={{ id: 4, title: 'kir' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data={{ id: 5, title: 'kir' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data={{ id: 6, title: 'kir' }} />
        </SwiperSlide>
        <span slot="container-start">Most Popular</span>
        <span slot="wrapper-start">Swipe 👉</span>
        <span slot="wrapper-end">nothing else to see</span>
      </Swiper>
    </div>
  );
};

export default Slider;

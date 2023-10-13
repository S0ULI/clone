'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination,
  Navigation,
  Autoplay,
  Keyboard,
  Parallax,
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SectionWrapper from '../layout/SectionWrapper';
import Slide from './Slide';

import sugg from './suggestionItems';

const SliderParallax = () => {
  return (
    <div className="w-full my-swiper">
      <Swiper
        style={{
          '--swiper-navigation-color': '#1f1f1f',
          '--swiper-pagination-color': '#FF6517',
        }}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        speed={600}
        parallax={true}
        navigation={true}
        pagination={{
          // clickable: true
          type: 'progressbar',
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Parallax, Keyboard, Autoplay]}
        className="w-full"
      >
        {sugg.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <Slide item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderParallax;

// data-swiper-parallax="-300"
// .parallax-bg {
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 130%;
//     height: 100%;
//     -webkit-background-size: cover;
//     background-size: cover;
//     background-position: center;
//   }

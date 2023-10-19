'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from '../cards/Card';
import Link from 'next/link';
import SectionWrapper from '../layout/SectionWrapper';

const Slider = ({ cards, category, title }) => {
  return (
      <SectionWrapper mSt="flex flex-col gap-7 pt-6" px8={'sm:px-8'} mtn={true}>
        {/* border-t-2  border-dark-background-color-p dark:border-background-color-p */}
        <div className='w-full flex justify-between items-center px-8 sm:px-0'>
        <Link
          href={`/products?category=${category}`}
          className="w-fit hover:underline text-[#1f1f1f] dark:text-[#cccccc]"
        >
          <h3 className='text-xl text-secondary-color font-bold'>{title}</h3>
        </Link>
        <Link
          href={`/products?category=${category}`}
          className="w-fit hover:underline text-[#1f1f1f] dark:text-[#cccccc]"
        >
          All
        </Link>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlidesBounds={true}
          style={{
            '--swiper-navigation-color': '#FC8C54',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          navigation={true}
          grabCursor={true}
          keyboard={{ enabled: true }}
          modules={[Navigation, Keyboard]}
        >
          {cards.map((card) => {
            return (
              <SwiperSlide key={card.id}>
                <div className='w-full flex justify-center items-center'>
                <Card data={card} />
                </div>
              </SwiperSlide>
            );
          })}
          <div
            slot="wrapper-end"
            className="w-fit pr-5 flex flex-col justify-around items-center text-xl text-white/40"
          >
            <span>...</span>
          </div>
        </Swiper>
      </SectionWrapper>
  );
};

export default Slider;

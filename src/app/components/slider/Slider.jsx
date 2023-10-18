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
    <div className="w-full">
      <SectionWrapper mSt="flex flex-col gap-7" px8={'sm:px-8'}>
        <span className='w-full h-[1px] bg-black/10 block'></span>
        <div className='w-full flex justify-between items-center px-8 sm:px-0'>
          <h3 className='text-xl text-secondary-color font-bold'>{title}</h3>
        <Link
          href={`/products?category=${category}`}
          className="w-fit hover:underline text-[#1f1f1f]"
        >
          All
        </Link>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
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
                <Card data={card} />
              </SwiperSlide>
            );
          })}
          <div slot="wrapper-start"><span className='w-8 block sm:hidden'></span></div>
          <div
            slot="wrapper-end"
            className="w-fit pr-5 flex flex-col justify-around items-center text-xl text-white/40"
          >
            <span>...</span>
          </div>
        </Swiper>
      </SectionWrapper>
    </div>
  );
};

export default Slider;

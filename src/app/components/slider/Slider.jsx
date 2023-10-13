'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from '../cards/Card';
import Link from 'next/link';
import SectionWrapper from '../layout/SectionWrapper';

const Slider = ({ cards, sort, title }) => {
  return (
    <div className="w-full">
      <SectionWrapper mSt="flex flex-col gap-7" px8={'sm:px-8'}>
        <span className='w-full h-[1px] bg-black/10 block'></span>
        <div className='w-full flex justify-between items-center'>
          <h3 className='text-xl text-secondary-color font-bold'>{title}</h3>
        <Link
          href={`/products?sort=${sort}`}
          className="w-fit hover:underline text-[#1f1f1f]"
        >
          All
        </Link>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          style={{
            '--swiper-navigation-color': '#1f1f1f',
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
          freeMode={true}
          navigation={true}
          grabCursor={true}
          modules={[FreeMode, Navigation]}
        >
          {cards.map((card) => {
            return (
              <SwiperSlide key={card.id}>
                <Card data={card} />
              </SwiperSlide>
            );
          })}
          <div
            slot="wrapper-start"
            className="w-fit pr-5 flex flex-col justify-around items-center text-sm text-white/40"
          >
            <span>Swipe 👉</span>
            <span></span>
          </div>
          <div
            slot="wrapper-end"
            className="w-fit pr-5 flex flex-col justify-around items-center text-sm text-white/40"
          >
            <span>This is The End...</span>
            <span></span>
          </div>
        </Swiper>
      </SectionWrapper>
    </div>
  );
};

export default Slider;

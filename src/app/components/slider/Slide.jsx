'use client';

import Link from 'next/link';
import SectionWrapper from '../layout/SectionWrapper';

const Slide = ({ item }) => {
  return (
    <>
      <img src={item.image} alt={item.title} className="object-contain" />
      <span className="dropshadow"></span>
      <SectionWrapper
        mSt="relative h-full flex flex-col justify-between pb-10"
        mtn={true}
      >
        <div className="h-1/2 max-w-3xl flex flex-col gap-5 sm:gap-10 mt-20 self-start">
          <h3
            className="text-primary-color text-3xl sm:text-6xl leading-normal"
            data-swiper-parallax="-2000"
          >
            {item.title}
          </h3>
          <p
            className="text-white/50 max-w-xl leading-7 line-clamp-6 sm:line-clamp-none"
            data-swiper-parallax="-1000"
          >
            {item.description}
          </p>
        </div>
        <Link href='/products' className="bg-secondary-color rounded-xl py-2 px-4 w-fit self-end hover:bg-primary-color transition-colors duration-300">
          See The Collection
        </Link>
      </SectionWrapper>
    </>
  );
};

export default Slide;

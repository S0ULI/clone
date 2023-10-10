'use client';

import { useEffect, useState } from 'react';

import SectionWrapper from '../layout/SectionWrapper';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from './Logo';
import Navbar from './Navbar';
import Search from './search/Search';

const Header = () => {
  const [scroll, setScroll] = useState('');

  useEffect(() => {
    let lastScroll = Number;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setScroll('');
      }
      if (currentScroll > lastScroll && scroll !== 'scroll-down') {
        setScroll('scroll-down');
      }
      if (currentScroll < lastScroll && scroll === 'scroll-down') {
        setScroll('scroll-up');
      }

      lastScroll = currentScroll;
    });
  }, [scroll]);

  return (
    <header className={`bg-header-bg-color/90 backdrop-blur-md fixed top-0 left-0 w-full z-50 transition-all duration-300 origin-top ${scroll}`}>
      <SectionWrapper mSt={'py-4 flex flex-col gap-6'} mtn={true}>
        <div className="flex justify-between items-center gap-12">
          <Logo />
          <div className="flex gap-12 w-full sm:w-fit">
            <Navbar />
            <DarkModeSwitch />
          </div>
        </div>
        <Search />
      </SectionWrapper>
    </header>
  );
};

export default Header;

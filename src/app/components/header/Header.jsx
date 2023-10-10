'use client';

import { useEffect, useState } from 'react';

import SectionWrapper from '../layout/SectionWrapper';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from './Logo';
import Navbar from './Navbar';
import Search from './search/Search';
import MobileNavBarToggle from './MobileNavBarToggle';

const Header = () => {
  const [scroll, setScroll] = useState('');
  const [toggle, setToggle] = useState();

  useEffect(() => {
    let lastScroll = Number;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 120) {
        setScroll('');
        return;
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

  const toggleNav = (toggleBar) => {
    setToggle(toggleBar);
  };

  return (
    <header
      className={`bg-header-bg-color/90 backdrop-blur-md fixed top-0 left-0 w-full z-40 transition-all transition-height duration-300 origin-top ${
        !toggle ? scroll : ''
      } ${toggle ? 'h-screen' : ''}`}
    >
      <SectionWrapper mSt={'py-4 flex flex-col gap-4'} mtn={true}>
        <div className="flex justify-between items-center gap-12">
          <Logo />
          <div className="gap-12 w-fit hidden sm:flex">
            <Navbar />
            <DarkModeSwitch />
          </div>
          <div className="block sm:hidden">
            <MobileNavBarToggle toggleNav={toggleNav} />
          </div>
        </div>
        <Search />
        {toggle ? <Navbar /> : null}
      </SectionWrapper>
    </header>
  );
};

export default Header;

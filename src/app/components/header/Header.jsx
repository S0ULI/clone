'use client';

import { useEffect, useState, useContext } from 'react';

import CartContext from '@/app/store/cart-context';
import SectionWrapper from '../layout/SectionWrapper';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from './Logo';
import Navbar from './Navbar';
import Search from './search/Search';
import MobileNavBarToggle from './MobileNavBarToggle';
import { usePathname } from 'next/navigation';

const Header = ({loged}) => {
  const [scroll, setScroll] = useState('');
  const [toggle, setToggle] = useState();
  const cartCtx = useContext(CartContext);
  const cartBadge = cartCtx.totalProducts;

  const pathname = usePathname()

  useEffect(() => {
    setToggle(false)
  }, [pathname])
  
  const clickHandler = () => {
    if(!toggle) {
      setToggle(true)
    }
    else {
      setToggle(false)
    }
  }

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

  return (
    <header
      className={`bg-header-bg-color/90 backdrop-blur-md fixed top-0 left-0 w-full z-[99] transition ease duration-300 origin-top ${
        !toggle ? scroll : ''
      }`}
    >
      <SectionWrapper mSt={'py-4 flex flex-col'} mtn={true}>
        <div className="flex justify-between items-center gap-12">
          <Logo />
          <div className="gap-12 w-fit hidden sm:flex">
            <Navbar loged={loged} cartBadge={cartBadge} />
            <DarkModeSwitch />
          </div>
          <div className="block sm:hidden">
            <MobileNavBarToggle click={clickHandler}  toggle={toggle} />
          </div>
        </div>
        <div className='w-full pt-4 pb-1'>
        <Search />
        </div>
          <div className={`w-full flex flex-col gap-16 overflow-hidden ${toggle ? 'h-screen' : 'h-0'} transition-height ease duration-300`}>
            <Navbar loged={loged} cartBadge={cartBadge} />
          </div>
      </SectionWrapper>
    </header>
  );
};

export default Header;

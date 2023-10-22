'use client';

import { useSession } from 'next-auth/react';

import { BsArrowRight } from 'react-icons/bs';
import NavItem from './NavItem';
import DarkModeSwitch from './DarkModeSwitch';

const Navbar = ({ cartBadge }) => {
  const {status} = useSession()
  console.log('status', status);

  return (
    <>
      <nav className="w-full">
        <ul className="flex flex-col sm:flex-row sm:gap-6 text-lg sm:text-sm justify-between">
          <NavItem title="About" link="/about" Icon={BsArrowRight} />
          <NavItem title="Products" link="/products" Icon={BsArrowRight} />
          <NavItem title="Home" link="/" Icon={BsArrowRight} />
          {
            status === 'authenticated' && (
              <>
                <NavItem
                title="Cart"
                link="/cart"
                Icon={BsArrowRight}
                badge={cartBadge}
                />
                <NavItem title="Profile" link="/profile" Icon={BsArrowRight} />
              </>
            )
          }
          {
            status === 'unauthenticated' && (
              <NavItem
              title="Sign in"
              link="/signin"
              Icon={BsArrowRight}
              primary={true}
            />
            )
          }
        </ul>
      </nav>
        <div className="sm:hidden pl-3">
          <DarkModeSwitch />
        </div>
    </>
  );
};

export default Navbar;

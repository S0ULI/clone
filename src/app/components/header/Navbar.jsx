'use client'

import { UserButton } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';

import { BsArrowRight } from 'react-icons/bs';
import NavItem from './NavItem';
import DarkModeSwitch from './DarkModeSwitch';

const Navbar = ({ cartBadge }) => {
  const { isLoaded, userId } = useAuth()
  return (
    <>
      <nav className="w-full">
        <ul className="flex flex-col sm:flex-row sm:gap-6 text-lg sm:text-sm justify-between">
          <NavItem title="About" link="/about" Icon={BsArrowRight} />
          <NavItem title="Products" link="/products" Icon={BsArrowRight} />
          <NavItem title="Home" link="/" Icon={BsArrowRight} />
          { userId && isLoaded ? (
            <>
              <NavItem
                title="Cart"
                link="/cart"
                Icon={BsArrowRight}
                badge={cartBadge}
              />
              <NavItem title="Profile" link="/profile" Icon={BsArrowRight} />
            </>
          ) : (
            <NavItem title="Sign in" link="/sign-in" Icon={BsArrowRight} />
          )}
        </ul>
      </nav>
      <div className='flex justify-between items-center w-full px-3'>
      {userId && isLoaded && (
        <div>
          <UserButton afterSignOutUrl='/' userProfileMode='navigation' userProfileUrl='/profile' 
              appearance={{
                variables: {
                  borderRadius: '0.75rem',
                  colorBackground: '#1f1f1f',
                  colorDanger: '#ff0000',
                  colorText: '#f1f1f1',
                  colorPrimary: '#FF6517',
                },
                elements: {
                  avatarBox: 'w-12 h-12 sm:w-7 sm:h-7'
                }
              }} />
        </div>
      )}
      <div className="sm:hidden">
        <DarkModeSwitch />
      </div>
      </div>
    </>
  );
};

export default Navbar;

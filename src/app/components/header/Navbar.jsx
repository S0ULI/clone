import { UserButton } from '@clerk/nextjs';

import { BsArrowRight } from 'react-icons/bs';
import NavItem from './NavItem';
import DarkModeSwitch from './DarkModeSwitch';

const Navbar = ({ cartBadge, loged }) => {
  return (
    <>
      <nav className="w-full">
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-lg sm:text-sm justify-between">
          <NavItem title="About" link="/about" Icon={BsArrowRight} />
          <NavItem title="Products" link="/products" Icon={BsArrowRight} />
          <NavItem title="Home" link="/" Icon={BsArrowRight} />
          {loged ? (
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
      {loged ? (
        <div className="flex justify-center items-center">
          <UserButton />
        </div>
      ) : null}
      <div className="flex justify-start sm:hidden w-full ml-4">
        <DarkModeSwitch />
      </div>
    </>
  );
};

export default Navbar;

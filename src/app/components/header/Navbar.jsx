import {BsArrowRight} from 'react-icons/bs'
import NavItem from './NavItem';
import DarkModeSwitch from './DarkModeSwitch';

const Navbar = () => {
  return (
    <>
    <nav className='w-full'>
      <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-lg sm:text-sm justify-between">
        <NavItem title="About" link="/about" Icon={BsArrowRight}/>
        <NavItem title="Products" link="/products" Icon={BsArrowRight}/>
        <NavItem title="Home" link="/" Icon={BsArrowRight}/>
        <NavItem title="Cart" link="/cart" Icon={BsArrowRight}/>
      </ul>
    </nav>
    <div className='flex justify-start sm:hidden w-full'>
      <DarkModeSwitch/>
    </div>
    </>
  );
};

export default Navbar;

import NavItem from './NavItem';

// importing icons
import { BiHomeSmile } from 'react-icons/bi';
import { LiaInfoCircleSolid } from 'react-icons/lia';
import { RiProductHuntLine } from 'react-icons/ri';
import { BsCart } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className='w-full'>
      <ul className="flex gap-1 sm:gap-6 justify-between">
        <NavItem title="About" link="/about" Icon={LiaInfoCircleSolid} />
        <NavItem title="Products" link="/products" Icon={RiProductHuntLine} />
        <NavItem title="Home" link="/" Icon={BiHomeSmile} />
        <NavItem title="Cart" link="/cart" Icon={BsCart} />
      </ul>
    </nav>
  );
};

export default Navbar;

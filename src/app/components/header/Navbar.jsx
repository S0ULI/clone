import NavItem from './NavItem';

// importing icons
import { GoHomeFill } from 'react-icons/go';
import { TbInfoSquareRoundedFilled } from 'react-icons/tb';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <NavItem title="About" link="/about" Icon={TbInfoSquareRoundedFilled} />
        <NavItem title="Home" link="/" Icon={GoHomeFill} />
      </ul>
    </nav>
  );
};

export default Navbar;

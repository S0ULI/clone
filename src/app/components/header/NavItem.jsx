import Link from 'next/link';

const NavItem = ({ title, link, Icon }) => {
  // const activeClass = pathname && pathname === link && 'text-secondary-color';
  return (
    <Link
      href={link}
      className="w-full py-4 border-b border-white/10 sm:border-none text-nav-list-color dark:text-dark-nav-list-color hover:text-nav-list-color-hover dark:hover:text-dark-nav-list-color-hover transition-all duration-300 "
    >
      <div className="flex gap-4 items-center"><span>{title}</span><span className='block sm:hidden text-3xl'><Icon/></span></div>
      
    </Link>
  );
};

export default NavItem;

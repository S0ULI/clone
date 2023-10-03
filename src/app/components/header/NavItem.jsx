import Link from 'next/link';

const NavItem = ({ title, link, Icon }) => {

  // const activeClass = pathname && pathname === link && 'text-secondary-color';
  return (
    <Link
      href={link}
      className="text-nav-list-color dark:text-dark-nav-list-color hover:text-nav-list-color-hover dark:hover:text-dark-nav-list-color-hover transition-all duration-300"
    >
      <Icon className="text-2xl sm:hidden" />
      <span className="hidden sm:block">{title}</span>
    </Link>
  );
};

export default NavItem;

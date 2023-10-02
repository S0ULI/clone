import Link from 'next/link';

const NavItem = ({ title, link, Icon }) => {
  return (
    <Link
      href={link}
      className="text-nav-list-color hover:text-nav-list-color-hover dark:hover:text-dark-nav-list-color-hover transition-all duration-300 font-semibold"
    >
      <Icon className="text-2xl sm:hidden" />
      <span className="hidden sm:block text-lg">{title}</span>
    </Link>
  );
};

export default NavItem;

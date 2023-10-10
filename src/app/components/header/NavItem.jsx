import Link from 'next/link';

const NavItem = ({ title, link, Icon }) => {

  // const activeClass = pathname && pathname === link && 'text-secondary-color';
  return (
    <Link
      href={link}
      className="text-nav-list-color dark:text-dark-nav-list-color hover:text-nav-list-color-hover dark:hover:text-dark-nav-list-color-hover transition-all duration-300"
    >
      <span className="text-3xl sm:hidden border-b rounded-xl border-gray-50/10 block px-4 py-2">
        <Icon />
      </span>
      <span className="hidden sm:block text-sm">{title}</span>
    </Link>
  );
};

export default NavItem;

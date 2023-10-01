import Link from 'next/link';

const NavItem = ({ title, link, Icon }) => {
  return (
    <Link
      href={link}
      className="hover:text-accent-color transition-all duration-300"
    >
      <Icon className="text-2xl sm:hidden" />
      <span className="hidden sm:block text-lg">{title}</span>
    </Link>
  );
};

export default NavItem;

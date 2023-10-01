import Link from 'next/link';

const NavItem = ({ title, link, Icon }) => {
  return (
    <Link href={link} className="hover:text-amber-600">
      <Icon className="text-2xl sm:hidden" />
      <span className="hidden sm:block my-2 text-sm">{title}</span>
    </Link>
  );
};

export default NavItem;

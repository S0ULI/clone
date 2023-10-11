import Link from 'next/link';

const NavItem = ({ title, link, Icon, badge }) => {
  // const activeClass = pathname && pathname === link && 'text-secondary-color';
  return (
    <Link
      href={link}
      className="w-full py-4 border-b border-white/10 sm:border-none text-nav-list-color dark:text-dark-nav-list-color hover:text-nav-list-color-hover dark:hover:text-dark-nav-list-color-hover transition-all duration-300 "
    >
      <div className="flex gap-4 items-center w-full">
        <div
          className={`flex items-center gap-4 sm:gap-1 w-full ${badge ? 'justify-between' : ''}`}>
          <div className='flex gap-4'>
            <span className='whitespace-nowrap'>{title}</span>
            <span className="block sm:hidden text-3xl">
              <Icon />
            </span>
          </div>
          {badge ? (
            <span className="sm:text-xs text-md bg-dark-background-color-p text-nav-list-color-hover rounded-full block w-10 h-10 leading-10 sm:w-6 sm:h-6 sm:leading-6 text-center self-end">
              {badge}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default NavItem;

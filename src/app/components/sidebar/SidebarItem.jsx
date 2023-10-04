'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const SidebarItem = ({ title, params }) => {
  const searchParams = useSearchParams();
  const currentParams = searchParams.get('sort');

  const activeClass =
    currentParams && currentParams === params && 'text-primary-color';

  return (
    <div className="w-full p-2 rounded-lg transition-all duration-200 text-nav-list-color hover:text-text-color-dark  hover:bg-background-color-p dark:text-dark-nav-list-color dark:hover:text-dark-nav-list-color-hover dark:hover:bg-dark-background-color-p">
      <Link
        href={`products/?sort=${params}`}
        className={'w-full block text-center ' + activeClass}
      >
        {title}
      </Link>
    </div>
  );
};

export default SidebarItem;

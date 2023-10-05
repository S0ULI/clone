'use client';

import Link from 'next/link';

const PaginationItem = ({ pageNum, cPage, sort, title }) => {
  
  return (
    <Link
      href={`/products?sort=${sort}&page=${pageNum}`}
      className={`bg-background-color-c dark:bg-header-bg-color dark:hover:bg-cyan-900 hover:bg-secondary-color/70 hover:text-text-color-white w-8 text-center leading-8  rounded transition-all duration-300 ${cPage ? 'bg-primary-color dark:!bg-cyan-600' : '' }`}
    >
      {title || pageNum}
    </Link>
  );
};

export default PaginationItem;

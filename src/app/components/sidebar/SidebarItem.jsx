import Link from 'next/link';

const SidebarItem = ({ title, src, options, ...rest }) => {
  if (options) {
    return <span>there are options</span>;
  }

  return (
    <div className="w-full">
      <Link
        href={src}
        dir="rtl"
        className="w-full p-2 block rounded-md transition-all duration-200 text-nav-list-color hover:text-nav-list-color-hover hover:bg-background-color-p dark:text-dark-nav-list-color dark:hover:text-dark-nav-list-color-hover dark:hover:bg-bright-text-color"
      >
        {title}
      </Link>
    </div>
  );
};

export default SidebarItem;

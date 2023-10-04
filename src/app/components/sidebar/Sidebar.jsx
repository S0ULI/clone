import SidebarItem from './SidebarItem';

const SideBar = () => {
  return (
    <div className="flex bg-background-color-c dark:bg-black/90 w-full p-4 rounded-xl">
      <SidebarItem title="Popular" params="popular" />
      <SidebarItem title="Top Rated" params="top_rated" />
      <SidebarItem title="Up Coming" params="upcoming" />
    </div>
  );
};

export default SideBar;

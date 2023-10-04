import SidebarItem from './SidebarItem';

const SideBar = () => {
  return (
    <div className="flex flex-col items-end bg-background-color-c dark:bg-dark-background-color-c border border-accent-color w-72 p-4 rounded-lg">
      <SidebarItem title="Popular" params="popular" />
      <SidebarItem title="Top Rated" params="top_rated" />
      <SidebarItem title="Up Comming" params="upcoming" />
    </div>
  );
};

export default SideBar;

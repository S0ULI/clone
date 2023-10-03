import SidebarItem from './SidebarItem';

const SideBar = () => {
  return (
    <div className="flex flex-col items-end bg-background-color-c dark:bg-dark-background-color-c border border-accent-color w-72 p-4 rounded-lg">
      <SidebarItem title="Trending Right Now" params="fetchTrending" />
      <SidebarItem title="Top Rated" params="fetchTopRated" />
      <SidebarItem title="this is something else" params='something' />
    </div>
  );
};

export default SideBar;

import SidebarItem from './SidebarItem';

const SideBar = () => {
  return (
    <div className="flex flex-col items-end bg-background-color-c dark:bg-dark-background-color-c border border-accent-color w-72 p-4 rounded-lg">
      <SidebarItem title="this is for test" src="/" />
      <SidebarItem title="this is for test something else" src="/" />
      <SidebarItem title="this is something else" src="/" />
    </div>
  );
};

export default SideBar;

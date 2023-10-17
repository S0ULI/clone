import SidebarItem from './SidebarItem';

const SideBar = () => {
  return (
    <div className="flex bg-background-color-c dark:bg-black/90 w-full p-4 rounded-xl">
      <SidebarItem title="All" params="all" />
      <SidebarItem title="Shrits" params="shirt" />
      <SidebarItem title="Pants" params="pants" />
    </div>
  );
};

export default SideBar;

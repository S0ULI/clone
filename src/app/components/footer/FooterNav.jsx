import list from './FooterNavLIst';
import FooterNavItem from './FooterNavItem';

const FooterNav = () => {
  return (
    <>
      {list.map((listItem) => {
        return (
          <div
            key={listItem.header}
            className="flex flex-col gap-3 text-sm w-full sm:w-fit"
          >
                <FooterNavItem listItem={listItem} />
          </div>
        );
      })}
    </>
  );
};

export default FooterNav;

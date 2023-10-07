import SectionWrapper from '../layout/SectionWrapper';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from './Logo';
import Navbar from './Navbar';
import Search from './search/Search';

const Header = () => {
  return (
    <header className="bg-header-bg-color/90 backdrop-blur-md">
      <SectionWrapper mSt={'py-4 flex flex-col gap-6'} mtn={true}>
        <div className="flex justify-between items-center gap-12">
          <Logo />
          <div className="flex gap-12 w-full sm:w-fit">
            <Navbar />
            <DarkModeSwitch />
          </div>
        </div>
        <Search />
      </SectionWrapper>
    </header>
  );
};

export default Header;

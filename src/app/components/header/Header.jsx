import SectionWrapper from '../layout/SectionWrapper';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from './Logo';
import Navbar from './Navbar';
import Search from './search/Search';

const Header = () => {
  return (
    <header className="bg-header-bg-color/90 backdrop-blur-md">
      <SectionWrapper mSt={'flex justify-between items-center py-4'} mtn={true}>
        <div className='flex gap-8 items-center'>
          <Logo />
          <Search/>
        </div>
        <div className="flex gap-12">
          <Navbar />
          <DarkModeSwitch />
        </div>
      </SectionWrapper>
    </header>
  );
};

export default Header;

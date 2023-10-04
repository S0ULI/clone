import SectionWrapper from '../layout/SectionWrapper';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-header-bg-color/90 backdrop-blur-md">
      <SectionWrapper mSt={'flex justify-between items-center py-4'} mtn={true}>
        <Logo />
        <div className="flex gap-12">
          <Navbar />
          <DarkModeSwitch />
        </div>
      </SectionWrapper>
    </header>
  );
};

export default Header;

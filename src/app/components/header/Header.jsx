import SectionWrapper from '../SectionWrapper';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="border-b border-accent-color">
      <SectionWrapper styles={'flex justify-between items-center py-4'} mtn={true}>
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

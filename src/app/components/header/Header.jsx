import SectionWrapper from '../SectionWrapper';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-background-color-c dark:bg-dark-background-color-c">
      <SectionWrapper styles={'flex justify-between items-center'}>
        <Logo />
        <Navbar />
        <DarkModeSwitch />
      </SectionWrapper>
    </header>
  );
};

export default Header;

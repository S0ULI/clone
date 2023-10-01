import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-slate-600 px-8">
      <div className="flex justify-between items-center max-w-7xl m-auto py-4">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

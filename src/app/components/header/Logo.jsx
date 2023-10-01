import Image from 'next/image';
import Link from 'next/link';

import logo from '@/../public/logo.svg';

const Logo = () => {
  return (
    <Link href="/" className="block h-fit">
      <Image src={logo} alt="Logo" className="w-14" />
    </Link>
  );
};

export default Logo;

import Image from 'next/image';
import Link from 'next/link';

import logo from '@/../public/logo.svg';

const Logo = () => {
  return (
    <Link href="/" className="block h-fit">
      <Image src={logo} priority={true} alt="Logo" className="w-8" />
    </Link>
  );
};

export default Logo;

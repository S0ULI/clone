'use client';

import { useState } from 'react';
import Link from 'next/link';

const FooterNavItem = ({ listItem }) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <>
      <span
        className="text-[#1f1f1f] select-none cursor-pointer sm:cursor-default"
        onClick={toggleHandler}
      >
        {`${listItem.header} >`}
      </span>
      <ul className={`${!toggle && 'hidden'} sm:flex flex-col gap-1 `}>
        {listItem.items.map((item) => {
          return (
            <li key={item.title}>
              <Link href={item.href} className="text-[#935351] hover:underline ml-2 sm:ml-0">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FooterNavItem;

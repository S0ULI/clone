'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const themeHandler = () => {
    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <button
      onClick={themeHandler}
      className="text-2xl hover:text-accent-color transition-all duration-300"
    >
      {currentTheme === 'dark' ? <MdLightMode /> : <BsFillMoonFill />}
    </button>
  );
};

export default DarkModeSwitch;

'use client';
import { ThemeProvider } from 'next-themes';
import styled from 'styled-jsx';

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="bg-background-color-p dark:bg-dark-background-color-p min-h-screen transition-all duration-300">
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Providers;

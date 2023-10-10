'use client';

import { ThemeProvider } from 'next-themes';
import styled from 'styled-jsx';
import { CartContextProvider } from './store/cart-context';

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <CartContextProvider>
        <main className="pt-36 bg-background-color-p dark:bg-dark-background-color-p min-h-screen transition-all duration-300">
          {children}
        </main>
      </CartContextProvider>
    </ThemeProvider>
  );
};

export default Providers;

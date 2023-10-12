'use client';

import { ThemeProvider } from 'next-themes';
import styled from 'styled-jsx';
import { CartContextProvider } from './store/cart-context';

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <CartContextProvider>
        <main className="bg-background-color-p dark:bg-dark-background-color-p">
          <div className='pt-36 min-h-screen w-full flex flex-col'>
            {children}
          </div>
        </main>
      </CartContextProvider>
    </ThemeProvider>
  );
};

export default Providers;

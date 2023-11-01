import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import Providers from './providers';
import Header from './components/header/Header';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

import './globals.css';
import Footer from './components/footer/Footer';

// adding Font
const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins/Poppins-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

// Defining Metadata
export const metadata = {
  title: 'Shopper',
  description: 'shopper clothing e-commerce',
};

// JSX Function
export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en" suppressHydrationWarning>
        <body className={poppins.className + ' z-0'}>
          <Providers>
            <Header />
            {children}
            <Footer/>
            <Analytics/>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}

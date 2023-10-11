import localFont from 'next/font/local';
import Providers from './providers';
import Header from './components/header/Header';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';

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
  title: 'clone',
  description: 'something',
};

// JSX Function
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={poppins.className}>
          <Providers>
            <Header />
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}

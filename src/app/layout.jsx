import localFont from 'next/font/local';
import NextThemeProvider from './store/NextThemeProvider';
import Header from './components/header/Header';

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
  title: 'lone',
  description: 'something',
};

// JSX Function
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <NextThemeProvider>
          <Header />
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}

import NextThemeProvider from './store/NextThemeProvider';
import Header from './components/header/Header';

import './globals.css';
// import { Poppins } from 'next/font/google';

// Adding Font
// remember to add this class name to body className={poppins.className}
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800'],
// });

// Defining Metadata
export const metadata = {
  title: 'IMDb clone',
  description: 'finding new movies to watch',
};

// JSX Function
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextThemeProvider>
          <Header />
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}

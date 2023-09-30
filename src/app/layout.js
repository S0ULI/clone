import './styles/globals.css';
import { Poppins } from 'next/font/google';

// Adding Font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

// Defining Metadata
export const metadata = {
  title: 'IMDb clone',
  description: 'finding new movies to whatch',
};

// JSX Function
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

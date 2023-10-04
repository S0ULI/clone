/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary colors
        'primary-color': '#FF6517', // changed FF6517
        'secondary-color': '#FC8C54',
        'accent-color': '#00ffbf',

        // background colors
        'background-color-p': '#EAD8BF', // changed
        'background-color-c': '#f5f5f5',
        'foreground-color': '#000000',
        //dark mode
        'dark-background-color-p': '#002A33', // changed
        'dark-background-color-c': '#1f1f1f',
        'dark-foreground-color': '#ffffff',

        // text colors
        'light-gray-color': '#cccccc', // added
        'dark-gray-color': '#505050', // added
        'text-color-white': '#ffffff', // added
        'text-color-dark': '#000000', // added
        'nav-list-color': '#7a7a7a',
        'nav-list-color-hover': '#ffffff',
        'strong-text-color': '#1f1f1f',
        'bright-text-color': '#4d4d4d',
        // text colors --> Dark Mode
        'dark-nav-list-color': '#7a7a7a',
        'dark-nav-list-color-hover': '#ffffff',
        'dark-strong-text-color': 'f1f1f1',
        'dark-bright-text-color': '#ababab',

        // theme
        'header-bg-color': '#000000', // added 
        'shop-button-color': '#000000', // added

      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

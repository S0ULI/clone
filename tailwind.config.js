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
        'primary-color': '#ff7b00',
        'secondary-color': '#00e9f1',
        'accent-color': '#00ffbf',

        // background colors
        'background-color-p': '#ffffff',
        'background-color-c': '#f5f5f5',
        'foreground-color': '#000000',
        //dark mode
        'dark-background-color-p': '#0a0a0a',
        'dark-background-color-c': '#1f1f1f',
        'dark-foreground-color': '#ffffff',

        // text colors
        'text-color': '#000000',
        'nav-list-color': '#7a7a7a',
        'nav-list-color-hover': '#000000',
        'dark-nav-list-color-hover': '#ffffff',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

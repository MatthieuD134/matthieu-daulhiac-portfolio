/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg-gradient-start': '#393E46',
        'dark-bg': '#222831',

        'bg-gradient-start': '#ffecd2',
        bg: '#fcb69f',

        'dark-surface': '#3C495C',
        surface: '#FEFBF1',

        primary: '#00ADB5',
        secondary: '#8F0070',
      },
    },
  },
  plugins: [],
};

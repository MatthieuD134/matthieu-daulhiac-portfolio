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

        primary: '#4da8b4',
        secondary: '#b55b66',
      },
      keyframes: {
        slider: {
          '0%, 100%': { transform: 'translateY(0)', opacity: 0 },
          '60%': { transform: 'translateY(125%)', opacity: 1 },
          '80%': { transform: 'translateY(125%)', opacity: 0 },
        },
      },
      animation: {
        slider: 'slider 1.5s infinite',
      },
    },
  },
  plugins: [],
};

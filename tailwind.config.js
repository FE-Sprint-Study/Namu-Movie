/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: '#7aa7ff',
        black: '#141414',
      },
      width: {
        searchResultContainer: '77rem',
        searchBarWidth: '30rem',
      },
      height: {
        '50rem': '50rem',
      },
      dropShadow: {
        '3xl': [
          '0 10px 8px rgba(0, 0, 0, 0.3)',
          '0 4px 3px rgba(0, 0, 0, 0.3)',
        ],
      },
      minWidth: {
        60: '15rem',
      },
      animation: {
        blink: 'blink 5s infinite',
      },
      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.1' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

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
        modalContainerWidth: '80rem',
        modalFirstInnerWidth: '70rem',
        modalSecondInnerWidth: '70rem',
        '85%': '85%',
      },
      height: {
        '50rem': '50rem',
        modalContainerHeight: '45rem',
        modalFirstInnerHeight: '15rem',
        modalSecondInnerHeight: '20rem',
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
      fontSize: {
        '0.6rem': '0.6rem',
      },
      animation: {
        blink: 'blink 5s infinite',
        skeleton: 'skeleton 2s infinite ease-in-out',
      },
      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.1' },
          '100%': { opacity: '1' },
        },
        skeleton: {
          '0%': { backgroundColor: 'rgba(165, 165, 165, 0.1)' },
          '50%': { backgroundColor: 'rgba(165, 165, 165, 0.3)' },
          '100%': { backgroundColor: 'rgba(165, 165, 165, 0.1)' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

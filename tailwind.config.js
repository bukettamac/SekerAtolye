/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      colors: {
        rosewater: {
          50: '#fdf8f5',
          100: '#faede4',
          200: '#f3d6c4',
          300: '#eab89c',
          400: '#df9470',
          500: '#d27452',
          600: '#bd5a3c',
          700: '#9c4630',
          800: '#7c3a2d',
          900: '#65322a',
        },
        cocoa: {
          50: '#faf6f2',
          100: '#f2e8de',
          200: '#e2cdde',
          300: '#c9a87f',
          400: '#a87d51',
          500: '#8a6038',
          600: '#6e4a2c',
          700: '#553826',
          800: '#3f2a1e',
          900: '#2b1d15',
        },
        sage: {
          50: '#f5f6f1',
          100: '#e9ebe1',
          200: '#cfd6bf',
          300: '#aebc97',
          400: '#8da16f',
          500: '#708851',
          600: '#566c3f',
          700: '#445434',
          800: '#37432d',
          900: '#2e3827',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

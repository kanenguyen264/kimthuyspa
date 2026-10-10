/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // "gold" scale → herbal green accent (used for CTAs, links, highlights)
        gold: {
          50: '#fafdef',
          100: '#f3f6b3',
          200: '#abd745',
          300: '#78b100',
          400: '#2fa300',
          500: '#008700',
          600: '#165424',
          700: '#0f3d18',
          800: '#0a2a12',
          900: '#051a0b',
        },
        // "ivory" scale → cream / off-white backgrounds
        ivory: {
          50: '#fafdef',
          100: '#f3f6b3',
          200: '#e8edb0',
          300: '#d4dca0',
        },
        // "blush" scale → pale green tints (decorative blobs, light sections)
        blush: {
          50: '#fafef5',
          100: '#eef6dc',
          200: '#d9edb8',
          300: '#b8d885',
          400: '#9bc755',
          500: '#7eb535',
        },
        // "mocha" scale → dark olive/ink for dark sections, text
        mocha: {
          700: '#3a4a2a',
          800: '#244601',
          900: '#003106',
        },
        forest: {
          50: '#fafdef',
          100: '#eef6dc',
          200: '#abd745',
          300: '#78b100',
          400: '#2fa300',
          500: '#008700',
          600: '#165424',
          700: '#003106',
          800: '#0a2a12',
          900: '#051a0b',
        },
        'cream-mint': '#fafdef',
        'yellow-accent': '#ffd000',
        'yellow-accent-dark': '#e5b830',
        'muted-green': '#5e6b5e',
        'wood': '#8B6B3E',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
        'vietnamese': ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        'script': ['"Dancing Script"', 'cursive'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

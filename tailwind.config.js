/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#F5F4F0',
        'cream-dark': '#EEEAE3',
        ink: '#1A1A2A',
        'ink-soft': '#4A4A6A',
        surface: '#FFFFFF',
        'brand-dark': '#0C0C16',
        'brand-card': '#13131F',
        accent: '#5E4FD9',
        'accent-soft': '#9087F0',
        'accent-muted': '#C4BEFF',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

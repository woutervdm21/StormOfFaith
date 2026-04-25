/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void:  '#07070F',
        abyss: '#0C0C1D',
        deep:  '#111126',
        layer: '#181838',
        lift:  '#1F1F42',

        neon:        '#7C5CFC',
        'neon-light':'#A890FF',
        'neon-dim':  '#4D35C8',

        ember: '#FF8547',

        pearl:      '#F6F4FF',
        'pearl-mid':'#EAE8FF',

        ink:       '#0F0E24',
        'ink-mid': '#2C2A4A',
        'ink-soft':'#5A577C',

        snow: '#EEEEF8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

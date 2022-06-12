/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        gray: colors.neutral,
        primary: {
          50: '#faf5fe',
          100: '#f5ebfc',
          200: '#e9d5f9',
          300: '#dab4f3',
          400: '#c487eb',
          500: '#aa59dc',
          600: '#943ec5',
          700: '#772d9e',
          800: '#642682',
          900: '#55246b',
        },
        secondary: colors.rose,
      },
    },
  },
  plugins: [
    // Additional first-party plugins
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}

/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColor = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark'] //specific classes
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter UI', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' }
      },
      colors: {
        gray: defaultColor.trueGray,
        brand: defaultColor.rose,
        accent: defaultColor.purple
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.brand.500'),
              '&:hover': {
                color: theme('colors.brand.600')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // Additional first-party plugins
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
}

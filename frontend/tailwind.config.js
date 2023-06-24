/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#2A2B32',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.placeholder-pl-1': {
          '::placeholder': {
            paddingLeft: '0.25rem',
          },
        },
        '.placeholder-pl-2': {
          '::placeholder': {
            paddingLeft: '0.5rem',
          },
        },
        '.placeholder-pl-3': {
          '::placeholder': {
            paddingLeft: '0.75rem',
          },
        },
        '.placeholder-pl-4': {
          '::placeholder': {
            paddingLeft: '1rem',
          },
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          '50': '#FFFBEB',
          '100': '#FEF3C7',
          '500': '#78350F',
        },
        'slate': {
          '900': '#0F172A',
          '600': '#475569',
        },
        'green': {
          '600': '#18A661',
          '700': '#15803D',
        },
        'blue': {
          '700': '#0369A1',
        },
        'purple': {
          '600': '#A21CAF',
        },
        'yellow': {
          '400': '#FBBF24',
          '200': '#FDE68A',
        },
        'gray': {
          '200': '#E2E8F0',
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1', fontWeight: '800' }],
        'section': ['56px', { lineHeight: '1.1', fontWeight: '800' }],
        'stats': ['96px', { lineHeight: '1.1', fontWeight: '800' }],
      },
      borderRadius: {
        '4xl': '42px',
        '5xl': '66px',
      },
    },
  },
  plugins: [],
}


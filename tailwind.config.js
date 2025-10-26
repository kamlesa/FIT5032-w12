/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // ✅ all Vue/JS/TS files
  ],
  theme: {
    extend: {
      colors: {
        happyblue: '#72CAE3',
        happygreen: '#8BDEA2',
        photoblue: '#D0F5FF',
        calmblue: '#A9CEF4',
        whiteblue: '#EFFFFD',
        cadetblue: '#2B2D42',
        backblue: '#D4E6F7',
        cornblue: '#6D91CB',
        savoyblue: '#5A62BC',
        deftblue: '#2E3572',
      },
    },
    screens: {
      xs: '576px', // ≥576px
      sm: '768px', // ≥768px
      md: '992px', // ≥992px
      lg: '1200px', // ≥1200px
      xl: '1400px', // ≥1400px
    },
  },
  plugins: [],
}

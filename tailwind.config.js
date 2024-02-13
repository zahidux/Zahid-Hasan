/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#FFB606',
        'blue': '#4F5DE4',
        'dark': '#272727',
        'gray': '#707B8F',
        'dark-gray': '#686868'
      },
      boxShadow: {
        'custom': '0px 16px 48px rgba(39, 39, 39, 0.1)',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sm: '540px',
      md: '768px',
      lg: '1024px',
      xl: '1172px',
    },
  },
  plugins: [],
}


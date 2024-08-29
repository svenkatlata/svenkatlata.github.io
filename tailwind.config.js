/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-dark-blue': '#2b2c59',
        'theme-yellow': '#ffde59',
        'theme-red': '#da5d4d',
      },
    },
  },
  plugins: [],
}
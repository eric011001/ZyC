/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/controlPanel/**/*.{js,ts,jsx,tsx}",
    "./components/controlPanel/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      naranja: '#ed5520'
    }
  },
  plugins: [],
}

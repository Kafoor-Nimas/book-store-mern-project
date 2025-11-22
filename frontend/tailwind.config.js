/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFCE1A',     // Add your primary color
        'secondary': '#0D0842',   // Add your secondary color
        'blackBG': '#F3F3F3',     // Add any other custom colors you use
        'favorite': '#FF5841',    // Example colors - adjust to your needs
      },
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
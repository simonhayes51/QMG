/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00ff80",
          500: "#00ff80",
          600: "#06e374"
        },
        ink: "#0b0f14"
      }
    }
  },
  plugins: []
}

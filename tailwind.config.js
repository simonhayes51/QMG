/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-serif','Georgia','Times New Roman','serif'],
        sans: ['ui-sans-serif','system-ui','Inter','Segoe UI','Arial','sans-serif']
      },
      colors: {
        union: { blue:'#0A1F44', red:'#C8102E', cream:'#F5F1E8', white:'#FFFFFF' }
      },
      boxShadow: { card: "0 10px 25px rgba(10,31,68,.08)" }
    }
  },
  plugins: []
}

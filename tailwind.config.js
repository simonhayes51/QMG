/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)','ui-serif','Georgia','Times New Roman','serif'],
        sans: ['ui-sans-serif','system-ui','Inter','Segoe UI','Arial','sans-serif']
      },
      colors: {
        union: { blue:'#0A1F44', red:'#C8102E', cream:'#F5F1E8', white:'#FFFFFF' },
        ink: { 900:'#0A0F1A', 800:'#0F1730', 700:'#121a36' }
      },
      boxShadow: {
        glass: '0 10px 30px rgba(10,31,68,.25)',
        card:  '0 10px 25px rgba(10,31,68,.12)'
      },
      backgroundImage: {
        'hero-grad': 'radial-gradient(1200px 600px at 10% 0%, rgba(200,16,46,.30), transparent 60%), radial-gradient(1200px 600px at 90% 10%, rgba(10,31,68,.35), transparent 60%), radial-gradient(800px 400px at 50% 90%, rgba(255,255,255,.24), transparent 60%)',
        'dark-grad': 'radial-gradient(1200px 800px at 20% -10%, rgba(200,16,46,.22), transparent 60%), radial-gradient(800px 600px at 100% 50%, rgba(255,255,255,.07), transparent 60%)'
      }
    }
  },
  plugins: []
};

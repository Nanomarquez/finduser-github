/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 2s linear infinite',
        wiggledos: 'wiggledos 2s linear infinite',
      },
      boxShadow:{
        '5xl': "20px 20px 50px rgba(0,0,0,0.5)",
        "4xl" : "0 15px 50px rgba(0,0,0,0.35)"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translatex(120px)' },
          '50%': { transform: 'translatex(-30px)' },
        },
        wiggledos: {
          '0%, 100%': { transform: 'translatex(-120px)' },
          '50%': { transform: 'translatex(30px)' },
        }
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'newsletter-back': "url('../src/01 Newsletter Popup Template/Assets/Background.png')",
        'newsletter-pattern': "url('../src/01 Newsletter Popup Template/Assets/Pattern.png')",

        'gradie-bg': "url('../src/02 Gradie Sign Up Page/Assets/Background.png')",
      },
    },
  },
  plugins: [],
}
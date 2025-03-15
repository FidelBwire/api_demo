/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'extra-small': '456px',
        'small': '576px',
        'medium': '768px',
        'large': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      colors: {
        company_theme: "#FFA500",
        link_highlight: ""
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")]
}


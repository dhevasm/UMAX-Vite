/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        // add backgorund
        'bg-login': "url('./assets/bg-default.svg')",
      },
    },
  },
  plugins: [],
  
}
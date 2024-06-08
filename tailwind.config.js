/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:"600px",
      md:"900px",
      lg:"1200px"
    },
    extend: {
      colors:{
        "primary-500":"#20a960 ",
        "primary-800":"#0e5733",
        "primary-400":"#60cd8f",
      },
      fontFamily:{
        "bebas-neue":["Bebas Neue", "sans-serif"],
      }
    },
  },
  plugins: [],
}


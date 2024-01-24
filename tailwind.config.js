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
    extend: {},
  },
  plugins: [],
}


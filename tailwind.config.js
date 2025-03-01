/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        icterine: "#f7f052",
        orangeWheel: "#f28123",
        syracuseRedOrange: "#d34e24",
        cafeNoir: "#563f1b",
        myrtleGreen: "#38726c",
      },
    },
  },
  plugins: [],
};

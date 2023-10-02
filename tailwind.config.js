/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans"],
        sora: ["Sora"],
      },
      colors: {
        primaryMain: "#120B48",
        primaryText: "#616163",
        primaryHeadings: "#141414",
      },
    },
  },
  plugins: [],
};

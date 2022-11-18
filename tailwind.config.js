/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        content: "1105px",
      },
    },
    fontFamily: {
      secular: ['"Secular One"', "sans"],
    },
  },
  plugins: [],
};

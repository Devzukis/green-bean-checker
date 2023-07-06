/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#C03440",
        black: "#333333",
        placeholder: "rgba(51, 51, 51, 0.25)",
        white: "#fff",
        offWhite: "#EFEFEF",
        gray: "#d8d8d8",
        orange: "#c35e2d",
        green: "#5abdb3",
      },
      fontFamily: {
        helvetica: ["Helvetica Neue"],
      },
    },
    plugins: [],
  },
};

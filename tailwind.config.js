/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: {
        100: "#F6F8FF",
        500: "#697C9A",
      },
      blue: {
        500: "#0079FF",
        600: "#4B6A9B",
        800: "#1E2A47",
      },
      black: {
        800: "#2B3442",
        900: "#141D2F",
      },
      red: "#F74646",
    },
  },
  plugins: [],
};

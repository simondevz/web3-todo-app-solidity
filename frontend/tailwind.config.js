/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#363DE7",
      secondary: "#9196F2",
      milky_bg: "#D9D9D9",
      white: "#EDEDFD",
      text: "#535464",
    },
    fontFamily: {
      salsa: ["Salsa", "sans-serif"],
      patrick: ["Patrick", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

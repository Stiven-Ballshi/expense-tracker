/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      background: "#d2b5fc",
      red: "#ff3b3b",
      button: "#8736f6",
      orange: "#ff6c39",
      lightOrangeBg: "#ffefeb",
      green: "#45c949",
      lightPurpleBg: "#f9f5ff",
      darkerPurpleBg: "#f2ebfd",
      yellow: "#ffc82c",
      grayDark: "#273444",
      gray: "#8492a6",
      grayLight: "#d3dce6",
      textLight: "#999aaf",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

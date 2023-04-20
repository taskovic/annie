/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-light": "#cbebeb",
        "green-dark": "#46c1b5",
        "independence": "#6F644C",
        "gray-200": "#f7f9fd",
        "gray-400": "#e9edf5",
        "gray-600": "#e1e5eB",
        "gray-700": "#dadee5"
      },
      fontFamily: {
        CarmenSemiBold: ["Carmen-Semi-Bold", "sans"],
        CarmenBold: ["Carmen-Bold", "sans"],
        CarmenExtraBold: ["Carmen-Extra-Bold", "sans"],
        CarmenHeavy: ["Carmen-Heavy", "sans"],
        CarmenLight: ["Carmen-Light", "sans"],
        CarmenMedium: ["Carmen-Medium", "sans"],
        CarmenRegular: ["Carmen-Regular", "sans"],
        CarmenThin: ["Carmen-Thin", "sans"],
        CarmenUltraLight: ["Carmen-Ultra-Light", "sans"]
      },
      fontSize: {}
    },
  },
  plugins: []
}


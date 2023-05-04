/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#6699FF",
        "green-light": "#cbebeb",
        "green-dark": "#46c1b5",
        "independence": "#6F644C",
        "gray-200": "#f7f9fd",
        "gray-400": "#e9edf5",
        "gray-600": "#e1e5eB",
        "gray-700": "#dadee5",
        "malibu": "#6699FF",
        "daintree": "#00283C",
        "mystic": "#dee4ea",
        "juniper": "#668993",
        "tiber": "#8195a1",
        "elephant": "#0C273A"
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
      fontSize: {
        "sm": ["12px"],
        "md": ["16px"],
        "lg": ["16px"],
        "20": ["1.25rem"],
      },
      backgroundColor: {
        "link-water": "#F7F9FD",
        "malibu": "#6699FF",
        "san-marino": "#4263A8",
        "tradewind": "#6ABEB5"
      },
      borderColor: {
        "athens-gray": "#E1E5EB",
        "malibu": "#6699FF",
      },
      borderWidth: {
        "1": "1px"
      },
    },
    
  },
  plugins: []
}


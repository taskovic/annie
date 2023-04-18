/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "independence": "#6F644C",
        "gray-200": "#f7f9fd",
        "gray-400": "#e9edf5",
        "gray-600": "#e1e5eB",
        "gray-700": "#dadee5"
      },
      fontSize: {}
    },
  },
  plugins: []
}


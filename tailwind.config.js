/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blacky: "#132238",
        mouve: "#a53dff",
        mygray: "#556070",
      },
      borderRadius: {
        "rounded-1/2": "border-radius:50%;",
      },
    },
  },
  plugins: [],
};

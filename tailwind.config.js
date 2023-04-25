/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "788px",
        lg: "900px",
        xl: "1140px",
        // => @media (min-width: 992px) { ... }
      },
      fontFamily: {
        Jost: ["Jost"],
      },
    },
  },
  plugins: [require("daisyui")],
};

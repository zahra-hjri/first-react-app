/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jost: ["Jost"],
      },
    },
  },
  plugins: [require("daisyui")],
};

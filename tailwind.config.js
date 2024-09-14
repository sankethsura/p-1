/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/UI/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  theme: {
    colors: {
      lightGray: "#4E4E4E",
      lightPurple: "#6D5DE7",
      lightPurple2: "#6966A4",
      grayPurple: "#A2A0BC",
      darkPurple: "#5e4ce4",
      darkGray: "#5C6F7C",
      grayText: "#4D4B5C",
      textPrimary: "#14102F",
      textSecondary: "#5A5878",
      purpleBorder: "#C7B4FF",
      textDark: "#343244",
      textDark2: "#5A5878",
      textDark3: "#6B6B74",
      greenText: "#1D7656",
      redText: "#F04261",

      brownPrimary: "#3C3D37",
      ...colors,
    },
  },
  plugins: [],
};

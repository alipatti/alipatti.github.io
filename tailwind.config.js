/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  colors: {
    "gray": colors.stone,
    "white": colors.white,
    "lightgreen": "#618081",
    "darkgreen": "#273940",
    "blue": "#006d9a",
    "brown": "#54413e",
  }
};

export const plugins = [require("tailwind-children")];

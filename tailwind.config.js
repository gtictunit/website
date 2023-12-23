/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gt_purple: "#3d0052",
        gt_yellow: "yellow",
        gt_red: "red",
      },
      boxShadow: {
        main: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
        josefin_sans: ["var(--font-josefin)"],
        ubuntu: ["var(--font-ubuntu)"],
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
};

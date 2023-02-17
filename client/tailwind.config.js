/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#029e9d",
          secondary: "#fdc703",
          accent: "#3a78c9",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        dark: {
          primary: "#3ABFF8",
          secondary: "#828DF8",
          accent: "#F471B5",
          neutral: "#1D283A",
          "base-100": "#0b1120",
          info: "#0CA6E9",
          success: "#2BD4BD",
          warning: "#F4C152",
          error: "#FB6F84",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

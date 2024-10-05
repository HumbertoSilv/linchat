import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background": "#121214",
        "elements": "#202024",
        "text": "#C4C4CC",
        "title": "#E1E1E6",
        "white": "#FFFFFF",
        "principal": "#dab1f7",
        "light": "#d1a3f4",
      },
      fontFamily: {
        sans: [
          '"Roboto"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;

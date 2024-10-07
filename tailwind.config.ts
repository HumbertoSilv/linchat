import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background": "#121214",
        "elements": "#202024",
        "text": "#ababab",
        "title": "#C4C4CC",
        "white": "#FFFFFF",
        "primary": "#8047F8",
        "secondary": "#4B2995",
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

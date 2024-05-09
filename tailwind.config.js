/** @type {import('tailwindcss').Config} */

import plugin from "@xpd/tailwind-3dtransforms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          500: "#B78C00",
        },
        black: {
          500: "#404040"
        },
        grey: {
          300: "#232323",
          200: "#FAFAFA",
          100: "#D8D8D8",
        },
      },
      fontFamily: {
        notoSerif: ["Noto Serif TC", "serif"],
        notoSans: ["Noto Sans TC", "serif"],
      },
      fontSize: {
        sm: ["12px", "24px"],
        base: ["15px", "24px"], //
        md: ["16px", "24px"],
        lg: ["18px", "28px"],
      },
      dropShadow: {
        'custom': '0 0 15px rgba(250, 250, 250, 0.15)'
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotateY(0deg)" },
          "40%, 50%, 60%": { transform: "rotateY(5deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1.5s ease 0s forwards",
      },
    },
  },
  plugins: [plugin],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "violet-m": "#3a3053",
        "teal-btn":  "#2bd1d1",
        "blue-d": "#39363e",
        "background": "#f0f1f6",
        "bg-svg": "#3a3053"
      },
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out',
    },
    keyframes: {
      wiggle: {
        "0%": {opacity : '0', transform: 'translateY(-50px)'},
        "50%": {transform:'rotateY(-15deg)'}
      }
    },
    screens:{
      'table':'570px',
      'lp': '750px',
      'desk': "1000px"
    }
  },
};
export default config;

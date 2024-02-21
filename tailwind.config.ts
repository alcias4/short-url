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
        "blue-d": "#39363e"
      },
      animation: {
        "apa": "pulse 1s linear"
      }
    },
  },
};
export default config;

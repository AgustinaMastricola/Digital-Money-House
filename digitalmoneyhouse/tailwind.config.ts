import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "total-primary":"#0AEB8C",
      "total-black": "#151817",
      "light-primary":"#D2FFEC",
      "light-black":"#052A2D",
      "total-white":"#FFFFFF",
      "total-gray":"#7F7F7F",
      "medium-gray":"#A6A5A7",
      "light-gray":"CECECE",
      "error-text":"#E91010",
    },
    fontSize:{
      
    },
    extend: {
      fontFamily: {
        "opensans":['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;

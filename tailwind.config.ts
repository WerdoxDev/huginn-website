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
            background: "#303030",
            primary: "#ADDC6C",
            secondary: "#262627",
            text: "#FDF4D3",
            accent1: "#FFC25D",
            link: "#ADDC6CE6",
            error: "#F43F5E",
         },
      },
      fontFamily: {
         poppins: ["Poppins", "sans-serif"],
      },
   },
   plugins: [],
};
export default config;

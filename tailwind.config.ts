import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'verde-escuro': '#145C52',
        'verde-vibrante': '#29A073',
        'cinza-escuro': '#333333',
        'cinza-gelo': '#F8F9FA',
        'accent': '#F9B233',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-verde": "linear-gradient(135deg, #29A073, #145C52)",
        "gradient-hero": "linear-gradient(135deg, #F8F9FA, #ffffff)",
      },
    },
  },
  plugins: [],
};
export default config; 
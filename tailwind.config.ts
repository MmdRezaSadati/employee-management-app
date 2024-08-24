import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4361ee",
          light: "#eaf1ff",
          "dark-light": "rgba(67,97,238,.15)",
        },
        dark: {
            DEFAULT: '#3b3f5c',
            light: '#eaeaec',
            'dark-light': 'rgba(59,63,92,.15)',
        },
        black: {
            DEFAULT: '#0e1726',
            light: '#e3e4eb',
            'dark-light': 'rgba(14,23,38,.15)',
        },
        white: {
            DEFAULT: '#ffffff',
            light: '#e0e6ed',
            dark: '#888ea8',
        },
      },
    },
  },
  plugins: [],
};
export default config;

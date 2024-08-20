import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        'sm': '1px 1px 1px rgba(0, 0, 0, 0.1)',
        'DEFAULT': '2px 2px 2px rgba(0, 0, 0, 0.2)',
        'md': '3px 3px 3px rgba(0, 0, 0, 0.3)',
        'lg': '4px 4px 4px rgba(0, 0, 0, 0.4)',
        'xl': '5px 5px 5px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    function({ addUtilities }: PluginAPI) {
      addUtilities({
        '.text-shadow-sm': {
          textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 3px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 4px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-xl': {
          textShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
        },
      });
    },
  ],
};

export default config;

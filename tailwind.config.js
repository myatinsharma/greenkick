/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        platinum: "#e6e8e6",
        primary: "#0066ff",
        "slate-gray": "#335c67",
        vanilla: "#fff3b0",
        "hunyadi-yellow": "#e09f3e",
        auburn: "#9a2a2b",
        "chocolate-cosmos": "#540B0E",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lemonade"],
  },
};

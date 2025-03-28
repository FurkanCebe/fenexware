import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#02b0b0",
        primaryBlack: "#082020",
        primaryGrey: "#3d5454",
        lightBg: "#E6F8F8",
        lightBg2: "#D1F2F2",
        lightBg3: "#BFEAEA",
        lightBg4: "#AEE2E2",
        darkBg: "#131414",
        darkBg2: "#052222",
        darkBg3: "#0A2E2E",
        darkBg4: "#103838",
        fasho1: "#8CCC97",
        fasho2: "#BADA55",
        fasho3: "#222323",
        fasho4: "#7ED1E4",
        fasho5: "#0ad2ff",
      },
    },
  },
  plugins: [],
} satisfies Config;

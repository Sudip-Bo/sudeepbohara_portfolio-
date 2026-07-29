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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        "surface-1": "var(--surface-1)",
        "surface-2": "var(--surface-2)",
        "frosted-glass": "var(--frosted-glass)",
        "border-subdued": "var(--border-subdued)",
        "border-highlight": "var(--border-highlight)",
        "accent-indigo": "var(--accent-indigo)",
        "accent-cyan": "var(--accent-cyan)",
        "accent-emerald": "var(--accent-emerald)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        "display-tight": "-0.035em",
      },
    },
  },
  plugins: [],
};
export default config;

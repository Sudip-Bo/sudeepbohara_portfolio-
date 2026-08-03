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
        background: "var(--bg-canvas)",
        foreground: "var(--text-primary)",
        primary: "var(--text-primary)",
        "primary-foreground": "var(--text-inverse)",
        "surface-1": "var(--bg-surface-1)",
        "surface-2": "var(--bg-surface-2)",
        "surface-3": "var(--bg-surface-3)",
        "frosted-glass": "var(--bg-glass)",
        "border-subdued": "var(--border-subdued)",
        "border-highlight": "var(--border-highlight)",
        "accent-indigo": "var(--accent-indigo)",
        "accent-cyan": "var(--accent-cyan)",
        "accent-emerald": "var(--accent-emerald)",
        "functional-warning": "var(--functional-warning)",
        "functional-error": "var(--functional-error)",
        muted: "var(--text-secondary)",
        "muted-foreground": "var(--text-muted)",
        card: "var(--bg-surface-1)",
        "card-foreground": "var(--text-primary)",
        border: "var(--border-subdued)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Geist Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Geist Mono", "monospace"],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        'h1': ['56px', { lineHeight: '1.10', letterSpacing: '-0.030em' }],
        'h2': ['40px', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        'h3': ['28px', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'h4': ['20px', { lineHeight: '1.30', letterSpacing: '-0.010em' }],
      },
      letterSpacing: {
        "display-tight": "-0.035em",
      },
      boxShadow: {
        'ambient': 'var(--shadow-ambient)',
        'glow-indigo': 'var(--glow-indigo)',
      },
      perspective: {
        '1000': '1000px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
export default config;

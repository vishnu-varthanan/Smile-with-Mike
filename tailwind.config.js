/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        inkSoft: "var(--ink-soft)",
        brandRed: "var(--red)",
        brandPurple: "var(--purple)",
        line: "var(--line)",
        card: "var(--card)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(-2deg)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-4deg)" },
          "75%": { transform: "rotate(4deg)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(22px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 4.5s ease-in-out infinite",
        wave: "wave 2.2s ease-in-out infinite",
        fadeUp: "fadeUp 0.9s cubic-bezier(.16,1,.3,1) forwards",
      },
    },
  },
  plugins: [],
};

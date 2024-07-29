/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
        JetBrains: ["JetBrains Mono", "monospace"],
        titli: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "rgb(var(--color-main) / <alpha-value> )",
        primary: "rgb(var(--color-primary) / <alpha-value> )",
      },
      textColor: {
        base: "rgb(var(--color-text-base) / <alpha-value> )",
      },
    },
  },
  plugins: [],
};

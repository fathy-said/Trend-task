/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color_01: "#344054",
        color_02: "#F9FAFB",
        color_03: "#EAECF0",
        color_04: "#101828",
        color_05: "#ffffff",
        color_06: "#D0D5DD",
        color_07: "#667085",
        color_08: "#f2f4f7",
        color_10: "#067647",
        color_11: "#ecfdf3",
        color_12: "#6941C6",
        color_13: "#f9f9fb",
      },
    },

    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};

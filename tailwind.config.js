/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38BDF8", // Sky Blue
        navbar: "#000000",
      },
      boxShadow: {
        floating: "0 20px 40px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        uniassistant: {
          primary: "#38BDF8",
          secondary: "#000000",
          accent: "#000000",
          neutral: "#0F172A",
          "base-100": "#FFFFFF",
          info: "#38BDF8",
          success: "#22C55E",
          warning: "#FACC15",
          error: "#EF4444",
        },
      },
    ],
  },
};

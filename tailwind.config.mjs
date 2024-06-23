/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["SahelFD", "sans-serif"],
        body: ["Vazirmatn", "sans-serif"],
      },
      fontSize: {
        "heading-0": "4rem",
        "heading-1": "3rem",
        "heading-2": "2.5rem",
        "heading-3": "2rem",
        "body-big": "2rem",
        "body-medium": "1.5rem",
        "body-small": "1rem",
      },
      boxShadow: { image: "0px 0px 16px 8px rgba(0,0,0,0.3)" },
      colors: {
        neutral: {
          "dark-1": "#1f292e",
          "dark-2": "#33444c",
          "light-2": "#d5dadd",
          "light-1": "#ECF4F9",
        },
        primary: {
          light: "#d2fadf",
          DEFAULT: "#00c570",
          dark: "#094327",
        },
        secondary: {
          light: "#ccf6ff",
          DEFAULT: "#00c8f4",
          dark: "#003f4d",
        },
        tertiary: {
          light: "#f4e7d7",
          DEFAULT: "#deb887",
          dark: "#3c2910",
        },
      },
    },
  },
  plugins: [],
}

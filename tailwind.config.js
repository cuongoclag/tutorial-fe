/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "var(--main-bg)",
        "soft-bg": "var(--soft-bg)",
        "main-color": "var(--main-color)",
        "second-color": "var(--second-color)",
      },
      fontFamily: {
        'sans': ['Inter, sans-serif']
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}


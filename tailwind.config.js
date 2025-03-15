/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}", // يشمل كل الملفات داخل src
    ],
    theme: {
      extend: {
        colors: {
          primary: "#4F46E5", // لون أساسي مخصص
          secondary: "#EC4899",
        },
      },
    },
    plugins: [],
  };
  
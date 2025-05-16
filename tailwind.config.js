// FILE: tailwind.config.js (root of your project)
// Description: Tailwind CSS configuration file.
export default {
  content: [
    "./index.html",
    "./src/**/\*.{js,ts,jsx,tsx}", // Ensure it scans your src files
  ],
  theme: {
    extend: {
      // You can extend Tailwind's default theme here
      // For example, define your primary and accent colors for easier use
      colors: {
        'hazen-red': '#6A040F', // Example based on placeholder logo
        'hazen-gold': '#FFD700', // Example, adjust as needed
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example: Set Inter as default sans-serif font
      },
    },
  },
  plugins: [],
}
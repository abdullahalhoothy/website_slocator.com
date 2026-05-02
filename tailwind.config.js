/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#046bd2',   // لون الأزرار الأساسي
          secondary: '#045cb4', // لون الأزرار عند المرور (Hover)
          dark: '#1e293b',      // لون العناوين الغامق
          text: '#334155',      // لون النصوص
          light: '#F0F5FA',     // لون الخلفيات الفاتحة
        }
      },
      fontFamily: {
        sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
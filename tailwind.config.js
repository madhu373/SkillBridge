/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#25234A',
          lavender: '#A99BEF',
          lightLavender: '#DCD5FF',
          bg: '#F8F7FC',
          white: '#FFFFFF',
          textPrimary: '#29283A',
          textSecondary: '#77758B',
          success: '#36A879',
          error: '#E56B78',
          border: '#EAE8F2',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(37, 35, 74, 0.05), 0 2px 6px -1px rgba(37, 35, 74, 0.03)',
        'soft-hover': '0 12px 30px -4px rgba(37, 35, 74, 0.12), 0 4px 10px -2px rgba(37, 35, 74, 0.05)',
        'card': '0 1px 3px rgba(37, 35, 74, 0.05), 0 10px 25px -5px rgba(37, 35, 74, 0.04)',
        'nav': '0 2px 15px rgba(37, 35, 74, 0.04)',
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores de categorías
        'cat-personas': '#FF6B9D',
        'cat-comida': '#FFA726',
        'cat-actividades': '#66BB6A',
        'cat-emociones': '#AB47BC',
        'cat-necesidades': '#42A5F5',
        'cat-rutinas': '#26C6DA',
        
        // Colores principales
        primary: {
          50: '#EEF6FF',
          100: '#D9EBFF',
          200: '#BCDDFF',
          300: '#8EC9FF',
          400: '#59A9FF',
          500: '#4A90E2', // Principal
          600: '#2463C7',
          700: '#1D4FA1',
          800: '#1E4285',
          900: '#1E3A6E',
        },
        secondary: {
          500: '#7C4DFF',
        },
      },
      
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      
      boxShadow: {
        'sm': '0 2px 8px rgba(0,0,0,0.06)',
        'md': '0 4px 16px rgba(0,0,0,0.08)',
        'lg': '0 8px 24px rgba(0,0,0,0.12)',
        'xl': '0 12px 32px rgba(0,0,0,0.15)',
      },
      
      borderRadius: {
        'sm': '12px',
        'md': '16px',
        'lg': '20px',
        'xl': '24px',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.4s ease',
        'slide-up': 'slideUp 0.3s ease',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255,215,0,0.5)' },
          '50%': { boxShadow: '0 0 25px rgba(255,215,0,0.8)' },
        },
      },
    },
  },
  plugins: [],
};

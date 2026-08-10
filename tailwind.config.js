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
        background: '#050505',
        surface: {
          DEFAULT: '#090909',
          elevated: '#111111',
          card: 'rgba(17, 17, 17, 0.75)',
          glass: 'rgba(15, 15, 15, 0.65)',
        },
        gold: {
          DEFAULT: '#D4AF37', // Luxury Gold
          metallic: '#C9A227', // Metallic Gold
          champagne: '#F5D77A', // Soft Champagne
          dark: '#9A7B1C',
          light: '#FDF3D0',
          glow: 'rgba(212, 175, 55, 0.25)',
        },
        charcoal: {
          50: '#2A2A2A',
          100: '#222222',
          200: '#1A1A1A',
          300: '#141414',
          400: '#111111',
          500: '#0E0E0E',
          600: '#090909',
          900: '#050505',
        },
        lightgray: '#D9D9D9',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Cinzel"', '"Syne"', 'Playfair Display', 'serif'],
        editorial: ['"Syne"', '"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5D77A 0%, #D4AF37 50%, #C9A227 100%)',
        'gold-gradient-subtle': 'linear-gradient(135deg, rgba(245, 215, 122, 0.15) 0%, rgba(212, 175, 55, 0.08) 50%, rgba(201, 162, 39, 0.02) 100%)',
        'gold-radial': 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        'dark-gradient': 'linear-gradient(180deg, #050505 0%, #090909 50%, #050505 100%)',
        'card-shine': 'linear-gradient(105deg, transparent 40%, rgba(245, 215, 122, 0.15) 45%, rgba(212, 175, 55, 0.25) 50%, rgba(245, 215, 122, 0.15) 55%, transparent 60%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(30px)' },
          '50%': { opacity: '0.8', filter: 'blur(45px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 0 30px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 0 50px rgba(212, 175, 55, 0.35)',
        'gold-inner': 'inset 0 0 20px rgba(212, 175, 55, 0.15)',
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(212, 175, 55, 0.2)',
      },
    },
  },
  plugins: [],
}

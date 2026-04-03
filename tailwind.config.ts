import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // The Spot Catering Brand Colors
        spot: {
          orange: '#FAAA44',        // Primary - CTAs, accents
          'orange-hover': '#E89A35', // Orange hover state
          navy: '#262262',           // Deep navy - headers, text
          'navy-light': '#3A3A8C',   // Navy hover/lighter
          purple: '#9E1F63',         // Secondary accent
          'purple-hover': '#B82573', // Purple hover
          teal: '#8CBEC0',           // Light accents
          'blue-gray': '#879FAF',    // Subtle backgrounds
          'orange-red': '#D34F1D',   // Warm highlights
        },
        // Semantic colors
        primary: '#FAAA44',
        'primary-hover': '#E89A35',
        secondary: '#262262',
        accent: '#9E1F63',
        background: '#FFFFFF',
        'background-alt': '#F5F5F5',
        'text-dark': '#262262',
        'text-light': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'spot-gradient': 'linear-gradient(135deg, #262262 0%, #9E1F63 50%, #FAAA44 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

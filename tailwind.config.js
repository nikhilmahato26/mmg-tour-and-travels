/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#174D38',
          deep: '#103B2B',
          dark: '#0C2D21',
          light: '#246B50',
          accent: '#1E6349',
        },
        mountain: {
          teal: '#4D8879',
          light: '#6FA497',
          dark: '#38665B',
        },
        cream: {
          DEFAULT: '#FAF8F1',
          light: '#FFFDF9',
          warm: '#F4EFE6',
        },
        sage: {
          light: '#E9F0E9',
          subtle: '#F2F6F2',
          border: '#D3E1D4',
        },
        darktext: {
          DEFAULT: '#25352E',
          muted: '#52665E',
          soft: '#778D84',
        },
        gold: {
          accent: '#D4AF37',
          light: '#F3E5AB',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(23, 77, 56, 0.08)',
        'card': '0 10px 30px -4px rgba(23, 77, 56, 0.1)',
        'hover': '0 20px 40px -6px rgba(23, 77, 56, 0.16)',
        'glow': '0 0 25px rgba(77, 136, 121, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}


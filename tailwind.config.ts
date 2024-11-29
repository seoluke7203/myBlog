import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 45s linear infinite',
        'appear': 'appear 0.2s ease-in-out',
        'typing': 'typing 2s steps(15) alternate, blink 2s infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to : { transform: 'translateX(-100%)' },
        },
        'appear': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'typing': {
          '0%': { width: '0%',
            visibility: 'hidden' },
          '100%': { width: '100%' },
        },
        'blink': {
          '50%': {
            borderColor: 'transparent'
          },
          '100%': {
            borderColor: 'white'
          }
        }
      },
    }
  },
  daisyui: {
    themes: [ 'nord' ],
  },

  plugins: [ daisyui ],
} satisfies Config

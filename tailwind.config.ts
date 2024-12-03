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
      fontFamily: {
        interop: 'var(--font-interop)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 45s linear infinite',
        'appear': 'appear 0.2s ease-in-out',
        'typing': 'typing 2s steps(10) alternate, blink 2s infinite'
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
          '100%': { width: '60%' },
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
    themes: [
      {
        mytheme: {
          'primary': '#BDEBF9',
          'secondary': '#48B4D8',
          'accent': '#05547D',
          'base-100': '#ffffff',
          'base-200': '#E4E8EF'
        }
      }
    ]
  },
  plugins: [ daisyui ],
} satisfies Config

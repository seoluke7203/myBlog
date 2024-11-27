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
      },
    }
  },
  daisyui: {
    themes: [ 'cyberpunk', 'light', 'dark', 'coffee', 'lofi', 'nord' ],
  },

  plugins: [ daisyui ],
} satisfies Config

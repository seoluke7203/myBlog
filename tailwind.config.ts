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
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to : { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  daisyui: {
    themes: [ 'light', 'dark', 'cyberpunk', 'coffee', 'lofi' ],
  },

  plugins: [ daisyui ],
} satisfies Config

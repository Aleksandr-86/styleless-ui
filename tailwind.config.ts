import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,vue,ts}'],
  theme: {
    extend: {
      colors: {
        red: '#ff0000',
      },
    },
  },
} satisfies Config

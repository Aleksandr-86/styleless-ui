import defaultTheme from 'tailwindcss/defaultTheme'

import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,vue,ts}'],
  theme: {
    // screens: {
    //   xs: '475px',
    // },
    // fontFamily: {
    //   sans: ['Roboto', 'sans-serif'],
    //   serif: ['Roboto Condensed', 'serif'],
    // },
    // backgroundSize: {
    //   auto: 'auto',
    //   cover: 'cover',
    //   contain: 'contain',
    //   '17x17': '17px 17px',
    // },
    extend: {
      size: {
        1.25: '0.3125rem', // 5px
        1.75: '0.4375rem', // 7px
        3.75: '0.9375rem', // 15px
        7.5: '1.875rem', // 30px
      },
      spacing: {
        1.25: '5px', // 5px
        1.75: '7px', // 7px
        3.75: '15px', // 15px
        7.5: '30px', // 10px
      },
      // borderRadius: {
      //   2.5: '0.625rem',
      // },
      colors: {
        red: '#ff0000',
      },
      fontFamily: {
        // 'ui-sans': ['Inter', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // 'ui-xxs': ['0.75rem', '0.875rem'],
        // 'ui-xs': ['0.875rem', '1rem'],
        // 'ui-sm': ['0.875rem', '1.25rem'],
        // 'ui-base': ['1rem', '1.5625rem'],
        // 'ui-xl': ['1.25rem', '1.875rem'],
        // 'ui-2xl': ['1.5rem', '1.875rem'],
        // 'ui-3xl': ['1.875rem', '2.5rem'],
        // 'ui-4xl': ['2.5rem', '2.5rem'],
      },
      boxShadow: {
        main: '0 15px 22px 0 rgba(50, 50, 50, 0.15)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      backgroundImage: {
        polka: 'radial-gradient(#ff00ff 2px, #00fffff 2px)',
      },
    },
  },
  // parts: ['base', 'components', 'utilities'],
  // darkMode: ['class', '[data-mode="dark"]'],
} satisfies Config

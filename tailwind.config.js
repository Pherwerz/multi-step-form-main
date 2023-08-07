/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Ubuntu'],
      },
      backgroundImage: {
        'sidebar-mobile': 'url(/assets/images/bg-sidebar-mobile.svg)',
        'sidebar-desktop': 'url(/assets/images/bg-sidebar-desktop.svg)',
      },
      boxShadow: {
        box: '0px 2px 4px 2px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        primary: {
          'Marine-blue': 'hsl(213, 96%, 18%)',
          'Purplish-blue': 'hsl(243, 100%, 62%)',
          'Pastel-blue': 'hsl(228, 100%, 84%)',
          'Light-blue': 'hsl(206, 94%, 87%)',
          'Strawberry-red': 'hsl(354, 84%, 57%)',
        },
        neutral: {
          'Cool-gray': 'hsl(231, 11%, 63%)',
          'Light-gray': 'hsl(229, 24%, 87%)',
          Magnolia: 'hsl(217, 100%, 97%)',
          Alabaster: 'hsl(231, 100%, 99%)',
          White: 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

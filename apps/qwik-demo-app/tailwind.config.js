const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx,mdx}'),
    join(__dirname, '../../packages/qwik-storefront-ui/src/**/*.{js,ts,jsx,tsx,mdx}')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

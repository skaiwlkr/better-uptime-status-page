/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'primary': '#1E3FD1',
      'gray-light': '#EAEAEC',
      'gray': '#9EA4AD',
      'dark': '#2D2D3B',
      'success': '#2ECC71',
      'error': '#E00',
      'warning': '#F5A623'
    },
  },
  plugins: [],
}

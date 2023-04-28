// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/foundation/foundation.scss" as *;'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      betterstackUrl: process.env.BETTERSTACK_URL,
      betterstackToken: process.env.BETTERSTACK_TOKEN
    }
  },
  // TODO: Add favicons
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.png' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon_32x32.png' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon_96x96.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon.png' },
      ]
    }
  }
})

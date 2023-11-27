// https://nuxt.com/docs/api/configuration/nuxt-config
import {domains} from './app/variables';

export default defineNuxtConfig({
  // @ts-ignore
  app: {
    head: {
      meta: [
        {charset: 'UTF-8'},
        {name: 'theme-color', content: '#416388'},
        {name: 'http-equiv="X-UA-Compatible', content: 'ie=edge'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'format-detection', content: 'telephone=no'},
        {name: 'apple-mobile-web-app-capable', content: 'yes'},
        {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'}
      ],
      link: [
        {rel: 'icon', href: '/favicon.ico', sizes: 'any'},
        {rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml'},
        {rel: 'mask-icon', href: '/mask-icon.svg', color: '#416388'},
        {rel: 'manifest', href: '/manifest.json'},
        {
          rel: 'apple-touch-icon',
          href: 'https://www.atlas-dealer.ru/apple-touch-icon.png',
          type: 'image/png',
          sizes: '180x180'
        },
        {rel: 'apple-touch-icon', href: '/apple-touch-icon-512x512.png', type: 'image/png', sizes: '512x512'},
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon-120x120-precomposed.png',
          type: 'image/png',
          sizes: '120x120'
        },
        {
          rel: 'apple-touch-icon', href: '/apple-touch-icon-120x120.png', type: 'image/png',
          sizes: '120x120'
        }
      ],
    }
  },
  runtimeConfig: {
    siteId: domains[0].siteId,
  },
  css: [
    '@/assets/styles/index.scss',
    '@fancyapps/ui/dist/carousel/carousel.css',
    '@fancyapps/ui/dist/carousel/carousel.thumbs.css',
    '@fancyapps/ui/dist/fancybox/fancybox.css',
    '@vueform/slider/themes/default.css',
  ],
  modules: [
    'nuxt-icon',
    'nuxt-swiper',
    'nuxt-icons',
    '@nuxtjs/apollo',
    '@pinia/nuxt',
    'nuxt-jsonld',
    '@nuxtjs/device',
  ],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: `https://${domains[0].api}/graphql`
      }
    },
  }
});

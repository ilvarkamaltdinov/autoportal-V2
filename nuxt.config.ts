import { domains } from './app/variables';

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: 'UTF-8' },
        { name: 'theme-color', content: '#416388' },
        { name: 'http-equiv="X-UA-Compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'mask-icon', href: '/mask-icon.svg', color: '#416388' },
        { rel: 'manifest', href: '/manifest.json' },
        {
          rel: 'apple-touch-icon',
          href: 'https://www.atlas-dealer.ru/apple-touch-icon.png',
          type: 'image/png',
          sizes: '180x180'
        },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon-512x512.png', type: 'image/png', sizes: '512x512' },
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
  build: {
    transpile: ['tslib'],
  },
  routeRules: {
    '/about': { prerender: true },
    '/banks-partners': { prerender: true },
    '/contact': { prerender: true },
    '/knowledge': { prerender: true },
    '/reviews-dealers': { prerender: true },
    '/news': { prerender: true },
  },
  css: [
    '@/assets/styles/index.scss',
    '@fancyapps/ui/dist/carousel/carousel.css',
    '@fancyapps/ui/dist/carousel/carousel.thumbs.css',
    '@fancyapps/ui/dist/fancybox/fancybox.css',
    '@vueform/slider/themes/default.css',
    'v3-infinite-loading/lib/style.css',
    '@/assets/themes/mytheme/theme.scss'
  ],
  modules: [
    'nuxt-icon',
    'nuxt-swiper',
    'nuxt-icons',
    '@nuxtjs/apollo',
    '@pinia/nuxt',
    'nuxt-jsonld',
    '@nuxtjs/device',
    '@nuxt/image',
    'nuxt-primevue',
  ],
  primeVue: {
    usePrimeVue: true,
    components: {
      include: ['Sidebar', 'Dialog', 'InputText', 'Skeleton', 'DataView',
        'InputMask', 'Button', 'Accordion', 'AccordionTab', 'Paginator']
    }
  },
  plugins: [
    '~/plugins/settings.ts',
  ],
  swiper: {
    styleLang: 'css',
  },
  device: {
    refreshOnResize: true
  },
  nuxtIcon: {
    class: 'icon',
    size: '24px'
  },
  image: {
    dir: 'assets/img',
  },
  devServer: {
    port: process.env.PORT || 3000
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: `https://${domains[0].api}/graphql`
      }
    },
  }
});

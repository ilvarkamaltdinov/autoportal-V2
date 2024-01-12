// declare module 'nuxt/schema' {
//   interface AppConfig {
//     title: string
//     nuxtIcon: {
//       class: string,
//       size: string,
//     },
//     themeCookieKey: string
//   }
// }

export default defineAppConfig({
  title: 'Carro',
  nuxtIcon: {
    class: 'icon',
    size: '24px'
  },
  themeCookieKey: 'theme',
});
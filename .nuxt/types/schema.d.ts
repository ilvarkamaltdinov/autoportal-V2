import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxtIcons"]?: typeof import("nuxt-icons").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["apollo"]?: typeof import("@nuxtjs/apollo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-jsonld"]?: typeof import("nuxt-jsonld").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["device"]?: typeof import("@nuxtjs/device").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["nuxt-icons", Exclude<NuxtConfig["nuxtIcons"], boolean>] | ["@nuxtjs/apollo", Exclude<NuxtConfig["apollo"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-jsonld", Exclude<NuxtConfig["nuxt-jsonld"], boolean>] | ["@nuxtjs/device", Exclude<NuxtConfig["device"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {
   device: {
      enabled: boolean,

      defaultUserAgent: string,

      refreshOnResize: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }
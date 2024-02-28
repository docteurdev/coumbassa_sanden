import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["bootstrapVueNext"]?: typeof import("@bootstrap-vue-next/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["strapi"]?: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["chatgpt"]?: typeof import("nuxt-chatgpt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["quasar"]?: typeof import("nuxt-quasar-ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vue3-carousel-nuxt"]?: typeof import("vue3-carousel-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@bootstrap-vue-next/nuxt", Exclude<NuxtConfig["bootstrapVueNext"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@nuxtjs/strapi", Exclude<NuxtConfig["strapi"], boolean>] | ["nuxt-chatgpt", Exclude<NuxtConfig["chatgpt"], boolean>] | ["nuxt-quasar-ui", Exclude<NuxtConfig["quasar"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["vue3-carousel-nuxt", Exclude<NuxtConfig["vue3-carousel-nuxt"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   apiSecret: string,

   strapi: {
      url: string,

      prefix: string,

      admin: string,

      version: string,

      cookie: any,

      auth: any,

      cookieName: string,

      devtools: boolean,
   },

   chatgpt: {
      apiKey: string,
   },
  }
  interface PublicRuntimeConfig {
   api: string,

   apiRoot: string,

   url: string,

   strapi: {
      url: string,

      prefix: string,

      admin: string,

      version: string,

      cookie: any,

      auth: any,

      cookieName: string,

      devtools: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }
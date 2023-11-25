import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/HP/Desktop/projets/next/000/coumbassa-sanden/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
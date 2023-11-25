import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "admin" | "default" | "empty"
declare module "C:/Users/HP/Desktop/projets/next/000/coumbassa-sanden/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
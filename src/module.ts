import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-locomotive-scroll',
    configKey: 'locomotive',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addPlugin({
      src: resolve('runtime/locomotive.client'),
      name: 'locomotive-scroll',
      mode: 'client',
    })

    // to resolve "ERROR [worker] Cannot read properties of undefined (reading 'getSSRProps')" error
    addPlugin({
      src: resolve('runtime/locomotive'),
      name: 'locomotive-scroll',
      mode: 'server',
    })
  },
})

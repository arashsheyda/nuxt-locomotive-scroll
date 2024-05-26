import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import type { InstanceOptions } from 'locomotive-scroll'

import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin({
  name: 'locomotive-scroll',
  setup({ vueApp }) {
    vueApp.directive<HTMLElement, InstanceOptions>('locomotive', {
      mounted(el, binding) {
        const scroll = new LocomotiveScroll({
          el: el,
          smooth: true,
          ...binding.value,
        })

        el.locomotive = scroll
      },
      beforeUnmount(el) {
        el.locomotive.destroy()
        el.locomotive = undefined
      },
    })
  },
})

declare module '@vue/runtime-core' {
  interface GlobalDirective {
    locomotive: Directive<HTMLElement, InstanceOptions>
  }
}

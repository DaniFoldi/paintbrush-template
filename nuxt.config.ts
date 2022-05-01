import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  paintbrush: {
    prefixComponents: false
  },
  modules: [ 'paintbrush-ui', '@pinia/nuxt' ]
})
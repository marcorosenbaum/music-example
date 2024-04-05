import './assets/base.css'
import './assets/main.css'
import { auth } from './includes/firebase'
import Icon from './directives/icon'
import i18n from './includes/i18n'
import { registerSW } from 'virtual:pwa-register'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import GlobalComponents from '@/includes/_globals'
import progressBar from './includes/progress-bar'
import 'nprogress/nprogress.css'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation.js'

registerSW({ immediate: true })

progressBar(router)

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)
    app.use(i18n)
    app.use(GlobalComponents)
    app.directive('icon', Icon)

    app.mount('#app')
  }
})

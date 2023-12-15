

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  
})

const app = createApp(App)

app.use(vuetify, {
  icons: {
    iconfont: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  },
  // Aquí agregas la URL de tu fuente de Google
  fonts: {
    family: 'Roboto Mono',
    url: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap',
  }})

app.use(createPinia())
app.use(router)

app.mount('#app')


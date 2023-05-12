import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

//pinia
import { createPinia } from 'pinia'
import { useAppStore } from './store/app'
const pinia = createPinia()

//router 
import router from "./router"

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-free/css/all.css' 
library.add(fas, fab)

// vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

const customTheme = {
  dark: true,
  colors: {
    background: "#222",
    surface: "#111",
    primary: "#004789",
    secondary: "#03dac6",
    error: "#b00020",
    info: "#2f72b9",
    success: "#4caf50",
    warning: "#fb8c00",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      customTheme,
    }

    },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})

app.component('font-awesome-icon', FontAwesomeIcon)


app.use(pinia)
app.use(router)
app.use(vuetify)

export const store = {
    app: useAppStore(),
}

app.config.globalProperties.$store = store

const files = import.meta.glob('./**/*.vue', { eager: true, import: 'default' });
const componenti = Object.keys(files).reduce((componenti, filename) => ({
  ...componenti,
  [filename.split('/').pop().split('.')[0]]: files[filename],
}), {});
Object.keys(componenti).forEach(name => app.component(name, componenti[name]));


app.mount('#app')

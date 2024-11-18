import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import CSS from './assets/style.css'

createApp(App).use(store).use(CSS).use(router).mount('#app')

import { createApp } from 'vue'
import App from '@/app/App.vue'
import router from '@/app/router'
import store from '@/app/store'
import PrimeVue from "primevue/config"

createApp(App).use(PrimeVue).use(store).use(router).mount('#app')

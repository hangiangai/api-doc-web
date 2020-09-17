import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Custom } from './plugins'

createApp(App).use(store).use(Custom).use(router).mount('#app')

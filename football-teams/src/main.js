import './assets/styles/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import store from './js/store/index.js'

createApp(App).use(store).mount('#app');

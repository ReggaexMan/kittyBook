import './assets/css/css/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/css/css/bootstrap.min.css'
import './assets/css/css/tooplate-style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

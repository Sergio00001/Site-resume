import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import '@/styles/basicStyles.scss'

const app = createApp(App)

app.use(store).mount('#app')

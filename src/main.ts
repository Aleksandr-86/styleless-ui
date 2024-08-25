import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import VField from '@/components/field/VField.vue'

const app = createApp(App).component('VField', VField)

app.mount('#app')

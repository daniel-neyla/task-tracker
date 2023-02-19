import { createApp } from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import stylesheet from '@/additional/style.css'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)
const pinia = createPinia()


app.use(pinia).component('VueDatePicker', VueDatePicker).mount('#app')

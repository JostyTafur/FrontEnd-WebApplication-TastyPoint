import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Menu from 'primevue/menu'
import Sidebar from 'primevue/sidebar'
import Card from 'primevue/card'
import ScrollPanel from 'primevue/scrollpanel'
import Dialog from 'primevue/dialog'
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('pv-sidebar', Sidebar)
app.component('pv-menu', Menu)
app.component('pv-card', Card)
app.component('pv-scrollpanel', ScrollPanel)
app.component('pv-dialog', Dialog)
app.component('pv-button', Button)
app.component('pv-inputtext', InputText)
app.component('pv-radiobutton', RadioButton)
app.mount('#app')


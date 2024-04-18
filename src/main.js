import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

router.afterEach((to,from,next) => {
 window.scrollTo(0,0);
})


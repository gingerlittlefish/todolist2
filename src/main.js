import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'

import App from './App.vue'
import router from './router'
import ArticleDetails from './views/ArticleDetails.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('ArticleDetails', ArticleDetails)

app.mount('#app')
// 每次翻页让页面回滚至顶部
router.afterEach((to,from,next) => {
 window.scrollTo(0,0);
})


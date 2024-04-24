import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleListVue from '../components/ArticleList.vue'
import ArticleDetailsVue from '../views/ArticleDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/articles',
      name: 'articleList',
      component: ArticleListVue,
    },
    {
      path: '/article/:id',
      name: 'articleDetail',
      component: ArticleDetailsVue,
    },
  ],
})

export default router

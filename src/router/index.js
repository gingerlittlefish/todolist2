import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleList from '../components/ArticleList.vue'
import ArticleDetails from '../views/ArticleDetails.vue'

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
      component: ArticleList,
    },
    {
      path: '/article/:id',
      name: 'ArticleDetails',
      component: () => import('../views/ArticleDetails.vue')
    },
  ],
})

export default router

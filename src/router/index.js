import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import articleList from '@/components/articleList.vue'
import articleDetail from '../views/articleDetail.vue'

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
      component: articleList,
    },
    {
      path: '/article/:id',
      name: 'articleDetail',
      component: articleDetail,
    },
  ],
})

export default router

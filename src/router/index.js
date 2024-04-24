import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleList from '../components/ArticleList.vue'
import ArticleDetail from '../views/ArticleDetail.vue' 

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
      name: 'articleDetail',
      component: ArticleDetail,
    },
  ],
})

export default router

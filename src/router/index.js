import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // linkExactActiveClass: 'router-active',
  mode: history,
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/details/:slug',
      name: "DestinationDetails",
      component: () => import('../views/DestinationDetails.vue') 
    }
  ]
})

export default router

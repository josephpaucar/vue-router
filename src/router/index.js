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
      path: '/destination/:slug',
      name: "DestinationDetails",
      component: () => import('../views/DestinationDetails.vue'),
      children: [
        {
          path: ":experienceSlug",
          name: "experienceDetail",
          component: () => import('../views/ExperienceDetail.vue')
        }
      ]
    }
  ]
})

export default router

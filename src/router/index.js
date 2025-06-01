import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/live-sessions',
      name: 'live-sessions',
      component: () => import('../views/LiveSessionsComponent.vue'),
    },
    {
      path: '/publications',
      name: 'publications',
      component: () => import('../views/PublicationsComponent.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutUsComponent.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsComponent.vue'),
    },
  ],
})

export default router

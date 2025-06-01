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
    // Surgery Routes
    {
      path: '/surgery/dalk',
      name: 'dalk',
      component: () => import('../views/surgery/DALKComponent.vue'),
    },
    {
      path: '/surgery/dmek',
      name: 'dmek',
      component: () => import('../views/surgery/DMEKComponent.vue'),
    },
    {
      path: '/surgery/dsaek',
      name: 'dsaek',
      component: () => import('../views/surgery/DSAEKComponent.vue'),
    },
    {
      path: '/surgery/ut-dsaek',
      name: 'ut-dsaek',
      component: () => import('../views/surgery/UTDSAEKComponent.vue'),
    },
    {
      path: '/surgery/salk',
      name: 'salk',
      component: () => import('../views/surgery/SALKComponent.vue'),
    },
  ],
})

export default router

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
      path: '/live-surgery',
      name: 'live-surgery',
      component: () => import('../views/LiveSurgeryView.vue'),
    },
    {
      path: '/recordings',
      name: 'recordings',
      component: () => import('../views/RecordingsView.vue'),
    },
    {
      path: '/publications',
      name: 'publications',
      component: () => import('../views/PublicationsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutUsView.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue'),
    },
    // Surgery Routes
    {
      path: '/surgery/dalk',
      name: 'dalk',
      component: () => import('../views/surgery/DALKView.vue'),
    },
    {
      path: '/surgery/dmek',
      name: 'dmek',
      component: () => import('../views/surgery/DMEKView.vue'),
    },
    {
      path: '/surgery/dsaek',
      name: 'dsaek',
      component: () => import('../views/surgery/DSAEKView.vue'),
    },
    {
      path: '/surgery/ut-dsaek',
      name: 'ut-dsaek',
      component: () => import('../views/surgery/UTDSAEKView.vue'),
    },
    {
      path: '/surgery/salk',
      name: 'salk',
      component: () => import('../views/surgery/SALKView.vue'),
    },
    {
      path: '/surgery/mushroom-pk',
      name: 'mushroom-pk',
      component: () => import('../views/surgery/MushroomPKView.vue'),
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LineView from '../views/Line.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/line',
      name: 'line',
      component: LineView
    },
    {
      path: '/hello-club',
      name: 'hello-club',
      component: () => import('../views/hello-club.vue')
    },
    {
      path: '/cylinder',
      name: 'cylinder',
      component: () => import('../views/cylinder.vue')
    },
  ]
})

export default router

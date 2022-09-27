import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/DashBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard,
      children: [
        {
          path: '/list',
          component: () => import('../views/List.vue')
        },
        {
          path: '/favorites',
          component: () => import("../views/Favorites.vue")
        },
        {
          path: '/notifications',
          component: () => import("../views/Notifications.vue")
        },
        {
          path: '/orders',
          component: () => import("../views/Orders.vue")
        },
        {
          path: '/settings',
          component: () => import('../views/Settings.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue')
    }
  ]
})

export default router

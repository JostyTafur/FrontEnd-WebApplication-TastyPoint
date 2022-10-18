import { createRouter, createWebHistory } from 'vue-router'
import DashBoardConsumer from '../views/Consumer/DashBoard-consumer.vue'
import DashBoardBusiness from "../views/Business/DashBoard-business.vue";
import Login from "../views/Session/Login.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      component: () => import('../views/Session/Register.vue')
    },
    {
      path: '/segmentation',
      component: () => import('../views/Session/Segmentation.vue')
    },
    {
      path: '/consumer',
      name: 'dashboard-consumer',
      component: DashBoardConsumer,
      children: [
        {
          path: '/consumer/list',
          component: () => import('../views/Consumer/List.vue')
        },
        {
          path: '/consumer/favorites',
          component: () => import("../views/Consumer/Favorites.vue")
        },
        {
          path: '/consumer/notifications',
          component: () => import("../views/Consumer/Notifications.vue")
        },
        {
          path: '/consumer/orders',
          component: () => import("../views/Consumer/Orders.vue")
        },
        {
          path: '/consumer/settings',
          component: () => import('../views/Consumer/Settings.vue')
        },
        {
          path: '/consumer/detail/:id',
          name: 'detail',
          component: () => import('../views/Consumer/DetailsDish.vue')
        }
      ]
    },
    {
      path: '/business',
      name: 'dashboard-business',
      component: DashBoardBusiness,
      children: [
        {
          path: '/business/catalogue',
          component: ()=> import("../views/Business/Catalogue.vue")
        },
        {
          path: '/business/profile',
          component: () => import("../views/Business/Profile.vue")
        },
        {
          path: '/business/promotions',
          component: () => import("../views/Business/Promotions.vue")
        },
        {
          path: '/business/orders',
          component: ()=> import("../views/Business/Orders.vue")
        },
        {
          path: '/business/settings',
          component: ()=> import("../views/Business/Settings.vue")
        }
      ]
    }
  ]
})

export default router

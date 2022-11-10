import { createRouter, createWebHistory } from 'vue-router'
import DashBoardConsumer from '../../layout/pages/dashboard-consumer.component.vue'
import DashBoardBusiness from "../../layout/pages/dashboard-business.component.vue";
import Login from "../../security/pages/sign-in.component.vue";
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
      component: () => import('../../security/pages/sign-up.component.vue')
    },
    {
      path: '/segmentation',
      component: () => import('../../security/pages/segmentation.component.vue')
    },
    {
      path: '/forgotpassword',
      component: () => import('../../security/pages/forgot-password.component.vue')
    },
    {
      path: '/consumer',
      name: 'dashboard-consumer',
      component: DashBoardConsumer,
      children: [
        {
          path: '/consumer/list',
          component: () => import('../../Selling/pages/product-list.component.vue')
        },
        {
          path: '/consumer/favorites',
          component: () => import("../../Selling/pages/product-favorites.component.vue")
        },
        {
          path: '/consumer/notifications',
          component: () => import("../../promotions/pages/promotions-notifications.component.vue")
        },
        {
          path: '/consumer/orders',
          component: () => import("../../orders/pages/consumer-orders.component.vue")
        },
        {
          path: '/consumer/settings',
          component: () => import('../../profile/pages/profile-consumer-settings.component.vue')
        },
        {
          path: '/consumer/detail/:id',
          name: 'detail',
          component: () => import('../../Selling/components/product-details.component.vue')
        },
        {
          path: '/consumer/profile-food-store',
          name: 'profile-food-store',
          component: () => import('../../profile/pages/profile-food-store.component.vue')
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
          component: ()=> import("../../Selling/pages/products-catalogue.component.vue")
        },
        {
          path: '/business/profile',
          component: () => import("../../profile/pages/profile-food-store-settings.component.vue")
        },
        {
          path: '/business/promotions',
          component: () => import("../../promotions/pages/promotions-business.component.vue")
        },
        {
          path: '/business/orders',
          component: ()=> import("../../orders/pages/business-orders.component.vue")
        },
        {
          path: '/business/settings',
          component: ()=> import("../../profile/pages/profile-business-settings.component.vue")
        },
        {
          path: '/business/consumerView',
          component: () => import('../../Selling/components/product-view-post.component.vue')
        },
        {
          path: '/business/postDish',
          component: () => import('../../Selling/components/product-create-post.component.vue')
        },
        {
          path: '/business/editPost:id',
          name: 'edit',
          component: () => import('../../Selling/components/product-edit-post.component.vue')
        }
      ]
    }
  ]
})

export default router

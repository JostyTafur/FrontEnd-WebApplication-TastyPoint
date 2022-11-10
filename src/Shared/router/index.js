import { createRouter, createWebHistory } from 'vue-router'
import DashBoardConsumer from '../../layout/pages/dashboard-consumer.component.vue'
import DashBoardBusiness from "../../layout/pages/dashboard-business.component.vue";
import Login from "../../Security/pages/sign-in.component.vue";
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
      component: () => import('../../Security/pages/sign-up.component.vue')
    },
    {
      path: '/segmentation',
      component: () => import('../../Security/pages/segmentation.component.vue')
    },
    {
      path: '/forgotpassword',
      component: () => import('../../Security/pages/forgot-password.component.vue')
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
          component: () => import("../../Social/pages/product-favorites.component.vue")
        },
        {
          path: '/consumer/notifications',
          component: () => import("../../Publishing/pages/promotions-notifications.component.vue")
        },
        {
          path: '/consumer/Ordering',
          component: () => import("../../Ordering/pages/consumer-orders.component.vue")
        },
        {
          path: '/consumer/settings',
          component: () => import('../../Profiles/pages/profile-consumer-settings.component.vue')
        },
        {
          path: '/consumer/detail/:id',
          name: 'detail',
          component: () => import('../../Selling/components/product-details.component.vue')
        },
        {
          path: '/consumer/Profiles-food-store',
          name: 'Profiles-food-store',
          component: () => import('../../Social/pages/profile-food-store.component.vue')
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
          path: '/business/Profiles',
          component: () => import("../../Social/pages/profile-food-store-settings.component.vue")
        },
        {
          path: '/business/Publishing',
          component: () => import("../../Publishing/pages/promotions-business.component.vue")
        },
        {
          path: '/business/Ordering',
          component: ()=> import("../../Ordering/pages/business-orders.component.vue")
        },
        {
          path: '/business/settings',
          component: ()=> import("../../Profiles/pages/profile-business-settings.component.vue")
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

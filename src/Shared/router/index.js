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
      path: '/segmentation/:userId',
      name: 'segmentation',
      component: () => import('../../Security/pages/segmentation.component.vue')
    },
    {
      path: '/consumer/:userProfileId',
      name: 'dashboard-consumer',
      component: DashBoardConsumer,
      children: [
        {
          path: '/consumer/:userProfileId/list',
          name: "list-packs",
          component: () => import('../../Selling/pages/product-list.component.vue')
        },
        {
          path: '/consumer/:userProfileId/favorites',
          name: "favorites-packs",
          component: () => import("../../Social/pages/product-favorites.component.vue")
        },
        {
          path: '/consumer/:userProfileId/notifications',
          name: "notifications",
          component: () => import("../../Publishing/pages/promotions-notifications.component.vue")
        },
        {
          path: '/consumer/:userProfileId/orders',
          name: "order-consumer",
          component: () => import("../../Ordering/pages/consumer-orders.component.vue")
        },
        {
          path: '/consumer/:userProfileId/settings',
          name: "settings-consumer",
          component: () => import('../../Profiles/pages/profile-consumer-settings.component.vue')
        },
        {
          path: '/consumer/:userProfileId/detail/:id',
          name: 'detail',
          component: () => import('../../Selling/components/product-details.component.vue')
        },
        {
          path: '/consumer/:userProfileId/Profiles-food-store',
          name: 'Profiles-food-store',
          component: () => import('../../Social/pages/profile-food-store.component.vue')
        }
      ]
    },
    {
      path: '/business/:userProfileId',
      name: 'dashboard-business',
      component: DashBoardBusiness,
      children: [
        {
          path: '/business/:userProfileId/catalogue',
          name: 'catalogue',
          component: ()=> import("../../Selling/pages/products-catalogue.component.vue")
        },
        {
          path: '/business/:userProfileId/Profiles',
          name: 'profile-store',
          component: () => import("../../Social/pages/profile-food-store-settings.component.vue")
        },
        {
          path: '/business/:userProfileId/promotions',
          name: 'promotions',
          component: () => import("../../Publishing/pages/promotions-business.component.vue")
        },
        {
          path: '/business/:userProfileId/orders',
          name: 'order-business',
          component: ()=> import("../../Ordering/pages/business-orders.component.vue")
        },
        {
          path: '/business/:userProfileId/settings',
          name: 'settings-business',
          component: ()=> import("../../Profiles/pages/profile-business-settings.component.vue")
        },
        {
          path: '/business/:userProfileId/consumerView',
          name: 'consumerView',
          component: () => import('../../Selling/components/product-view-post.component.vue')
        },
        {
          path: '/business/:userProfileId/postDish',
          name: 'postDish',
          component: () => import('../../Selling/components/product-create-post.component.vue')
        },
        {
          path: '/business/:userProfileId/editPost:id',
          name: 'edit',
          component: () => import('../../Selling/components/product-edit-post.component.vue')
        }
      ]
    }
  ]
})

export default router

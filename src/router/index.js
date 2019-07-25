import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/Login.vue')
    },
    {path: '/', redirect: '/home'}
    // {
    //     path: '/orderDetails',
    //     name: 'orderDetails',
    //    component: () => import('../components/orderDetails.vue')
    // }
] 

// 需要通过后台数据来生成的组件
export const asyncRoutes = {
    'home': {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    'worklist': {
        path: 'worklist',
        name: 'worklist',
        component: () => import('../views/worklist.vue')
    },
    'orderCreation': {
        path: 'orderCreation',
        name: 'orderCreation',
        component: () => import('../views/orderCreation.vue')
    },
    'memo': {
        path: 'memo',
        name: 'memo',
        component: () => import('../views/memo.vue')
    },
    'orderRetrun': {
        path: 'orderRetrun',
        name: 'orderRetrun',
        component: () => import('../views/orderRetrun.vue')
    },
    'orderCancel': {
        path: 'orderCancel',
        name: 'orderCancel',
        component: () => import('../views/orderCancel.vue')
    },
    'orderQuery': {
        path: 'orderQuery',
        name: 'orderQuery',
        component: () => import('../views/orderQuery.vue')
    },
    'orderDetails': {
        path: 'orderDetails',
        name: 'orderDetails',
        component: () => import('../views/orderDetails.vue')
    },
    'billingQuery': {
        path: 'billingQuery',
        name: 'billingQuery',
        component: () => import('../views/billingQuery.vue')
    },
    'invoiceDownload': {
        path: 'invoiceDownload',
        name: 'invoiceDownload',
        component: () => import('../views/invoiceDownload.vue')
    },
    'priceQuery': {
        path: 'priceQuery',
        name: 'priceQuery',
        component: () => import('../views/priceQuery.vue')
    },
    'materialQuery': {
        path: 'materialQuery',
        name: 'materialQuery',
        component: () => import('../views/materialQuery.vue')
    },
}

const createRouter = () => new Router({
    routes: commonRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher 
}

export default router
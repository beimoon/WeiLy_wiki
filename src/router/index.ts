import type { RouteRecordRaw, Router } from 'vue-router'
import { createRouter,createWebHistory} from 'vue-router'
import type { App } from 'vue'
import { setupRouterGuard } from './guard'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path:'/login',
    component:()=>import('@/views/login/index.vue')
  }
  ,
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export function setupRouter(app: App) {
  setupRouterGuard(router)
  app.use(router)
}

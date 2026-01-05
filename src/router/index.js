import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ImageLibrary from '../views/ImageLibrary.vue'
import VideoLibrary from '../views/VideoLibrary.vue'
import Dashboard from '../views/Dashboard.vue'
import FoodManagement from '../views/FoodManagement.vue'
import SubscriptionManagement from '../views/SubscriptionManagement.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/images',
    name: 'ImageLibrary',
    component: ImageLibrary
  },
  {
    path: '/videos',
    name: 'VideoLibrary', 
    component: VideoLibrary
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/food',
    name: 'FoodManagement',
    component: FoodManagement
  },
  {
    path: '/subscriptions',
    name: 'SubscriptionManagement',
    component: SubscriptionManagement
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 使用 hash 模式適合 GitHub Pages
  routes
})

export default router
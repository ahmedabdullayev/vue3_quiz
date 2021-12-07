import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Quiz from '../views/Quiz.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Quiz
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

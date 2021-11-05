import { createRouter, createWebHistory } from 'vue-router'
import CheckBooking from '../views/CheckBooking.vue'
import CreateBooking from '../views/CreateBooking.vue'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/checkbooking',
    name: 'CheckBooking',
    component: CheckBooking
  },
  {
    path: '/',
    name: 'home',
    component:Home
  },
  {
    path: '/createbooking',
    name: 'CreateBooking',
    component: CreateBooking
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

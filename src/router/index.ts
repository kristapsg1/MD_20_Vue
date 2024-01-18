import Add from '@/views/Add.vue'
import Home from '@/views/Home.vue'
import SingleCard from '@/views/SingleCard.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/:id',
      name: 'SingleCard',
      component: SingleCard
    }
  ]
})

export default router

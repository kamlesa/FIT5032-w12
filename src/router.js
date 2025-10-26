import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/MainPage.vue'
import OtherPage from './OtherPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/mood', component: MainPage },
  { path: '/resources', component: OtherPage },
  { path: '/map', component: MainPage },
  { path: '/community', component: OtherPage },
  { path: '/appointments', component: MainPage },
  { path: '/account', component: OtherPage },
  { path: '/unauthorised', component: MainPage },
  { path: '/helloworld', component: OtherPage },
  { path: '/weather', name: 'Week 10', component: MainPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router

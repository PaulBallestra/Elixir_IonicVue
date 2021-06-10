import { createRouter, createWebHistory } from '@ionic/vue-router';
import Welcome from '../views/Welcome.vue';
import Actualites from '../views/Actualites.vue';
import Service from '../views/Service.vue';

const routes = [
  {
    path: '/',
    component: Welcome
  },
  {
    path: '/actualites',
    component: Actualites
  },
  {
    path: '/service',
    component: Service
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

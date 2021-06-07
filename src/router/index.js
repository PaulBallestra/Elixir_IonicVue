import { createRouter, createWebHistory } from '@ionic/vue-router';
import Welcome from '../views/Welcome.vue';

const routes = [
  {
    path: '/',
    component: Welcome
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

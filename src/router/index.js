import { createRouter, createWebHistory } from '@ionic/vue-router';
import Welcome from '../views/Welcome.vue';
import Actualites from '../views/Actualites.vue';
import Service from '../views/Service.vue';
import Contact from '../views/Contact.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

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
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router

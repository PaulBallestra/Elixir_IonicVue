import { createRouter, createWebHistory } from '@ionic/vue-router';
import Welcome from '../views/Welcome.vue';
import Actualites from '../views/Actualites.vue';
import CurrentActualite from '../views/CurrentActualite.vue';
import Service from '../views/Service.vue';
import Contact from '../views/Contact.vue';
import Me from '../views/Me.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import Register from '../views/Register.vue';

const routes = [
  {
    path: '/',
    component: Welcome,
  },
  {
    path: '/actualites',
    component: Actualites
  },
  {
    path: '/actualites/1',
    component: CurrentActualite
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
    path: '/api/auth/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/api/auth/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/api/auth/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/api/auth/logout',
    name: 'Logout',
    component: Logout
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router

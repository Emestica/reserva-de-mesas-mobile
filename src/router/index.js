import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import LoginView from "../views/LoginView.vue"
import InicioView from "../views/Cliente/InicioView.vue"
import LocalesView from "../views/Cliente/LocalesView.vue"
import RestauranteView from "../views/Cliente/RestauranteView.vue"
import MenuView from "../views/Cliente/MenuView.vue"
import ReservacionView from "../views/Cliente/ReservacionView.vue"
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/Inicio',
    name: 'InicioView',
    component: InicioView
  },
  {
    path: '/Locales',
    name: 'LocalesView',
    component: LocalesView
  },
  {
    path: '/Restaurante',
    name: 'RestauranteView',
    component: RestauranteView
  }, 
  {
    path: '/Menu',
    name: 'MenuView',
    component: MenuView
  },
  {
    path: '/Reservacion',
    name: 'ReservacionView',
    component:ReservacionView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

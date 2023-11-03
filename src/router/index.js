import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import LoginView from "../views/LoginView.vue"
import InicioView from "../views/Cliente/InicioView.vue"
import LocalesView from "../views/Cliente/LocalesView.vue"
import RestauranteView from "../views/Cliente/RestauranteView.vue"
import MenuView from "../views/Cliente/MenuView.vue"
import ReservacionView from "../views/Cliente/ReservacionView.vue"
import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/md-house/inicio'
  },
  {
    path: '/md-house/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/inicio'
      },
      {
        path: 'login',
        component: LoginView
      },
      {
        path: 'inicio',
        component: InicioView
      },
      {
        path: 'locales',
        component: LocalesView
      },
      {
        path: 'restaurante',
        component: RestauranteView
      }, 
      {
        path: 'menu',
        component: MenuView
      },
      {
        path: 'reservacion',
        component:ReservacionView
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

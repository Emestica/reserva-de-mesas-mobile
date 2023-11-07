import { createRouter, createWebHistory } from '@ionic/vue-router';
import InicioView from "../views/Cliente/InicioView.vue"
import BurgerView from "../views/Cliente/BurgerView.vue"
import PolloView from "../views/Cliente/PolloView.vue"
import PizzaView from "../views/Cliente/PizzaView.vue"
import TabsPage from '../views/TabsPage.vue'
import LoginView from "../views/LoginView.vue"

const routes = [
 
  {
    path: '/md-house/',
    component: TabsPage,
    children: [
    
      {
        path: 'inicio',
        component: InicioView
      },
      {
        path: 'burger',
        component: BurgerView
      },
      {
        path: 'pollo',
        component: PolloView
      }, 
      {
        path: 'pizza',
        component: PizzaView
      },
    ]
  },

  {
    path: "/",
    redirect: "/md-house/login",
    component:'LoginView'
  },


  

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

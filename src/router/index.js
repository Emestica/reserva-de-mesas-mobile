import { createRouter, createWebHistory } from '@ionic/vue-router';
import InicioView from "../views/Cliente/InicioView.vue"
import BurgerView from "../views/Cliente/BurgerView.vue"
import PolloView from "../views/Cliente/PolloView.vue"
import PizzaView from "../views/Cliente/PizzaView.vue"
import LoginView from "../views/LoginView.vue"
import ComidaGorda from "../views/Burgers/ComidaGorda.vue"
import CamperoView from "../views/Pollo/CamperoView.vue"
import CampestreView from "../views/Pollo/CampestreView.vue"
import MikeView from "../views/Burgers/MikeBurger.vue"
import HutView from "../views/Pizzas/PizzaHutView.vue"
import DominosView from "../views/Pizzas/DominosView.vue"

const routes = [


  {
    path: '/',
    component:LoginView
  },
  {
    path: '/burger',
    component:BurgerView
  },
  {
    path: '/pollo',
    component:PolloView
  },
  {
    path: '/pizza',
    component:PizzaView
  },
  {
    path: '/inicio',
    component:InicioView
  },
  {
    path: '/comidagorda',
    component:ComidaGorda
  },
  {
    path: '/campero',
    component:CamperoView
  },

  {
    path: '/campestre',
    component:CampestreView
  },

  {
    path: '/mikeburger',
    component:MikeView
  },

  {
    path: '/pizzahut',
    component:HutView
  },

  {
    path: '/dominos',
    component:DominosView
  },
 

 


  


  // {
  //   path: "/",
  //   name: "login",
  //   component: LoginView
  // },
  // {
  //   path: '/md-house/',
  //   component: TabsPage,
  //   children: [
  //     {
  //       path: 'inicio',
  //       component: InicioView
  //     },
  //     {
  //       path: 'burger',
  //       component: BurgerView
  //     },
  //     {
  //       path: 'pollo',
  //       component: PolloView
  //     }, 
  //     {
  //       path: 'pizza',
  //       component: PizzaView
  //     },
  //   ]
  // }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

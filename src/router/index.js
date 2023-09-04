import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import JoinAndLoginView from '../views/JoinAndLoginView.vue'
import FormView from '../views/FormView.vue'
import LoginView from '../views/LoginView.vue'
import AllFormView from '../views/AllFormView.vue'
import FormDetailsView from '../views/FormDetailsView.vue'
import PostFormView from '../views/PostFormView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  // {
  //   path: '/sign',
  //   component: JoinAndLoginView
  // },
  {
    path: '/form',
    component: FormView
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/forms',
    component: AllFormView
  },
  {
    path: '/forms/:formId',
    component: FormDetailsView
  },
  {
    path: '/forms/create',
    component: PostFormView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

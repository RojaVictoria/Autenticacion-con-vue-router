import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Store from "../store";


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      login: false
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/home',
    meta: {
      login: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.login) {
    if(Store.state.currentUser) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router

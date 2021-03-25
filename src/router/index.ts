import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // const publicPages = ['/login', '/register', '/home'];
  // const authRequired = !publicPages.includes(to.path);
  // const loggedIn = localStorage.getItem('user');

  // // trying to access a restricted page + not logged in
  // // redirect to login page
  // if (authRequired && !loggedIn) {
  //   next('/login');
  // } else {
  //   next();
  // }
  console.log('inside before each')
  next();
});

export default router

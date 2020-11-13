import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import(/* webpackChunkName: "profile" */ '../views/explore/')
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import(/* webpackChunkName: "profile" */ '../views/notifications/')
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: () => import(/* webpackChunkName: "profile" */ '../views/bookmarks/')
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import(/* webpackChunkName: "profile" */ '../views/messages/')
  },
  {
    path: '/account',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile/')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

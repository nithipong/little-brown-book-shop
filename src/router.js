import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/checkout',
      name: 'Checkout',
      components: require('./views/Checkout')
    },
    {
      path: '/thankyou',
      name: 'Thankyou',
      components: require('./views/Thankyou')
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

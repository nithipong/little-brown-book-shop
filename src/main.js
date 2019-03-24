import Vue from 'vue';
import router from './router';
import Vuex from 'vuex';
import myStore from './store.js';
import App from './App.vue';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
// icon name
import { faShoppingCart, faMoneyBillWave, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// add fontName before add into this
library.add(faShoppingCart, faMoneyBillWave, faCheckCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// axios
import axios from 'axios';
Vue.prototype.$axios = axios;

// jquery
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

// velocity
import velocity from 'velocity-animate';
import 'velocity-ui-pack';
Vue.prototype.$velocity = velocity;

// notification
import Notifications from 'vue-notification';
Vue.use(Notifications, { velocity });

// component transition
import TransitionCustom from './components/TransitionCustom.vue';
Vue.component('transition-custom', TransitionCustom);

// filter
import './filters.js';

// css
// eslint-disable-next-line no-undef
require('./assets/sass/main.sass');

Vue.config.productionTip = false;

Vue.use(Vuex);
const store = new Vuex.Store(myStore);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

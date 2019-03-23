import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import axios from 'axios'
Vue.prototype.$axios = axios
import './filters.js'
import router from './router'

require('./assets/sass/main.sass')

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

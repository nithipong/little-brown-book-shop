import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router'

// axios
import axios from 'axios'
Vue.prototype.$axios = axios

// jquery
import jquery from 'jquery'
window.$ = window.jQuery = jquery

// velocity
import velocity from 'velocity-animate'
import 'velocity-ui-pack'
Vue.prototype.$velocity = velocity

// filter
import './filters.js'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
// icon name
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// add fontName before add into this
library.add(faShoppingCart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// notification
import Notifications from 'vue-notification'
Vue.use(Notifications)

// component transition
import TransitionCustom from './components/TransitionCustom.vue'
Vue.component('transition-custom', TransitionCustom)

// css
// eslint-disable-next-line no-undef
require('./assets/sass/main.sass')

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import numeral from 'numeraljs'

Vue.filter('formatCurrency', value => {
  return numeral(value).format('0,0[.]00')
})

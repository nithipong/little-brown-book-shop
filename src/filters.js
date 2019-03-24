import numeral from 'numeraljs';
import Vue from 'vue';

Vue.filter('formatCurrency', value => {
  return numeral(value).format('0,0[.]00');
});

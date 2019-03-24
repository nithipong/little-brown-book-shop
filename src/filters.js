import Vue from 'vue';
import numeral from 'numeraljs';

Vue.filter('formatCurrency', value => {
  if (value) return numeral(value).format('0,0[.]00');
  return value;
});

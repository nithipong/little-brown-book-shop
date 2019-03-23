import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_STATE_PRODUCT(state, products) {
      state.products = products;
    }
  },
  actions: {
    initProducts: ({ commit }, products) => {
      commit('SET_STATE_PRODUCT', products);
    }
  }
});

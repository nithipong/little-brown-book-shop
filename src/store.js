import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    shoppingCart: {
      products: []
    }
  },
  mutations: {
    // set products to state
    SET_STATE_PRODUCT(state, products) {
      state.products = products
    },

    // add product to shopping cart
    ADD_STATE_SHOPPING_CART(state, payload) {
      state.shoppingCart.products.push(payload.product)
    },

    // update products in shopping cart
    UPDATE_PRODUCT_QTY(state, payload) {
      state.shoppingCart.products[payload.productIndex].qty = payload.product.qty
    },

    REMOVE_PRODUCT(state, payload) {
      state.shoppingCart.products.splice(payload.productIndex, 1)
    }
  },
  actions: {
    initProducts: ({ commit }, products) => {
      commit('SET_STATE_PRODUCT', products)
    },

    // this action will check. if have existing product will use update.
    addToShoppingCart: ({ commit }, payload) => {
      commit('ADD_STATE_SHOPPING_CART', payload)
    },

    updateProductQty: ({ commit }, payload) => {
      commit('UPDATE_PRODUCT_QTY', payload)
    },

    removeProduct: ({ commit }, payload) => {
      commit('REMOVE_PRODUCT', payload)
    }
  }
})

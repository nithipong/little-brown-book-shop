const getDefaultState = () => {
  return {
    products: [],
    subtotal: 0,
    discount: 0,
    discountText: null,
    net: 0,
    count: 0
  };
};

const state = {
  shoppingCart: getDefaultState()
};

const mutations = {
  // add product to shopping cart
  ADD_STATE_SHOPPING_CART(state, payload) {
    state.shoppingCart.products.push(payload.product);
  },

  // update products in shopping cart
  UPDATE_PRODUCT_QTY(state, payload) {
    state.shoppingCart.products[payload.productIndex].qty = payload.product.qty;
  },

  REMOVE_PRODUCT(state, payload) {
    state.shoppingCart.products.splice(payload.productIndex, 1);
  },

  UPDATE_SHOPPING_CART(state) {
    let subtotal = 0,
      subtotal_for_discount = 0,
      discount = 0,
      uniqueBook = 0,
      count = 0;

    let uniqueBookId = [
      9781408855652,
      9781408855669,
      9781408855676,
      9781408855683,
      9781408855690,
      9781408855706,
      9781408855713
    ];

    state.shoppingCart.products.forEach(product => {
      subtotal += Number(product.price) * product.qty;
      if (uniqueBookId.includes(Number(product.id))) {
        uniqueBook++;
        subtotal_for_discount += Number(product.price);
      }
      count++;
    });

    state.shoppingCart.discountText = null;
    if (uniqueBook >= 2) {
      let percentDiscount = 10;
      if (uniqueBook - 2 !== 0) {
        percentDiscount += uniqueBook - 2;
      }
      discount = subtotal_for_discount * 0.01 * percentDiscount;
      state.shoppingCart.discountText = `${percentDiscount}%`;
    }

    state.shoppingCart.count = count;
    state.shoppingCart.discount = discount;
    state.shoppingCart.net = subtotal - discount;
  },

  RESET_STATE_SHOPPING_CART(state) {
    state.shoppingCart = Object.assign(state.shoppingCart, getDefaultState());
  }
};

const actions = {
  addToShoppingCart: ({ commit }, payload) => {
    commit('ADD_STATE_SHOPPING_CART', payload);
    commit('UPDATE_SHOPPING_CART');
  },

  updateProductQty: ({ commit }, payload) => {
    commit('UPDATE_PRODUCT_QTY', payload);
    commit('UPDATE_SHOPPING_CART');
  },

  resetShoppingCart: ({ commit }) => {
    commit('RESET_STATE_SHOPPING_CART');
  }
};


export default {
  state,
  mutations,
  actions
};

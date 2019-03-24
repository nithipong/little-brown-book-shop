import { createLocalVue, shallowMount } from '@vue/test-utils';
import ProductList from '@/components/ProductList.vue';
import myStore from '@/store.js';
import Vuex from 'vuex';
const localVue = createLocalVue();

import velocity from 'velocity-animate';
import 'velocity-ui-pack';
import Notifications from 'vue-notification';
localVue.use(Notifications, { velocity });

localVue.use(Vuex);

const store = new Vuex.Store(myStore);

describe('ProductList', () => {
  const wrapper = shallowMount(ProductList, { store, localVue });
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders correctlye", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('products is have more than one', () => {
    expect(wrapper.vm.products).toHaveLength(29);
  });

  test('render products list', () => {
    expect(wrapper.findAll('.card-product'));
  });


  test('have button add to cart', () => {
    let buttonAddToCart = wrapper.findAll('.button-add-to-cart[data-product-id]');
    expect(buttonAddToCart.wrappers.length).toBe(29);
  });

  test('able to add to cart', () => {
    wrapper.find('.button-add-to-cart[data-product-id="9781408855652"]').trigger('click');
    expect(wrapper.vm.addToCart.called);
  });

  test('shopping cart have update', () => {
    expect(store.state.shoppingCart.count).toBe(1);
  });

  test('add other product', () => {
    wrapper.find('.button-add-to-cart[data-product-id="9780141987392"]').trigger('click');
    expect(wrapper.vm.addToCart.called);
  });

  test('shopping cart product count is should be two', () => {
    expect(store.state.shoppingCart.count).toBe(2);
  });


});

import { shallowMount } from '@vue/test-utils';
import ShoppingCart from '@/components/ShoppingCart.vue';
// filter
import '@/filters.js';

describe('ShoppingCart', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ShoppingCart);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders correctlye", () => {
    const wrapper = shallowMount(ShoppingCart);
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.text()).toContain('Cart is Empty');
    expect(wrapper.text()).toContain('Shopping Cart');
  });

  it("render summary", () => {
    const wrapper = shallowMount(ShoppingCart, {
      propsData: {
        propsShoppingCart: {
          products: [
            {
              "cover": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
              "price": "350",
              "title": "Harry Potter and the Philosopher's Stone (I)",
              "id": "9781408855652"
            },
            {
              "cover": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855669.jpg",
              "price": "350",
              "title": "Harry Potter and the Chamber of Secrets (II)",
              "id": "9781408855669"
            }
          ],
          subtotal: 0,
          discount: 70,
          discountText: "10%",
          net: 630,
          count: 2
        }
      }
    });
    expect(wrapper.find('.summary-discount').text()).toContain(70);
    expect(wrapper.find('.summary-net').text()).toContain(630);
  });



});

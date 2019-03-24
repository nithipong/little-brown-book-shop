<template>
  <div class="product-list"
    v-show="products.length > 0">
    <transition-group tag="div"
      class="columns is-multiline"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
      <div v-for="(product, index) in products"
        :key="product.id"
        :data-index="index"
        class="column is-6">
        <div class="card card-product">
          <div class="columns is-mobile is-gapless">
            <div class="column is-narrow"
              style="min-width: 150px">
              <figure class="image product-image">
                <img :src="product.cover"
                    :alt="product.title" />
                </figure>
            </div>
            <div class="column">
              <div class="product-detail">
                <h3 class="is-size-5 has-text-weight-bold">{{ product.title }}</h3>
                <p>{{ product.price }}฿</p>
                <br />
                <button type="button"
                  class="button is-fullwidth button-add-to-cart"
                  :data-product-id="product.id"
                  @click="addToCart(product)">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Books from "../../books.json";
export default {
  data() {
    return {
      products: Books.books
    };
  },
  computed: {
    shoppingCart() {
      return this.$store.state.shoppingCart;
    }
  },
  methods: {
    ...mapActions(["addToShoppingCart", "updateProductQty", "removeProduct"]),

    addToCart(product) {
      let self = this;
      let productQty = 1;
      let indexOfProduct = null;

      // if have product, let check product is existing or  not
      if (self.shoppingCart.products.length > 0) {
        let indexProductExist = self.shoppingCart.products.findIndex(
          item => item.id === product.id
        );

        if (indexProductExist != -1) {
          productQty =
            productQty + self.shoppingCart.products[indexProductExist].qty;
          indexOfProduct = indexProductExist;
        }
      }

      let payload = {
        productIndex: indexOfProduct,
        product: {
          ...product,
          qty: productQty
        }
      };

      if (indexOfProduct != null) {
        self.updateProductQty(payload);
      } else {
        self.addToShoppingCart(payload);
      }

      self.$notify({
        group: "noti",
        title: "Suscess",
        text: `${product.title} was added to your shopping cart`,
        type: "success"
      });
    },

    beforeEnter: function(el) {
      Velocity(el, { opacity: 0, translateY: 50 }, 0);
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 50;
      Velocity(
        el,
        { opacity: 1, translateY: 0 },
        {
          complete: done,
          speed: 900,
          delay: delay
        }
      );
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 50;
      Velocity(
        el,
        { opacity: 0, translateY: 50 },
        {
          complete: done,
          speed: 900,
          delay: delay
        }
      );
    }
  }
};
</script>

<style lang="sass">
.product-detail
  padding: 15px
.product-list
  >.columns .column
    @media (max-width: 1169px)
      padding: 7.5px 15px !important
</style>

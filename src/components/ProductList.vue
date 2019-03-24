<template>
  <transition-custom>
    <div class="product-list"
      v-show="products.length > 0">
      <transition-group tag="div"
        class="columns is-multiline"
        name="catd-product"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave">
        <div v-for="(product, index) in products"
          :key="product.id"
          :data-index="index"
          class="column is-6">
          <div class="card">
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
                  <p class="is-number">{{ product.price }}฿</p>
                  <br />
                  <button type="button"
                    class="button is-fullwidth button-add-to-cart"
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
  </transition-custom>
</template>

<script>
import { mapActions } from "vuex"
export default {
  computed: {
    products() {
      return this.$store.state.products
    },
    shoppingCart() {
      return this.$store.state.shoppingCart
    }
  },
  created() {
    let self = this
    if (self.products.length <= 0) {
      self.$axios
        .get("https://api.jsonbin.io/b/5c52a1be15735a25423d3540")
        .then(response => {
          if (response.status == 200) {
            self.initProducts(response.data.books)
          }
        })
    }
  },
  methods: {
    ...mapActions([
      "initProducts",
      "addToShoppingCart",
      "updateProductQty",
      "removeProduct"
    ]),

    addToCart(product) {
      let self = this
      let productQty = 1
      let indexOfProduct = null

      // if have product, let check product is existing or  not
      if (self.shoppingCart.products.length > 0) {
        let indexProductExist = self.shoppingCart.products.findIndex(
          item => item.id === product.id
        )

        if (indexProductExist != -1) {
          productQty =
            productQty + self.shoppingCart.products[indexProductExist].qty
          indexOfProduct = indexProductExist
        }
      }

      let payload = {
        productIndex: indexOfProduct,
        product: {
          ...product,
          qty: productQty
        }
      }

      if (indexOfProduct != null) {
        self.updateProductQty(payload)
      } else {
        self.addToShoppingCart(payload)
      }

      self.$notify({
        group: "noti",
        title: "Suscess",
        text: `${product.title} was added to your shopping cart`,
        type: "success"
      })
    },

    beforeEnter: function(el) {
      Velocity(el, { opacity: 0, translateY: 50 }, 0)
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 50
      Velocity(
        el,
        { opacity: 1, translateY: 0 },
        {
          complete: done,
          speed: 900,
          delay: delay
        }
      )
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 50
      Velocity(
        el,
        { opacity: 0, translateY: 50 },
        {
          complete: done,
          speed: 900,
          delay: delay
        }
      )
    }
  }
}
</script>

<style lang="sass">
.product-detail
  padding: 15px
.product-list
  >.columns .column
    @media (max-width: 1169px)
      padding: 7.5px 15px !important
</style>

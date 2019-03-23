<template>
  <div class="product-list columns is-multiline">
    <div class="column is-6"
      v-for="product in products"
      :key="product.id">
      <div class="card">
        <div class="columns is-gapless">
          <div class="column is-narrow"
            style="min-width: 150px">
            <figure class="image">
              <img :src="product.cover" :alt="product.title">
            </figure>
          </div>
          <div class="column">
            <div class="product-detail">
              <h3 class="is-size-6 has-text-weight-bold">{{product.title}}</h3>
              <p>{{product.price}}฿</p>
              <br>
              <button type="button"
                class="button is-primary is-fullwidth button-add-to-cart"
                @click="addToCart(product)">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
      <!-- end card -->
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
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
    self.$axios.get('https://api.jsonbin.io/b/5c52a1be15735a25423d3540').then(response => {
      if(response.status == 200) {
        self.initProducts(response.data.books)
      }
    })
  },
  methods: {
    ...mapActions([
      'initProducts',
      'addToShoppingCart',
      'updateProductQty',
      'removeProduct'
    ]),

    addToCart(product) {
      let self = this
      let productQty = 1
      let indexOfProduct = null

      // if have product, let check product is existing or  not
      if (self.shoppingCart.products.length > 0) {
        let indexProductExist = self.shoppingCart.products.findIndex(
          item => item.id === product.id
        );

        if (indexProductExist != -1) {
          productQty = productQty + self.shoppingCart.products[indexProductExist].qty
          indexOfProduct = indexProductExist
        }
      }

      let payload = {
        productIndex: indexOfProduct,
        product: {
          ...product,
          qty: productQty,
        }
      }

      if (indexOfProduct != null) {
        self.updateProductQty(payload)
      } else {
        self.addToShoppingCart(payload)
      }
    }
  }
}
</script>

<style lang='sass'>
.product-list
  border-right: 1px solid #ddd
.product-detail
  padding: 15px
</style>

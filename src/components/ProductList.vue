<template>
  <div>
    <div class="columns is-multiline">
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
                  class="button is-primary button-add-to-cart"
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
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  computed: {
    products() {
      return this.$store.state.products
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
      'initProducts'
    ]),
    addToCart(product) {
      console.log(product)
    }
  }
}
</script>

<style lang='sass'>
.product-detail
  padding: 15px
</style>

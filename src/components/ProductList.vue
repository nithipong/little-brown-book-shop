<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-3"
        v-for="product in products"
        :key="product.id">
        <div>
          <a href="javascription:void(0)">
            <figure class="image image-center">
              <img :src="product.cover" :alt="product.title">
            </figure>
          </a>
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
    ])
  }
}
</script>

<style lang='sass'>
.product-detail
  padding: 15px

</style>

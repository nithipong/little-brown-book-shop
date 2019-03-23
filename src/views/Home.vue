<template>
  <div class="home">
    <div class="columns is-multiline is-mobile">
      <div class="column is-12-touch">
        <ProductList></ProductList>
      </div>
      <div class="column is-12-touch is-narrow-desktop">
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'
import ShoppingCart from '@/components/ShoppingCart'

export default {
  name: 'home',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<template>
  <div class="home">
    <div class="columns">
      <div class="column">
        <ProductList></ProductList>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>

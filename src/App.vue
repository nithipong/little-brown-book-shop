<template>
  <div id="app">
    <main class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title">
            Little Brown Book Shop
          </h1>
          listing
        </div>
        <div class="column is-narrow">
          <div class="cart-container">
            Cart
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass" scope>
.cart-container
  min-width: 300px
  min-height: 100vh
  background-color: #f5f5f5

</style>

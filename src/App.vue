<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item"
            href="https://bulma.io">
            <img alt="Vue logo" src="./assets/logo.png">
            <span class="has-text-weight-bold" style="padding-left: 10px">Little Brown Book Shop</span>
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="main-content container">
      <div class="columns">
        <div class="column">
          <ProductList></ProductList>
        </div>
        <div class="column is-narrow">
          <ShoppingCart></ShoppingCart>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
export default {
  name: 'app',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style lang="sass">
.main-content
  padding-top: 15px
</style>


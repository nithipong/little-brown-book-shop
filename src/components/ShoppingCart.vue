<template>
  <div class="shopping-cart-container">
    <div class="wrapper-content">
      <h2 class="title is-5">Shopping Cart</h2>

      <table class="table shopping-cart-summary is-fullwidth is-hoverable">
        <tbody>
          <tr v-for="product in shoppingCart.products"
            :key="product.id">
            <td>
              <h3 class="is-size-6 has-text-weight-bold">{{product.title}}</h3>
            </td>
            <td class="column-qty is-size-5">
              x{{product.qty}}
            </td>
            <td class="column-price is-size-5">
              {{product.price * product.qty}}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2"
              class="has-text-right">
              Discount
            </td>
            <td class="has-text-right">10</td>
          </tr>
          <tr>
            <td colspan="2"
              class="has-text-right">
              Net
            </td>
            <td class="has-text-right">100</td>
          </tr>
        </tfoot>
      </table>

      <div class="has-text-right">
        <button type="button"
          class="button is-primary">Checkout</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    shoppingCart() {
      return this.$store.state.shoppingCart
    }
  }
}
</script>

<style lang="sass" scope>
.shopping-cart-container
  width: 350px
  position: relative
  max-height: 100vh
  overflow-y: scroll
  overflow-x: hidden
  > .wrapper-content
    position: fixed
    width: 350px
    padding: 15px
    background-color: white
  .shopping-cart-summary
    margin-bottom: 10px
    .column-qty
      width: 30px
      text-align: right
    .column-price
      width: 50px
      text-align: right


</style>


<template>

  <div class="shopping-cart-container">
    <div class="wrapper-content">
      <h2 class="title is-5">Shopping Cart</h2>

      <section v-if="shoppingCart.products.length > 0">
        <table class="table shopping-cart-summary is-fullwidth is-hoverable">
          <tbody>
            <tr v-for="product in shoppingCart.products" :key="product.id">
              <td>
                <h3 class="is-size-5 has-text-weight-bold">{{ product.title }}</h3>
              </td>
              <td class="column-qty is-size-5 is-number">x{{ product.qty }}</td>
              <td class="column-price is-size-5 is-number">
                {{ (product.price * product.qty) | formatCurrency }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr v-if="shoppingCart.discount">
              <td colspan="2" class="has-text-right">
                Discount <span class="is-number">({{ shoppingCart.discountText }})</span>
              </td>
              <td class="has-text-right is-number">
                {{ shoppingCart.discount | formatCurrency }}
              </td>
            </tr>
            <tr>
              <td colspan="2" class="has-text-right">
                Net
              </td>
              <td class="has-text-right is-number has-text-weight-bold">
                {{ shoppingCart.net | formatCurrency }}
              </td>
            </tr>
          </tfoot>
        </table>

        <div class="has-text-right">
          <router-link to="/checkout" class="button is-primary">
            <span class="icon is-medium	">
              <font-awesome-icon icon="shopping-cart" />
            </span>
            <span>Checkout</span>
          </router-link>
        </div>
      </section>
      <section v-else>
        Cart is Empty
      </section>
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
  .wrapper-content
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

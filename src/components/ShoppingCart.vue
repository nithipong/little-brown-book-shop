<template>
  <div class="shopping-cart-container">
    <h2 class="title is-5">Shopping Cart</h2>
    <section v-if="shoppingCart.count > 0">
      <table class="table shopping-cart-summary is-fullwidth is-hoverable">
        <tbody>
          <tr v-for="product in shoppingCart.products"
            :key="product.id">
            <td width="100px">
              <figure class="image">
                <img :src="product.cover"
                  :alt="product.title">
              </figure>
            </td>
            <td>
              <h3 class="is-size-5 has-text-weight-bold">{{ product.title }}</h3>
            </td>
            <td class="column-qty is-size-5">x{{ product.qty }}</td>
            <td class="column-price is-size-5">
              {{ (product.price * product.qty) | formatCurrency }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr v-if="shoppingCart.discount">
            <td colspan="3"
              class="has-text-right">
              Discount <span class="">({{ shoppingCart.discountText }})</span>
            </td>
            <td class="has-text-right summary-discount">
              {{ shoppingCart.discount | formatCurrency }}
            </td>
          </tr>
          <tr>
            <td colspan="3"
              class="has-text-right has-text-weight-bold">
              Net
            </td>
            <td class="has-text-right has-text-weight-bold summary-net">
              {{ shoppingCart.net | formatCurrency }}
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
    <section v-else>
      Cart is Empty
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    "props-shopping-cart": Object
  },
  data() {
    return {
      shoppingCart: Object.assign({}, this.propsShoppingCart)
    };
  },
  methods: {
    ...mapActions(["addToShoppingCart", "updateProductQty"])
  }
};
</script>

<style lang="sass">
.shopping-cart-container
  background-color: white
  padding: 15px
  .shopping-cart-summary
    margin-bottom: 10px
    .column-qty
      width: 30px
      text-align: right
    .column-price
      width: 50px
      text-align: right
</style>

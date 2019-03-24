<template>
  <div class="about">
    <div class="columns">
      <div class="column is-7"
        id="ss">
        <ShoppingCart :props-shopping-cart="stateShoppingCart" />
        <br />
        <router-link to="/"
          class="button">
          Continue to shopping
        </router-link>
      </div>
      <div class="column is-5">
        <Payment :props-shopping-cart="stateShoppingCart" />
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCart from "@/components/ShoppingCart.vue";
import Payment from "@/components/Payment.vue";
export default {
  name: "Checkout",
  components: {
    ShoppingCart,
    Payment
  },
  computed: {
    stateShoppingCart() {
      return this.$store.state.shoppingCart;
    }
  }
};
</script>

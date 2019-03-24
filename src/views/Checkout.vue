<template>
  <div class="about">
    <div class="columns">
      <div class="column is-7"
        id="ss">
        <ShoppingCart />
        <br />
        <router-link to="/"
          class="button">
          Continue to shopping
        </router-link>
      </div>
      <div class="column is-5">
        <Payment />
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCart from "@/components/ShoppingCart";
import Payment from "@/components/Payment";
export default {
  name: "Checkout",
  components: {
    ShoppingCart,
    Payment
  }
};
</script>

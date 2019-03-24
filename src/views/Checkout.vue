<template>
  <transition-custom>
    <div class="about">
      <div class="columns">
        <div class="column is-6"
          id="ss">
          <ShoppingCart />
        </div>
        <div class="column is-6">
          <Payment />
        </div>
      </div>
      <router-link to="/"
        class="button">
        back
      </router-link>
    </div>
  </transition-custom>
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

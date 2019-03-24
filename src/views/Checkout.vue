<template>
  <transition-custom>
    <div class="about">
      <ShoppingCart></ShoppingCart>
      <router-link to="/"
        class="button">
        back
      </router-link>
    </div>
  </transition-custom>
</template>

<script>
import ShoppingCart from "@/components/ShoppingCart"
export default {
  name: "Checkout",
  components: {
    ShoppingCart
  }
}
</script>

<template>
  <div class="section is-large">
    <div class="columns is-mobile is-centered">
      <div class="column is-half-desktop">
        <div class="card">
          <div class="card-content has-text-centered">
            <br />
            <div class="has-text-centered"
              style="margin-bottom: 15px">
              <span class="icon">
                <font-awesome-icon
                  icon="check-circle"
                  size="3x"
                  style="color: #00b900" />
              </span>
            </div>
            <h1 class="title is-3">Thank You</h1>
            <p>
              Thanks for being awesome, <br />We hope you enjoy the purchase
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>

    <div class="has-text-center">
      <div class="has-text-centered">
        <router-link to="/"
          class="button is-text">
          Back to shopping
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Thankyou",
  created() {
    this.resetShoppingCart();
  },
  methods: {
    ...mapActions(["resetShoppingCart"])
  }
};
</script>

<style>
</style>

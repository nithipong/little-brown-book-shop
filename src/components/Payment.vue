<template>
  <div class="payment-container">
    <h2 class="title is-5">Payment</h2>
    <div>
      <div class="field is-horizontal is-vertical-center">
        <div class="field-label is-normal">
          <label class="label">Net</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input is-static is-large has-text-right"
                type="email"
                :value="shoppingCart.net | formatCurrency"
                readonly>
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal is-vertical-center">
        <div class="field-label is-normal">
          <label class="label">Given</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input is-large has-text-right"
                type="number"
                v-model="given"
                v-money="money"
                autofocus>
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal is-vertical-center">
        <div class="field-label is-normal">
          <label class="label">Change</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input is-static is-large has-text-right"
                type="text"
                :value="change | formatCurrency"
                readonly>
            </p>
          </div>
        </div>
      </div>

      <div class="field">
        <router-link to="/thankyou"
          type="button"
          class="button is-primary is-fullwidth">
          Pay
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Money } from "v-money";

export default {
  name: "Payment",
  directives: { money: "v-money" },
  data() {
    return {
      given: 0,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: " #",
        precision: 0,
        masked: false /* doesn't work with directive */
      }
    };
  },
  computed: {
    shoppingCart() {
      return this.$store.state.shoppingCart;
    },
    change() {
      return this.shoppingCart.net - this.given;
    }
  }
};
</script>

<style lang="sass">
.payment-container
  background-color: white
  padding: 15px
.field-label
  min-width: 100px
</style>

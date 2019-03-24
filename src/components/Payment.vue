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
                type="text"
                v-model.trim.number="given"
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
        <button type="button"
          class="button is-primary is-fullwidth"
          :disabled="!allowToPay"
          @click="payBill()">
          <span class="icon is-medium">
            <font-awesome-icon icon="money-bill-wave" />
          </span>
          <span>
            Pay
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      given: null
    };
  },
  computed: {
    shoppingCart() {
      return this.$store.state.shoppingCart;
    },
    change() {
      return this.given > 0 ? this.given - this.shoppingCart.net : null;
    },
    allowToPay() {
      return this.given > 0 && this.change >= 0 && this.shoppingCart.net > 0;
    }
  },
  methods: {
    payBill() {
      let self = this;
      setTimeout(() => {
        self.$router.push("/thankyou");
      }, 600);
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
  .label
    color: #444
    font-weight: normal
</style>

<template>
  <div id="app">
    <header class="header-container">
      <nav class="navbar is-fixed-top">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <span class="has-text-weight-bold" style="padding-left: 10px">
              Little Brown Book Shop
            </span>
          </router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/checkout" class="button is-primary">
                <span class="icon is-medium	">
                  <font-awesome-icon icon="shopping-cart" />
                </span>
                <span>Checkout</span>
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main class="main-content container">
      <router-view />
    </main>

    <notifications group="noti" :classes="'my-notification'" :position="'bottom right'" />
  </div>
</template>

<style lang="sass">
.header-container
  height: 65px
  .navbar
    height: 65px
    border-bottom: 1px solid #e4e4e4
    background-color: rgba(255,255,255,0.95)
  @media (max-width: 1169px)
    .navbar-brand
      float: left
      margin-top: 7px
    .navbar-end
      float: right
      .button
        margin-bottom: 0
.main-content
  padding: 30px 30px 60px 30px
  @media (max-width: 1169px)
    padding: 30px 15px 60px 15px
</style>

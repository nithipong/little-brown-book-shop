<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="navbar-brand">
          <router-link to="/"
            class="navbar-item">
            <img alt="Vue logo" src="./assets/logo.png">
            <span class="has-text-weight-bold" style="padding-left: 10px">Little Brown Book Shop</span>
          </router-link>
        </div>
      </nav>
    </header>
    <main class="main-content container">
      <router-view />
    </main>
  </div>
</template>

<style lang="sass">
.main-content
  padding: 30px
</style>


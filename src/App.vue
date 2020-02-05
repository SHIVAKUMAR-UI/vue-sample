<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>

    <!-- <router-link> will be rendered as a link -->
    <router-link to="/router1">Go to Router 1</router-link>
    <router-link to="/router2">Go to Router 2</router-link>
    </p>

    <!-- <router-view> will render the matched component -->
    <router-view></router-view>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

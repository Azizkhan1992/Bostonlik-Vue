<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './assets/styles/menu-style.css'
import './assets/styles/content-style.css'
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1250px;
  /* margin-top: 60px; */
}
</style>

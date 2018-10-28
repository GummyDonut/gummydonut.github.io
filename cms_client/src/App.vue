<template>
  <div id="app">
    <div class="main">
      <div class="pure-menu pure-menu-horizontal">
        <router-link class="pure-menu-heading pure-menu-link" to="/create">New</router-link>
        <router-link class="pure-menu-heading pure-menu-link" to="/modify">Edit</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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

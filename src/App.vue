<template>
  <div id="app">
    <div id="layout" class="pure-g">
        <lantern-navbar></lantern-navbar>
        <div class="content pure-u-1 pure-u-md-5-6">
        <router-view/>
        </div>
    </div>
    <link rel="stylesheet" type="text/css" href="../static/css/base-min.css">
    <link rel="stylesheet" type="text/css" href="../static/css/grids-responsive-min.css">
    <link rel="stylesheet" type="text/css" href="../static/css/buttons-min.css">
    <link rel="stylesheet" type="text/css" href="../static/css/custom/blog.css">
  </div>
</template>

<script>
import navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    'lantern-navbar': navbar
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

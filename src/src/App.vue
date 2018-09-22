<template>
  <div id="app">
    <div id="layout" class="pure-g">
        <lantern-navbar></lantern-navbar>
        <div class="content pure-u-1 pure-u-md-5-6">
        <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
import navbar from './components/partials/Navbar'

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
  color: #2c3e50;
  height:100%;
}
#layout {
    height:100%;
}
html, body{
  background-color:#23292c;
  height:100%;
}
h1,h2,h3,h4,h5,h6 {
    font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
}
p {
    font-family: 'IBM Plex Condensed', 'Georgia', Times, serif;
}
a {
    cursor:pointer;
}
</style>

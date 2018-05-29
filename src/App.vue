<template>
  <div id="app">
    <div id="layout" class="pure-g">
        <lantern-navbar></lantern-navbar>
        <div class="content pure-u-1 pure-u-md-5-6">
        <router-view/>
        </div>
    </div>
    <link rel="stylesheet" type="text/css" href="../static/css/pure-min.css">
    <link rel="stylesheet" type="text/css" href="../static/css/grids-responsive-min.css">
    <link rel="stylesheet" type="text/css" href="../static/css/custom/blog.css">

    <!--IBM Font Family  -->
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,400i|IBM+Plex+Sans+Condensed:400,400i|IBM+Plex+Sans:100,100i,400,400i,700,700i|IBM+Plex+Serif:400,400i" rel="stylesheet">
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
}
.backgroundSpace{
    background-image: url('../static/img/spaceWallpaper.jpg');
}
h1,h2,h3,h4,h5,h6 {
    font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
}
p {
    font-family: 'IBM Plex Condensed', 'Georgia', Times, serif;
}
</style>

<script>
export default {
  name: 'HelloWorld',
  created () {
    this.$axios.get('/')
      .then((response) => {
        console.log(response.data)
      })
  },
  data () {
    return {
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="pure-menu pure-menu-horizontal">
      <a href="#" class="pure-menu-heading pure-menu-link">BRAND</a>
      <ul class="pure-menu-list">
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">News</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Sports</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Finance</a></li>
      </ul>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

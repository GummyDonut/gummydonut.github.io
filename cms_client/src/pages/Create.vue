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
  <div>
    New
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

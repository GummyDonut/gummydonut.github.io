<template>
    <div>
       {{$route.params.blog}}
    </div>
</template>

<script>
export default {
  name: 'BlogEntry',
  created () {
    console.log('test')
    console.log(this.$route.params.blog)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>

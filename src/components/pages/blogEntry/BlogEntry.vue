<template>
    <div>
        {{data.title}}
    </div>
</template>

<script>
export default {
  name: 'BlogEntry',
  data () {
    return {
      data: {}
    }
  },
  methods: {

    // https://vuejs-templates.github.io/webpack/static.html
    getBlogEntry () {
      return require('../../../assets/blog/' + this.$route.params.blog + '.json')
    }
  },
  beforeMount () {
    this.data = this.getBlogEntry()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>

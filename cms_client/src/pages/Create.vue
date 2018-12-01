<script>
import BlogEditor from './components/BlogEditor'
export default {
  components: {
    BlogEditor
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
    <blog-editor editorType="new" />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div class="blog">
    <div v-for="(snippet, index) in snippets" :key="'snippet-' + index" >
        <blog-snippet :jsonData="snippet"></blog-snippet>
    </div>
  </div>
</template>

<script>
// import content containing seperate js snippets
import snippets from '../../../assets/blog/blog.json'
import blogSnippet from './components/BlogSnippet'
export default {
  name: 'Blog',
  data () {
    return {
      'snippets': snippets
    }
  },
  components: {
    'blog-snippet': blogSnippet
  },
  created () {
    console.log(snippets)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

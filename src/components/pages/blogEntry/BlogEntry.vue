<template>
    <div class="pure-g">
        <div class="blogBody pure-u-3-4">
            <h1>{{data.title}}</h1>
            <img class="entryThumbnail" :src="'/static/' + data.thumbnail"/>
            <p class="entryDate">Posted on {{data.date}}</p>
            <p v-html="blogText"></p>
        </div>
        <div class="pure-u-1-4">
        Test
        </div>
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
  computed: {
    blogText: {
        /**
        * Parse out the content so that it is readbable by the blog
        */
        get() {
            return this.data.text.replace(/\n/g, "<br>")
        }
    }
  },
  beforeMount () {
    this.data = this.getBlogEntry()
    console.log(this.data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    div.blogBody {
        background-color:#22292C;
        color:white;
        padding-left:1em;
        padding-right:1em;
    }
    .entryThumbnail {
        margin-left: 1em;
        width: 56px;
        height: 56px;
    }
    .entryDate {
        display: inline;
        font-size: 90%;
        position: relative;
        bottom: 1.25em;
        font-style: italic;
        margin-left: 1em;
    }
</style>

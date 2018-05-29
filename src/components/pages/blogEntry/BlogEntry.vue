<template>
    <div class="pure-g">
        <div class="blogBody pure-u-1 pure-u-md-3-4">
            <h1>{{data.title}}</h1>
            <img class="entryThumbnail" :src="'/static/' + data.thumbnail"/>
            <p class="entryDate">Posted on {{data.date}}</p>
            <p v-html="blogText"></p>
        </div>
        <div id="recent-section" class="pure-u-1 pure-u-md-1-4">
            <div class="pure-g">
                <div class="pure-u-1">
                    <h3 style="margin-bottom:0.25em;">Recent Posts</h3>
                    <br>
                    <div v-for="(entry, entryIndex) in recentEntries" :key="'recent-' + entryIndex">
                        <a>{{entry.title}}</a>
                        <br>
                        <br>
                    </div>
                </div>
                <div class="pure-u-1">
                    <h3 style="margin-bottom:0.25em;">Miscellaneous</h3>
                    <p>Thinking.....</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BlogEntry',
  data () {
    return {
      data: {},
      recentEntries: []
    }
  },
  methods: {

    // https://vuejs-templates.github.io/webpack/static.html
    getBlogEntry () {
      return require('../../../assets/blog/' + this.$route.params.blog + '.json')
    },
    getEntries () {
      return require('../../../assets/blog/blog.json')
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
    this.recentEntries = this.getEntries().slice(-5)
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
    #recent-section {
        padding-left:0.5em;
        background-color:#374044e8;
        color:white;
        h1,h2,h3,h4,h5,h6 {
            font-weight:400;
            text-decoration: underline;
        }
    }
</style>

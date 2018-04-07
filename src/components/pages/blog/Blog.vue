<template>
  <div class="blog">
    <div v-for="(snippet, index) in paginate" :key="'snippet-' + index" >
        <blog-snippet :jsonData="snippet"></blog-snippet>
    </div>
    <ul>
        <li v-for="(pageNumber, index) in totalPages" :key="pageNumber + '-' + index">
            <a href="#" @click="setPage(index)">{{ index + 1 }}</a>
        </li>
    </ul>
  </div>
</template>

<script>
// pagination code https://jsfiddle.net/Linusborg/9sd90474/18/
// https://jsfiddle.net/os7hp1cy/48/
// Small note filters they can be bound to v-for, only moustaches and bindings
// import content containing seperate js snippets
import snippets from '../../../assets/blog/blog.json'
import blogSnippet from './components/BlogSnippet'
export default {
  name: 'Blog',
  data () {
    return {
      'snippets': snippets,
      'currentPage': 0,
      'itemsPerPage': 6,
      'resultCount': 0
    }
  },
  components: {
    'blog-snippet': blogSnippet
  },
  created () {
    console.log(snippets)
  },
  methods: {
    setPage: function (pageNumber) {
      this.currentPage = pageNumber
    }
  },
  computed: {

    /**
    * Define the total number of pages, based on the number of items
    */
    totalPages: function () {
      return Math.ceil(this.snippets.length / this.itemsPerPage)
    },

    /**
    * Filter for showing only items that are necessary
    */
    paginate: function () {
      // reset to max
      //  if (this.currentPage >= this.totalPages) {
      //    this.currentPage = this.totalPages - 1
      //  }

      // get items
      var index = this.currentPage * this.itemsPerPage
      return snippets.slice(index, index + this.itemsPerPage)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    a {
        color: #999;
    }
    .current {
        color: red;
    }
    ul {
        padding: 0;
        list-style-type: none;
    }
    li {
        display: inline;
        margin: 5px 5px;
    }
    a.first::after {
        content:'...'
    }
    a.last::before {
        content:'...'
    }
</style>

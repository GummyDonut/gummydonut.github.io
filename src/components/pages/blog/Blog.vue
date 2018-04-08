<template>
  <div class="blog">
    <input v-model="searchText" type="text" placeholder="search"/>
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
      'resultCount': 0,
      'searchText': ''
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
      return Math.ceil(this.filtered.length / this.itemsPerPage)
    },

    filtered: function () {
      var searchLowerCaseText = this.searchText.toLowerCase()

      // loop through snippets and check which pass
      var filteredSnippets = this.snippets.filter(snippet => {
        if (snippet.snippet.toLowerCase().includes(searchLowerCaseText)) {
          return true
        } else if (snippet['date'].toLowerCase().includes(searchLowerCaseText)) {
          return true
        } else if (snippet.title.toLowerCase().includes(searchLowerCaseText)) {
          return true
        } else if (snippet.tags.toLowerCase().includes(searchLowerCaseText)) {
          return true
        }
        return false
      })

      if (filteredSnippets.length === 0) {
        filteredSnippets = snippets
      }

      return filteredSnippets
    },

    /**
    * Filter for showing only items that are necessary
    */
    paginate: function () {
      // reset to max
      //  if (this.currentPage >= this.totalPages) {
      //    this.currentPage = this.totalPages - 1
      //  }

      var filteredSnippets = this.filtered

      // get items
      var index = this.currentPage * this.itemsPerPage
      return filteredSnippets.slice(index, index + this.itemsPerPage)
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

<template>
  <div class="blog">
    <!-- Create sort by option on this page -->
    <div class="pure-g">
        <div id="sort-bar" class="pure-u-1 element-shadow">
            Sort By:
            <select v-model="sortBy">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="alphabetical">Alphabetical</option>
            </select>
            <input class="search-input" v-model="searchText" type="text" placeholder="search"/>
        </div>
    </div>
    <div v-for="(snippet, index) in paginate" :key="'snippet-' + index" >
        <blog-snippet :jsonData="snippet"></blog-snippet>
    </div>
    <br>
    <ul>
        <li class="pagination-link" v-for="(pageNumber, index) in totalPages" :key="pageNumber + '-' + index">
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
      'searchText': '',
      'sortBy': 'newest'
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
    },
    sortAlphaTitle (snippets) {
      return snippets.sort(function (a, b) {
        if (a.title < b.title) { return -1 } else if (a.title > b.title) { return 1 } else { return 0 }
      })
    },
    sortNewestDate (snippets) {
      return snippets.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date)
      })
    },
    sortOldestDate (snippets) {
      return snippets.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date)
      })
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

      // sort by whatever setting is placed in dropdown
      switch (this.sortBy) {
        case 'newest':
          filteredSnippets = this.sortNewestDate(filteredSnippets)
          break
        case 'oldest':
          filteredSnippets = this.sortOldestDate(filteredSnippets)
          break
        case 'alphabetical':
          filteredSnippets = this.sortAlphaTitle(filteredSnippets)
          break
        default:
          filteredSnippets = this.sortNewestDate(filteredSnippets)
      }

      // get items
      var index = this.currentPage * this.itemsPerPage
      return filteredSnippets.slice(index, index + this.itemsPerPage)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    #sort-bar {
      background-color: #3d4446;
      padding:1em;
      margin-bottom:1em;
    }
    input.search-input {
        color:black;
    }
    .blog {
      color: white;
      padding: 2em 1em 0;
      @media (min-width: 48em) {
          padding: 2em 3em 0;
      }
      select {
        color: black;
      }
    }
    a {
        color: #999;
    }
    .current {
        color: red;
    }
    ul {
        padding: 0;
        list-style-type: none;
        li.pagination-link {
            display: inline;
            margin: 5px 5px;
            border: 1px solid white;
            padding: 1em;
        }
    }
    a.first::after {
        content:'...'
    }
    a.last::before {
        content:'...'
    }
</style>

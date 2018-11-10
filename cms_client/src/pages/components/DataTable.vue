
<script>
export default {
  props: {
    'tableData': {
      'type': Object,
      'default' () {
        return {
          'columns': [],
          'rows': []
        }
      }
    }
  },
  data () {
    return {
      'currentPage': 0,
      'itemsPerPage': 5
    }
  },
  methods: {
    previousPage: function () {
      let previousPage = this.currentPage - 1

      if (previousPage > -1) {
        this.currentPage = previousPage
      }
    },
    nextPage: function () {
      let nextPage = this.currentPage + 1
      if (nextPage < (this.totalPages)) {
        this.currentPage = nextPage
      }
    },
    setPage: function (pageNumber) {
      this.currentPage = pageNumber
    },
    getPaginationButtonClass (paginationIndex) {
      let paginateClass = 'pure-button'
      if (paginationIndex === this.currentPage) {
        paginateClass += ' current-paginate-button'
      }
      return paginateClass
    }
  },
  computed: {
    disablePrevious () {
      return (this.currentPage === 0)
    },
    disableNext () {
      return (this.currentPage === this.totalPages - 1)
    },
    filtered: function () {
      return this.tableData.rows
    },

    /**
    * Define the total number of pages, based on the number of items
    */
    totalPages: function () {
      return Math.ceil(this.filtered.length / this.itemsPerPage)
    },
    paginate () {
    // var filteredSnippets = this.filtered
      let filteredSnippets = this.filtered
      // // sort by whatever setting is placed in dropdown
      // switch (this.sortBy) {
      //   case 'newest':
      //     filteredSnippets = this.sortNewestDate(filteredSnippets)
      //     break
      //   case 'oldest':
      //     filteredSnippets = this.sortOldestDate(filteredSnippets)
      //     break
      //   case 'alphabetical':
      //     filteredSnippets = this.sortAlphaTitle(filteredSnippets)
      //     break
      //   default:
      //     filteredSnippets = this.sortNewestDate(filteredSnippets)
      // }

      // get items
      var index = this.currentPage * this.itemsPerPage
      return filteredSnippets.slice(index, index + this.itemsPerPage)
    }
  }

}
</script>
<template>
    <div class="datatable-wrapper">
      <table class="datatable-table data pure-table pure-table-bordered">
      <thead>
        <tr>
          <th class="data-table-header-cell" v-for="(column, columnIndex) in tableData.columns" :key="'header-' + columnIndex">{{column.label}}</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(blog, blogIndex) in paginate" class="pure-table" :key="'blog-row-' + blogIndex">
            <td v-for="(col, colIndex) in tableData.columns" :key="'cell-' + blogIndex + '-' + colIndex">
              {{blog[tableData.columns[colIndex].id]}}
            </td>
          </tr>
      </tbody>
      </table>
      <div class="datatable-pagination-buttons-div">
        <button :disabled="disablePrevious" @click="previousPage" class="pure-button">Prev</button>
        <button @click="setPage(pageindex)" v-for="(pageNumber, pageindex) in totalPages" :class="getPaginationButtonClass(pageindex)" :key="'pagination-button-' + pageindex" >
          {{pageindex + 1}}
        </button>
        <button :disabled="disableNext" @click="nextPage" class="pure-button">Next</button>
      </div>
    </div>
</template>
<style lang="scss" scoped>
div.datatable-wrapper{
  width:100%;
  padding-left:1em;
  padding-right:1em;
  table.datatable-table{
    width:100%
  }
  th.data-table-header-cell{
    text-align: center
  }
}

div.datatable-pagination-buttons-div {
  float: right;
  button.current-paginate-button {
    background-color:#cacaca;
  }
}
</style>

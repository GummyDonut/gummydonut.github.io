
<script>
export default {
  props: {
    'tableData': {
      'type': Object,
      'default' () {
        return {
          'columns': [],
          'rows': [],
          'options': {
            'clickableRows': true
          }
        }
      }
    }
  },
  data () {
    return {
      'currentPage': 0,
      'itemsPerPage': 5,
      'selectedRow': '' // id containing the selected row
    }
  },
  methods: {
    /**
     * When row is clicked emit content
     * @param {JSON} rowContent contains the blog entity
     *   date: "September, 30, 2018"
     *   id: "blogEntry12"
     *   snippet: "It's been two years since, I actually posted a blog post."
     *   tags: "Testing"
     *   thumbnail: "img/thumbnail/hammer.png"
     *   title: "It's been two years"
     * @param {Number} rowIndex Number containing row index
     */
    emitRow (rowContent, rowIndex) {
      if (this.tableData.options.clickableRows) {
        this.$emit('rowClick', rowContent)
        this.selectedRow = rowContent.id
      }
    },
    /**
     * Get the class for the row
     * @param {JSON} rowContent contains the blog entity
     *   date: "September, 30, 2018"
     *   id: "blogEntry12"
     *   snippet: "It's been two years since, I actually posted a blog post."
     *   tags: "Testing"
     *   thumbnail: "img/thumbnail/hammer.png"
     *   title: "It's been two years"
     * @param {Number} rowIndex Number containing row index
     */
    getRowClass (rowContent, rowIndex) {
      let rowClass = ''

      if (this.tableData.options.clickableRows) {
        rowClass += ' hoverable'
      }

      if (this.selectedRow === rowContent.id) {
        rowClass += ' selected-row'
      }

      return rowClass
    },
    /**
     * Set the previous page
     */
    previousPage: function () {
      let previousPage = this.currentPage - 1

      if (previousPage > -1) {
        this.currentPage = previousPage
      }
    },

    /**
     * Set the next page
     */
    nextPage: function () {
      let nextPage = this.currentPage + 1
      if (nextPage < (this.totalPages)) {
        this.currentPage = nextPage
      }
    },

    /**
     * Set the page
     * @param {Number} pageNumber page number starting from zero
     */
    setPage: function (pageNumber) {
      this.currentPage = pageNumber
    },

    /**
     * Set the class for pagination button
     * @param {Number} pageNumber page number starting from zero
     */
    getPaginationButtonClass (paginationIndex) {
      let paginateClass = 'pure-button'
      if (paginationIndex === this.currentPage) {
        paginateClass += ' current-paginate-button'
      }
      return paginateClass
    }
  },
  computed: {
    /**
     * Disable the previous button when we are at the start
     */
    disablePrevious () {
      return (this.currentPage === 0)
    },
    /**
     * Disable the next button when we are at the end
     */
    disableNext () {
      return (this.currentPage === this.totalPages - 1)
    },
    /**
     * The actual content in the table
     */
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
          <tr v-for="(row, rowIndex) in paginate" @click="emitRow(row, rowIndex)" :class="getRowClass(row, rowIndex)" :key="'blog-row-' + rowIndex">
            <td v-for="(col, colIndex) in tableData.columns" :key="'cell-' + rowIndex + '-' + colIndex">
              {{row[tableData.columns[colIndex].id]}}
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
    width:100%;
    tr.selected-row{
      background-color:#cacaca;
    }
    tr.hoverable {
      cursor: pointer;
    }
    tr.hoverable:hover{
      background-color:#e0e0e0;
    }
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

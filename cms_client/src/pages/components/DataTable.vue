
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
      'itemsPerPage': 10
    }
  },
  methods: {
    setPage: function (pageNumber) {
      this.currentPage = pageNumber
    }
  },
  computed: {
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
      <button @click="setPage(pageindex)" v-for="(pageNumber, pageindex) in totalPages" :key="'pagination-button-' + pageindex" class="pure-button">
        {{pageindex}}
      </button>
      </div>
    </div>
</template>
<style lang="scss" scoped>
div.datatable-wrapper{
  width:100%;
  table.datatable-table{
    width:100%
  }
  th.data-table-header-cell{
    text-align: center
  }
}

div.datatable-pagination-buttons-div {

}
</style>

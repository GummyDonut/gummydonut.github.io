<script>
import BlogEditor from './components/BlogEditor'
import DataTable from './components/DataTable'
export default {
  components: {
    BlogEditor,
    DataTable
  },

  data () {
    return {
      'tableData': {
        'columns': [
          {
            'id': 'id',
            'label': 'ID'
          },
          {
            'id': 'title',
            'label': 'Title'
          },
          {
            'id': 'date',
            'label': 'Date'
          },
          {
            'id': 'tags',
            'label': 'Tags'
          }
        ],
        'rows': [],
        'options': {
          'clickableRows': true
        }
      },
      'editorData': {

      }
    }
  },

  computed: {
  },
  // on start of the application
  created () {
    this.listBlogs()
  },
  methods: {

    /**
     * Make an axios call that will
     */
    async listBlogs () {
      let response = await this.$axios.get('/blogs')
      let data = response.data
      if (data.error) {
        alert(data.error.message)
      } else {
        this.tableData.rows = response.data
      }
    },
    datatableRowClick (rowContent) {
      this.editorData = rowContent
    }
  }
}
</script>

<template>
  <div>
    <data-table @rowClick="datatableRowClick" :tableData="tableData" />
    <br>
    <blog-editor :editorData="editorData"/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

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
        'rows': []
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
    }
  }
}
</script>

<template>
  <div>
    <data-table :tableData="tableData" />
    <br>
    <blog-editor />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

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
      'editorData': {},
      'snippetData': {}
    }
  },

  computed: {

    /**
     * Determine if we should show the editor based on whether the content
     * is selected
     */
    showEditor () {
      return Object.keys(this.editorData).length > 0
    }
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
    async datatableRowClick (rowContent) {
      // based on row content, get the blog entry
      try {
        let blogEntry = (await this.$axios.get('/blogs/' + rowContent.id)).data
        this.editorData = blogEntry
        this.snippetData = rowContent
      } catch (e) {
        console.log('Could not get blog entry: ')
        console.log(e)
      }
    }
  }
}
</script>

<template>
  <div>
    <data-table @rowClick="datatableRowClick" :tableData="tableData" />
    <br>
    <br>
    <br>
    <hr style="width:80%;">
    <div style="margin-top:1em;" v-show="!showEditor">
      Please select a row from the table to edit data
    </div>
    <blog-editor v-show="showEditor" editorType="modify" :editorData="editorData" :snippetData="snippetData"/>
    <br>
    <br>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

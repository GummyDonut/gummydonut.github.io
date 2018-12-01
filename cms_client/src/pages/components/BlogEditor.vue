<script>
const THUMBNAILLOCAL = 'img/thumbnail/'
export default {
  props: {
    // editorType is modify and new
    editorType: {
      'type': String,
      'required': true
    },
    editorData: {
      'type': Object,
      'default' () {
        return {
          date: '',
          id: '',
          tags: '',
          thumbnail: '',
          title: '',
          text: ''
        }
      }
    },
    snippetData: {
      'type': Object,
      'default' () {
        return {
          snippet: '',
          date: '',
          thumbnail: '',
          title: '',
          id: '',
          tags: ''
        }
      }
    }
  },
  data () {
    return {
      showEditor: true,
      showPreview: false,
      newThumbnail: null
    }
  },
  methods: {
    /**
     * Emit data so that we can preview
     */
    previewBlog () {
      this.showPreview = true
      this.showEditor = false
    },
    backToEditor () {
      this.showPreview = false
      this.showEditor = true
    },
    processFile (event) {
      this.newThumbnail = event.target.files[0]

      // update the thumbnail location when new image added
      this.thumbnail = THUMBNAILLOCAL + this.newThumbnail.name
    },
    submitForm () {
      let formData = new FormData()
      formData.append('newThumbnail', this.newThumbnail)
      formData.append('text', this.text)
      formData.append('title', this.title)
      formData.append('thumbnail', this.thumbnail)
      formData.append('date', this.date)

      // based on url update the route
      let url = ''
      if (this.editorType === 'modify') {
        url = '/blogs/modify/' + this.id
      } else if (this.editorType === 'new') {
        url = '/blogs/create'
      }

      this.$axios.post(url,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function (response) {
        alert('status update: ' + response.data.status)
        console.log(response)
      }).catch(function (err) {
        alert('status update: ' + err)
        console.log('FAILURE!!')
      })
    }
  },
  /**
   * Use one or the other
   */
  computed: {
    id: {
      get () {
        return this.snippetData.id || this.editorData.id
      }
    },
    title: {
      get () {
        return this.snippetData.title || this.editorData.title
      },
      set (newValue) {
        this.snippetData.title = newValue
        this.editorData.title = newValue
      }
    },
    date: {
      get () {
        return this.snippetData.date || this.editorData.date
      },
      set (newValue) {
        this.snippetData.date = newValue
        this.editorData.date = newValue
      }
    },
    tags: {
      get () {
        return this.snippetData.tags
      },
      set (newValue) {
        this.snippetData.tags = newValue
      }
    },
    thumbnail: {
      get () {
        return this.snippetData.thumbnail || this.editorData.thumbnail
      },
      set (newValue) {
        this.snippetData.thumbnail = newValue
        this.editorData.thumbnail = newValue
      }
    },
    text: {
      get () {
        return this.editorData.text
      },
      set (newValue) {
        this.editorData.text = newValue
      }
    },
    previewtext: {
      get () {
        if (this.text) {
          return this.text.replace(/\n/g, '<br>')
        } else {
          return ''
        }
      }
    }
  }
}
</script>

<template>
  <div class="editor-wrapper">
    <div v-show="showEditor">
      <form class="pure-form pure-form-aligned">
        <fieldset>
          <div class="pure-control-group">
            <label>Title: </label>
            <input type="text" v-model="title" />
          </div>
          <div class="pure-control-group">
            <label>Date: </label>
            <input type="text" v-model="date" />
          </div>
          <div class="pure-control-group">
            <label>Tags: </label>
            <input type="text" v-model="tags" />
          </div>
          <div class="pure-control-group">
            <label>Thumbnail: </label>

            <!-- This is the current route we for the thumbnail -->
            <input type="text" readonly v-model="thumbnail" />
            <input type="file" @change="processFile($event)">
          </div>
          <div class="pure-control-group">
            <label>Content: </label>
            <textarea style="height:200px;" v-model="text" class="pure-input-1-2" placeholder="Content"></textarea>
          </div>
        </fieldset>
      </form>
      <button @click="previewBlog" class="pure-button pure-button-primary">Preview</button>
      <button @click="submitForm" class="pure-button pure-button-primary">Submit</button>
    </div>
    <div v-show="showPreview">
      <div v-html="previewtext" class="previewContent">
      </div>
      <button @click="backToEditor" class="pure-button pure-button-primary">Back</button>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
div.editor-wrapper {
  margin-top:1em;
}
div.previewContent{
  text-align: left;
}
</style>

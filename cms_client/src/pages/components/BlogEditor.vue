<script>
export default {
  props: {
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
      showPreview: false
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
    }
  },
  /**
   * Use one or the other
   */
  computed: {
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
        return this.text.replace(/\n/g, '<br>')
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
            <input type="text" v-model="thumbnail" />
          </div>
          <div class="pure-control-group">
            <label>Content: </label>
            <textarea style="height:200px;" v-model="text" class="pure-input-1-2" placeholder="Content"></textarea>
          </div>
        </fieldset>
      </form>
      <button @click="previewBlog" class="pure-button pure-button-primary">Preview</button>
      <button class="pure-button pure-button-primary">Submit</button>
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

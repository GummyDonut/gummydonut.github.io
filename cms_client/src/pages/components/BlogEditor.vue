<script>
export default {
  props: {
    editorData: {
      'type': Object,
      'default' () {
        return {
          date: '',
          id: '',
          snippet: '',
          tags: '',
          thumbnail: '',
          title: ''
        }
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<template>
  <div class="editor-wrapper">
    {{editorData}}
    <form class="pure-form pure-form-aligned">
      <fieldset>
        <div class="pure-control-group">
          <label for="name">Title: </label>
          <input type="text" v-model="editorData.title" />
        </div>
        <div class="pure-control-group">
          <label for="name">Date: </label>
          <input type="text" v-model="editorData.title" />
        </div>
      </fieldset>
    </form>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
div.editor-wrapper {
  margin-top:1em;
}
</style>

<script>
export default {
  'props': {
    'title': {
      'type': String,
      'required': true
    },
    'date': {
      'type': String,
      'required': true
    }
  }
}
</script>
<template>
    <div style="text-align:left;" class="pure-g">
        <div class="pure-u-1 pure-u-md-1-6">
            <slot name="left-content"></slot>
        </div>
        <div class="pure-u-1 pure-u-md-5-6">
            <h3 class="job-title">{{title}}</h3>
            <p class="job-date">{{date}}</p>
            <slot name="right-content"></slot>
        </div>
    </div>
</template>
<style lang="scss" scoped>

.job-title {
  margin-top:0.25em;
  margin-bottom:0em;
  font-weight: bold;
}

.job-date {
  margin-top:0em;
}

</style>

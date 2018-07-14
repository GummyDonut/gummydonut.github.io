<script>
import particlesJs from '@/components/partials/ParticlesJS'
export default {
  name: 'Resume',
  data () {
    return {
      isMobile: false
    }
  },
  mounted () {
    debugger
    if (window.innerWidth <= 800 && window.innerHeight <= 600) {
      this.isMobile = true
    }
  },
  methods: {
    getClasses () {
      let background = (this.isMobile) ? ' mobile-background' : ''
      return 'resume-content' + background
    }
  },
  components: {
    particlesJs
  }
}
</script>
<template>
    <div>
      <particles-js v-if="!isMobile" />
      <div :class="getClasses()">
        <h1>Test</h1>
      </div>
    </div>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.resume-content {
  position: absolute;
  color: white;
  width: 83.33333333333%;
  text-align:center;
  /*At 760px use 100%*/
  @media (max-width: 760px) {
    width: 100%;
  }
}
.mobile-background {
  background-color: black;
  width: 100%;
  height: 100%;
  width: 83.33333333333%;
  @media (max-width: 760px) {
    width: 100%;
  }
}
</style>

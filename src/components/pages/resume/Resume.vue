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
        <div class="pure-g">
          <div class="pure-u-1">
            <a href="https://www.linkedin.com/in/peterhoang1/">
              <img class="hover-icon" style="margin-bottom:-1.25em;" :src="'/static/img/github_icon.png'">
            </a>
            <a href="https://github.com/lantern77">
            <img class="hover-icon" style="width:92px;height:92px;" :src="'/static/img/linkedin-icon.png'">
            </a>
          </div>
          <div class="pure-u-1">
            <h1 class="resume-title">Work Experience</h1>
            <div class="resume-section">
              Test
            </div>
          </div>
          <div class="pure-u-1">
            <h1 class="resume-title">Side Projects</h1>
          </div>
          <div class="pure-u-1">
            <h1 class="resume-title">Outside Work</h1>
          </div>
          <div class="pure-u-1">
            <h1 class="resume-title">Technology &amp; Related</h1>
          </div>
          <div class="pure-u-1">
            <h1 class="resume-title">Education</h1>
          </div>
        </div>
      </div>
    </div>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.resume-section {
  background-color: #3d4446;
  width:75%;
  margin-left:auto;
  margin-right:auto;
}
.resume-title {
  cursor:pointer;
  transition: 0.2s;
  display:inline-block;
}
.resume-title:hover {
  transform: scale(1.1);
}

// CSS for icons
.hover-icon {
  transition: 0.2s;
  cursor: pointer;
}
.hover-icon:hover {
  transform: scale(1.1);
}
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

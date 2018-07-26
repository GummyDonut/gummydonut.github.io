<script>
import particlesJs from '@/components/partials/ParticlesJS'
export default {
  name: 'Resume',
  data () {
    return {
      isMobile: false,
      showWorkExperience: false,
      showSideProject: false,
      showWork: false,
      showTech: false,
      showEducation: false
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
            <a target="_blank" href="https://www.linkedin.com/in/peterhoang1/">
              <img class="hover-icon" style="margin-bottom:-1.25em;" :src="'/static/img/github_icon.png'">
            </a>
            <a target="_blank" href="https://github.com/lantern77">
            <img class="hover-icon" style="width:92px;height:92px;" :src="'/static/img/linkedin-icon.png'">
            </a>
          </div>
          <div class="pure-u-1">
            <h1 @click="showWorkExperience = !showWorkExperience" class="resume-title">Work Experience</h1>
            <transition name="fade">
                <div v-if="showWorkExperience" class="resume-section">
                  Work Experience
                </div>
            </transition>
          </div>
          <div class="pure-u-1">
            <h1 @click="showSideProject = !showSideProject" class="resume-title">Side Projects</h1>
            <transition name="fade">
                <div v-if="showSideProject" class="resume-section">
                  Side Projects
                </div>
            </transition>
          </div>
          </div>
          <div class="pure-u-1">
            <h1 @click="showWork = !showWork" class="resume-title">Outside Work</h1>
            <transition name="fade">
                <div v-if="showWork" class="resume-section">
                  Side Projects
                </div>
            </transition>
          </div>
          <div class="pure-u-1">
            <h1 @click="showTech = !showTech" class="resume-title">Technology &amp; Related</h1>
            <transition name="fade">
                <div v-if="showTech" class="resume-section">
                  Side Projects
                </div>
            </transition>
          </div>
          <div class="pure-u-1">
            <h1 @click="showEducation = !showEducation" class="resume-title">Education</h1>
            <transition name="fade">
                <div v-if="showEducation" class="resume-section">
                  Side Projects
                </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

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

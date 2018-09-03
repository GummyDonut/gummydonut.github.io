<script>
import StarsSection from '@/components/partials/StarsJS'
import ResumeSection from './components/resume-section'
export default {
  name: 'Resume',
  data () {
    return {
      showWorkExperience: false,
      showSideProject: false,
      showWork: false,
      showTech: false,
      showEducation: false
    }
  },
  methods: {
    getClasses () {
      return 'resume-content'
    },
    // Note dataKey is a string
    toggleSection (dataKey) {
      this[dataKey] = !this[dataKey]
    }
  },
  components: {
    ResumeSection,
    StarsSection
  }
}
</script>
<template>
    <div>
      <stars-section />
      <div :class="getClasses()">
        <div class="pure-g">
          <div class="pure-u-1">
            <a target="_blank" href="https://github.com/lantern77">
              <img class="hover-icon" style="margin-bottom:-1.25em;" :src="'/static/img/github_icon.png'">
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/peterhoang1/">
            <img class="hover-icon" style="width:92px;height:92px;" :src="'/static/img/linkedin-icon.png'">
            </a>
          </div>
          <div class="pure-u-1">
            <h1 @click="toggleSection('showWorkExperience')" class="resume-title">Work Experience</h1>
            <transition name="fade">
                <div v-if="showWorkExperience" class="resume-section element-shadow">
                    <resume-section title="Evertz Microsystems - Junior Design Engineer" date="May 2017 - Present">
                        <template slot="left-content">
                        left
                        </template>
                        <template slot="right-content">
                          Big data application developer, specifically with designing and implementing third party applications
                          that hook into the ELK stack(Elasticsearch, Logstash, Kibana). My main focus is UI development on the 6 member
                          team, and involves working in a fast paced environment launching and generating tools for the companies' on site
                          engineers.
                          <br>
                          <br>
                          Technologies involved:
                          <br>
                          JavaScript, VueJS, NodeJS, ExpressJS, Java, SpringMVC, SVN, Linux, Windows, HTML, and CSS  .
                          <br>
                          <br>
                          Milestones: 
                          <br>
                          6 month conversion of legacy UI from JQuery to a fully fledged framework VueJS. Streamlining the companies
                          code base into a more manageable, componentized code base.
                          <br>
                          Discussion and contribution to open source community in the form of bug fixes and suggestions
                        </template>
                    </resume-section>
                    <hr>
                    <resume-section title="Hendershot Research Consultants - FrontEnd Developer" date="June 2014 - April 2017">
                        <template slot="left-content">
                        left
                        </template>
                        <template slot="right-content">
                        Freelance part-time developer, sole technical member on the team.
                        <br>
                        Responsible for complete vintage reboot of the brand. Involved relaunching the website with a fresh content management system.
                        Created numerous online surveys and questionaire software to be used is client studies and research.
                        Improved brand awareness with canadian organizations such as Ontario Dental Hygenist Association and Hamilton Foods.
                        <br>
                        <br>
                        Technologies:
                        <br>
                        PHP, mySQL, codeIgniter, JavaScript, HTML, and CSS
                        <br>
                        <br>
                        Milestones and work environment:
                        <br>
                        Fast paced work environment, with strict biweekly deadlines while completing university at the same time. Resulting in large amounts of crunch.
                        <br>
                        Remote work whilst consisting of weekly meetings for progress updates and changes.
                        <br>
                        Increased Company brand, with redesign of website and technical expertise.
                        </template>
                    </resume-section>
                    <hr>
                    <resume-section title="Evertz Microsystems - Student Design Engineer (Co-op)" date="May 2015 - Aug 2016">
                        <template slot="left-content">
                        left
                        </template>
                        <template slot="right-content">
                          Launched and maintained a content managment system that auto generate HTML and JavaScript Web components
                          that is used by Evertz Engineers.
                          Developed modules and user interfaces for big data systems, using Elasticsearch, JavaScript, and Java2EE.
                          <br>
                          <br>
                          Technologies involved:
                          <br>
                          Java, JavaScript, Java2EE, HTML and CSS
                          <br>
                          <br>
                          Milestones: 
                          <br>
                          Fast paced work environment, involving daily scrums and biweekly sprints.
                          Semi-flexible schedule for students. A great learning experience. 
                          <br>
                        </template>
                    </resume-section>

                </div>
            </transition>
          </div>
          <div class="pure-u-1">
            <h1 @click="toggleSection('showSideProject')" class="resume-title">Side Projects</h1>
            <transition name="fade">
                <div v-if="showSideProject" class="resume-section element-shadow">
                  <div>
                  <h2>This Blog you are reading right now</h2>
                  This blog you're reading right now, originally it was created on a Octopress framework. However, unfortunately the noobish developer I was, I developing it on a Windows machine. After about a few weeks, Ruby failed on me. Spending about another few weeks trying to get it working again. I decided to learn AngularJS, to be alot more marketable. A few years later I then wanted to reimplement my blog into vueJS which is where the state of the website is now.
                  This blog consists of me practicing implementations, algorithms and code.
                  </div>
                  <hr>
                  <div>
                  <h2>Android Taxi Carpool App - CompanionCab</h2>
                  Lead a team of six, while exhibiting, software documentation and team-work. 
                  A university project designed for users, such that they can book taxis together (During early uber days)
                  I designed the http protocol such that the phone can connect to the servers.
                  I also created the login and registration system as well.
                  This project was very fun as everyone in the group had no experience with android and great bonding moments came out of this.
                  Used Android, Java, PHP, Restful Routing.
                  </div>
                  <hr>
                  <h2>Dimension Splitter Puzzle Game</h2>
                  <div>
                  One of my early game projects. It is a platformer involving the player travel between two dimensions. Created by a three person team, we had a total of 48 hours to create this simple game demo. Simple and fun!
                  </div>
                  <div>
                  <hr>
                  <h2>McMaster Software Engineering Club - Website Development</h2>
                  Created the log-in and registration system for the Software Engineering Club's website using both PHP and mySQL. Eventually reworked
                  portion of site to use Laravel.
                  </div>
                  <hr>
                </div>
            </transition>
          </div>
          </div>
          <div class="pure-u-1">
            <h1 @click="toggleSection('showWork')" class="resume-title">Extracurricular</h1>
            <transition name="fade">
                <div class="pure-g" v-if="showWork">
                  <div style="padding:1em;" class="pure-u-1 pure-u-md-1-2">
                    <div class="section element-shadow">
                      Test
                    </div>
                  </div>
                  <div style="padding:1em;" class="pure-u-1 pure-u-md-1-2">
                    <div class="section element-shadow">
                      Test
                    </div>
                  </div>
                </div>
            </transition>
          </div>
          <div class="pure-u-1">
            <h1 @click="toggleSection('showTech')" class="resume-title">Technology &amp; Related</h1>
            <transition name="fade">
                <div v-if="showTech" class="pure-g">
                 <div style="padding:1em;" class="pure-u-1 pure-u-md-1-3">
                    <div class="section element-shadow">
                      Test
                    </div>
                  </div>
                  <div style="padding:1em;" class="pure-u-1 pure-u-md-1-3">
                    <div class="section element-shadow">
                      Test
                    </div>
                  </div>
                  <div style="padding:1em;" class="pure-u-1 pure-u-md-1-3">
                    <div class="section element-shadow">
                      Test
                    </div>
                  </div>
                </div>
            </transition>
          </div>
          <div class="pure-u-1">
            <h1 @click="toggleSection('showEducation')" class="resume-title">Education</h1>
            <transition name="fade">
                <div v-if="showEducation" class="resume-section element-shadow">
                  My education
                </div>
            </transition>
          </div>
        </div>
      </div>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
hr {
  width:80%;
  margin-top:0.75em;
  margin-bottom:0.75em;
}

/*Transition animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.section {
  background-color: #3d4446;
  margin-left:auto;
  margin-right:auto;
  padding:0.5em;
}
.resume-section {
  background-color: #3d4446;
  width:95%;
  margin-left:auto;
  margin-right:auto;
  padding:0.5em;
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

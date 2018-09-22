<script>
import StarsSection from '@/components/partials/StarsJS'
import ResumeSection from './components/resume-section'
export default {
  name: 'Resume',
  data () {
    return {
      showSection: {
        'workExperience': false,
        'sideProjects': false,
        'work': false,
        'tech': false,
        'education': false
      }
    }
  },
  methods: {
    getClasses () {
      return 'resume-content'
    },
    // Note dataKey is a string
    toggleSection (dataKey) {
      // close all sections beside the one that was clicked
      for (let sectionKey in this.showSection) {
        if (sectionKey === dataKey) {
          continue
        }

        this.showSection[sectionKey] = false
      }

      this.showSection[dataKey] = !this.showSection[dataKey]
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
      <div :class="getClasses()" style="margin-bottom:5em;">
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
            <h1 @click="toggleSection('workExperience')" class="resume-title">Work Experience</h1>
            <transition name="fade">
                <div v-if="showSection.workExperience" class="resume-section element-shadow">
                    <resume-section title="Evertz Microsystems - Junior Design Engineer" date="May 2017 - Present">
                        <template slot="left-content">
                          <div style="margin-top:1em;">
                            <img class="work-exp-img" :src="'/static/img/evertz_logo.png'">
                            <img class="work-exp-img" :src="'/static/img/insite_screen2.png'">
                            <img class="work-exp-img" :src="'/static/img/inSITE_logo.PNG'">
                          </div>
                        </template>
                        <template slot="right-content">
                          Big data application developer, specifically with designing and implementing third party applications
                          that hook into the ELK stack(Elasticsearch, Logstash, Kibana). My main focus is UI development on the 6 member
                          team, and involves working in a fast paced environment launching and generating tools for the companies' on site
                          engineers.
                          <br>
                          <br>
                          <b>Technologies involved:</b>
                          <br>
                          JavaScript, VueJS, NodeJS, ExpressJS, Java, SpringMVC, SVN, Linux, Windows, HTML, and CSS  .
                          <br>
                          <br>
                          <b>Milestones:</b>
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
                          <div style="margin-top:1em;">
                            <img class="work-exp-img" :src="'/static/img/hrc_new_logo.png'">
                            <img class="work-exp-img" :src="'/static/img/hrc_screenshot.PNG'">
                          </div>
                        </template>
                        <template slot="right-content">
                        Freelance part-time developer, sole technical member on the team.
                        <br>
                        Responsible for complete vintage reboot of the brand. Involved relaunching the website with a fresh content management system.
                        Created numerous online surveys and questionaire software to be used is client studies and research.
                        Improved brand awareness with canadian organizations such as Ontario Dental Hygenist Association and Hamilton Foods.
                        <br>
                        <br>
                        <b>Technologies:</b>
                        <br>
                        PHP, mySQL, codeIgniter, JavaScript, HTML, and CSS
                        <br>
                        <br>
                        <b>Milestones and work environment:</b>
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
                          <div style="margin-top:1em;">
                            <img class="work-exp-img" :src="'/static/img/evertz_logo.png'">
                            <img style="margin-top: 0.5em;" class="work-exp-img" :src="'/static/img/careers.employees.jpg'">
                          </div>
                        </template>
                        <template slot="right-content">
                          Launched and maintained a content managment system that auto generate HTML and JavaScript Web components
                          that is used by Evertz Engineers.
                          Developed modules and user interfaces for big data systems, using Elasticsearch, JavaScript, and Java2EE.
                          <br>
                          <br>
                          <b>Technologies involved:</b>
                          <br>
                          Java, JavaScript, Java2EE, HTML and CSS
                          <br>
                          <br>
                          <b>Milestones:</b>
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
            <h1 @click="toggleSection('sideProjects')" class="resume-title">Side Projects</h1>
            <transition name="fade">
                <div v-if="showSection.sideProjects" class="resume-section element-shadow">
                  <div style="margin-top:1em;">
                  <img class="work-exp-img" :src="'/static/img/logo.png'">
                  <h2>This Blog you are reading right now</h2>
                  This blog you're reading right now, originally it was created on a Octopress framework. However, unfortunately the noobish developer I was, I developing it on a Windows machine. After about a few weeks, Ruby failed on me. Spending about another few weeks trying to get it working again. I decided to learn AngularJS, to be alot more marketable. A few years later I then wanted to reimplement my blog into vueJS which is where the state of the website is now.
                  This blog consists of me practicing implementations, algorithms and code.
                  <br>
                  <br>
                  <b>Technologies:</b> VueJS, HTML, CSS, and JS
                  </div>
                  <hr>
                  <div>
                  <img class="work-exp-img" :src="'/static/img/compCab.png'">
                  <h2>Android Taxi Carpool App - CompanionCab</h2>
                  Lead a team of six, while exhibiting, software documentation and team-work.
                  A university project designed for users, such that they can book taxis together (During early uber days)
                  I designed the http protocol such that the phone can connect to the servers.
                  I also created the login and registration system as well.
                  This project was very fun as everyone in the group had no experience with android and great bonding moments came out of this.
                  <br>
                  <br>
                  <b>Technologies:</b> Android, Java, and PHP
                  </div>
                  <hr>
                  <img class="work-exp-img" :src="'/static/img/game_circ.png'">
                  <h2>Dimension Splitter Puzzle Game</h2>
                  <div>
                  One of my early game projects. It is a platformer involving the player travel between two dimensions. Created by a three person team, we had a total of 48 hours to create this simple game demo. Simple and fun!
                  <br>
                  <b>Technologies:</b> GameMaker Studios
                  </div>
                  <div>
                  <hr>
                  <img class="work-exp-img" :src="'/static/img/sec_circ.png'">
                  <h2>McMaster Software Engineering Club - Website Development</h2>
                  Created the log-in and registration system for the Software Engineering Club's website using both PHP and mySQL. Eventually reworked
                  portion of site to use Laravel.
                  <br>
                  <b>Technologies:</b> Larvavel, PHP, JS, HTML, and CSS
                  </div>
                  <hr>
                </div>
            </transition>
          </div>
          </div>
          <div class="pure-u-1">
            <h1 @click="toggleSection('work')" class="resume-title">Extracurricular</h1>
            <transition name="fade">
                <div class="pure-g" v-if="showSection.work">
                  <div style="padding:1em;" class="pure-u-1 pure-u-md-1-2">
                    <div class="section element-shadow">
                      <h3>Software Engineering Club - VP External</h3>
                      <p>
                        This club was an important thing of my life, it gave me community, connected me to other people and helped me feel like I had purpose.
                        Thus I decided to become the VP External of the club, I managed and planned club outreach - this included club social events, tutorials and sponsor relationships,
                        . With this I exercised advanced time management and leadership.
                      </p>
                      <img class="extracurricular-img" :src="'/static/img/clubPhoto.jpg'">
                    </div>
                  </div>
                  <div style="padding:1em;" class="pure-u-1 pure-u-md-1-2">
                    <div class="section element-shadow">
                      <h3>CUSEC 2015 - Head Delegate</h3>
                      <p>
                        One of the most hype events of that year, it's a software conference ran completely by students.
                        Located in Montreal, it wass the best chance to get connected with professionals from all across the world.
                        In 2015, we got to meet the a Bruce Schneier a leader in cybersecurity and twitter personality @tenderlove.
                        As head delegate I book McMaster University's bus, hotel, and help students get involved with this event.
                        CUSEC 2015 McMaster had a delegation of 56 students coming along all with the intention to learn and expand their horizons.
                        This event means alot too me giving me more experience than most formal education have all combined.
                        <br>
                        <a href="http://2015.cusec.net/" target="blank">CUSEC 2015</a>
                      </p>
                      <img class="extracurricular-img" :src="'/static/img/cusec2015.png'">
                    </div>
                  </div>
                </div>
            </transition>
          </div>
          <div class="pure-u-1">
            <h1 @click="toggleSection('tech')" class="resume-title">Technology &amp; Related</h1>
            <transition name="fade">
                <div v-if="showSection.tech" class="pure-g">
                 <div style="padding:1em;" class="pure-u-1 pure-u-md-1-3">
                    <div class="section element-shadow">
                      <h3 style="text-decoration: underline;">
                        Back-end
                      </h3>
                      <h4>
                        Java
                      </h4>
                      <h4>
                        PHP
                      </h4>
                      <h4>
                        SQL
                      </h4>
                      <h4>
                        Python
                      </h4>
                      <h4>
                        NodeJS
                      </h4>
                    </div>
                  </div>
                  <div style="padding:1em;" class="pure-u-1 pure-u-md-1-3">
                    <div class="section element-shadow">
                      <h3 style="text-decoration: underline;">
                        Web and FrontEnd
                      </h3>
                      <h4>
                        VueJS
                      </h4>
                      <h4>
                        JQuery
                      </h4>
                      <h4>
                        HTML
                      </h4>
                      <h4>
                        CSS
                      </h4>
                      <h4>
                        JavaScript
                      </h4>
                      <h4>
                        Laravel
                      </h4>
                    </div>
                  </div>
                  <div style="padding:1em;" class="pure-u-1 pure-u-md-1-3">
                    <div class="section element-shadow">
                      <h3 style="text-decoration: underline;">
                        Tools/API
                      </h3>
                      <h4>
                        Git
                      </h4>
                      <h4>
                        SVN
                      </h4>
                      <h4>
                        Linux
                      </h4>
                      <h4>
                        Photoshop/Gimp
                      </h4>
                      <h4>
                        VIM
                      </h4>
                    </div>
                  </div>
                </div>
            </transition>
          </div>
          <div class="pure-u-1">
            <h1 @click="toggleSection('education')" class="resume-title">Education</h1>
            <transition name="fade">
                <div v-if="showSection.education" class="resume-section element-shadow">
                  <h4 style="text-decoration: underline; display:inline-block; margin-top:-0.5em;">
                    McMaster University-B.Eng Software Engineering 2016 - Hamilton Ontario
                    <img style="display:inline-block; width:42px; height:42px; position:relative; top:1em;" :src="'/static/img/Uni_mcmaster_logo.svg'">
                  </h4>
                  <p>
                    The McMaster Software Engineering program prepared me for a career in a rapidly changing environment.
                    We were taught the fundamentals of design, documentation, algorithms, and theory.
                    Topics that will last a life-time.
                    With that participation in the university's extracurricular has taught me much about team-work,
                    co-ordination, and time management.
                  </p>
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
  h1,h2,h3,h4,h5,h6,h7 {
    font-weight: bold
  }
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
.extracurricular-img{
  width:100%;
}
.work-exp-img{
  width:150px;
}
</style>

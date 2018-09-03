<template>
  <div class="center-align about">
    <br>
    <br>
    <div style="width:auto;display:inline-block;" class="about-section element-shadow">
      <h1 style="margin-top:0em;">Peter Hoang</h1>
      <!-- Replace with profile pic here -->
      <img src="static/img/logo.png" class="profile-img">
      <br>
      <p style="text-align:center; margin:0">
        December 07 1994
      </p>
      <hr style="width:45%;">
      <small>
        peter_hoang2@hotmail.com
      </small>
      <br>
      <small>
      Software Developer and Hobbyist
      </small>
    </div>
    <br>
    <br>
    <br>
    <div class="pure-g about-section element-shadow">
      <div style="text-align:left;" class="pure-u-1 pure-u-md-3-4" >
        <h1>Oha! My name is Peter</h1>
        <p>
         I'm just your average weird person. I hate Wednesdays, I eat food, I use VIM as my code-editor,
         and I love to ramble on about my simplistic hobbies. 
         I am very approachable, I live to laugh and love to talk.
         Sure I'm not the most exciting person, I don't jump out of planes or off cliffs for the thrills. 
         But it's the small details that make me excited, little bits of trivia, weird oddities, the simple things in life. 
         I'm super easy to work with, grab my attention and I will put my ear to your mouth.... Uhhhh not in a weird way... Please don't be afraid ...I'm nice...
        </p>
      </div>
      <div class="pure-u-1 pure-u-md-1-4">
      </div>
    </div>
    <br>
    <br>
    <div class="pure-g about-section element-shadow">
      <div class="pure-u-1 pure-u-md-1-4">
      </div>
      <div style="text-align:right;" class="pure-u-1 pure-u-md-3-4" >
        <h1>What I do?</h1>
        <p>
        I am a software developer, that mainly focuses on front-end experiences.
        Developing User Interfaces that suit the requests of my clients.
        I have worked for Hendershot research consultants and am currently working with Evertz microsystems.
        Listening to others, and dissecting people's desire is my expertise XD. 
        At the very least, I enjoy my job very much as I get a chance to create people's wildest dreams in a digital format.
        For more check my <a>resume section</a>.
        </p>
      </div>
    </div>
    <br>
    <br>

    <!--List companies that I worked with -->
    <!--Show social media links -->

    <div class="pure-g about-section element-shadow">
      <div class="pure-u-1">
        <h1>Hobbies</h1>
        <p>
          When the work is done, it's time to cool off. Hobbies are a huge attribute to my success,
          they have helped me develop or enhance skills that I can apply at the workplace. Hobbies help
          have been the largest tool for challenging myself on a daily basis and help manage stress when the
          going gets tough. So here are some hobbies I do regularly, you might enjoy some of these.
        </p>
      </div>
    </div>
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1-3 hobby-section">
        <div class="element-shadow">
            <h2>Origami</h2>
            <p>
            Also known as golden venture folding or 3D origami, it's the art of building paper triangles
            and assembling them into magnificent structures. Folding paper triangles provides meditative effects, the repetitive nature of the folding relieves
            a significants amount of stress. Whilst building the structures enhances my creativity, having the
            foresight to be able to construct these sculptures builds this skill. A skill that is extremely useful
            at work, specifically when designing and making software for customers.
            </p>
            <a>Gallery</a>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-3 hobby-section">
        <div class="element-shadow">
            <h2>Competitive Gaming</h2>
            <p>
            When times call for something more heated and excited competitive gaming is the answer.
            Games I play as of writing this is StarCraft II, StarCraft Broodwar, Street Fighter V, and DragonBall FighterZ.
            Playing these games on a competitive level improves confidence, starting from zero and working towards being good at something is extremely satisfying.
            And unlike games where you simply play to increase a number on a remote server somewhere like rpgs and mmo's, competitive one on one games requires you to examine your mistakes and takes the one's active participation in order to improve.
            In many ways I "level up" in life. The confidence and skills I gain from challenging myself helps prepare me for the trials at work.
            Not only that, competiting in local tournaments, is a great way to socialize.
            It's a great opportunity to meet new people, with a common interest.
            Although I don't win often, competition with others, keeps me going, as I "always getting ready for the next challenge".
            </p>
            <a>Streams and videos</a>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-3 hobby-section">
        <div class="element-shadow">
            <h2>Coding</h2>
            <p>Of course, since this website exists I use some of my time outside of work to code.
            Coding keeps my mind fresh and up to date with the latest technology. It's a by product of the software industry and thus
            in order to still be useful, I have to take the time in reading and developing software outside of work.
            Like competitive gaming, coding is a challenge that prepares me for challenges at work and increases my confidence when
            I finally learned and solved the problem that I was facing.
            </p>
            <a>Portfolio</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.about {
  color:white;
}
.hobby-section {
  padding:1em;
  div {
    background-color:#3d4446;
    padding-bottom:1em;
  }
  p {
    padding:1em;
    margin-bottom:0em;
  }
}
.about-section {
  background-color:#3d4446;
  padding:1em;
  margin-left:1em;
  margin-right:1em;
  p {
    font-size:18px;
  }
}
.center-align {
  text-align:center;
  margin-left:auto;
  margin-right:auto;
}

.profile-img {
  width:164px;
  height:164px;
}
</style>

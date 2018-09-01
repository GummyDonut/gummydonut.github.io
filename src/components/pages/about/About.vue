<template>
  <div class="center-align about">
    <br>
    <br>
    <div style="width:auto;display:inline-block;" class="about-section element-shadow">
      <h1 style="margin-top:0em;">Insert Quote here</h1>
      <!-- Replace with profile pic here -->
      <img src="static/img/logo.png" class="profile-img">
      <br>
      <p style="text-align:center; margin:0">
        Peter Hoang
      </p>
      <hr style="width:45%;">
      <small>
       December 07 1994
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
        <h1>Insert title here</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
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
        <h1>Insert title here</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
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
    font-size:16px;
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

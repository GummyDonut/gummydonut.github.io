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
      <div class="pure-u-1 pure-u-md-1-4">
      </div>
      <div style="text-align:right;" class="pure-u-1 pure-u-md-3-4" >
        <h1>Insert title here</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
    </div>
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
    <!--List companies that I worked with -->
    <!--Show social media links -->

    <div class="pure-g about-section element-shadow">
      <div class="pure-u-1">
        <h1>Hobbies</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div>
    </div>
    <br>
    <br>
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1-3 hobby-section">
        <div class="element-shadow">
          Test
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-3 hobby-section">
        <div class="element-shadow">
          Test
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-3 hobby-section">
        <div class="element-shadow">
          Test
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

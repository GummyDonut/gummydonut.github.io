<!-- Code originally from here https://github.com/VincentGarreau/particles.js/issues/192 -->
<template>
  <div id='stars-js'>
    <div class="p p-1"></div>
    <div class="p p-2"></div>
    <div class="p p-3"></div>     
  </div>
</template>

<script>
export default {
}
</script>

<style>
@keyframes particleAnimation
{
    from {
        left: -100px;
    }
    to {
        left: calc( 100% + 100px );
    }
}

.p{
  position:fixed;
  left:0px;
  top:50px;
  width:1px;
  height:1px;
  background-color:white;
  position:fixed;
  animation-name:particleAnimation;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.p::before{
  position:absolute;
  display:block;
  content:"";
  width:100px;
  right:1px;
  top:0px;
  height:1px;
  background: linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(255,255,255,0.4) 100%); 
}
.p-1{
  animation-duration:10s;
}
.p-2{
  animation-duration:5s;
  top:60%;
}
.p-3{
  animation-duration:20s;
  top:90%;
}
</style>

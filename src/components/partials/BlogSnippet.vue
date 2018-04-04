<script>
export default{
  'name': 'blog-snippet',
  'props': ['jsonData']
}
</script>

<style>
</style>

<template>
    <div class="pure-g blog-snippet">
       <div class="pure-u-1 pure-u-md-1-6">
           <img :src="'/static/' + jsonData.thumbnail">
       </div>
       <div class="pure-u-1 pure-u-md-5-6">
           <h1>{{jsonData.title}}</h1>
           <p>
             {{jsonData.snippet}}
           </p>
       </div>
       <hr>
    </div>
</template>
<style lang="scss">
    div.blog-snippet {
        color:white;
        margin-top:1em;
        h1 {
            font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
            font-weight:400;
            font-style:normal;
        }
        p {
            font-family: 'IBM Plex Serif', 'Georgia', Times, serif;
        }
        hr {
            height:0.1px;
            width:80%;
            margin-left:0;
        }
        img {
            width:100%;
            height:100px;
        }
   }
</style>

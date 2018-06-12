<script>
export default{
  'name': 'blog-snippet',
  'props': ['jsonData']
}
</script>

<style>
</style>

<template>
    <div class="blog-snippet">
       <h1><router-link :to="{path: '/blog/' + jsonData.id}">{{jsonData.title}}</router-link></h1>
       <img class="blog-snippet-thumbnail" :src="'/static/' + jsonData.thumbnail">
       <span class="blog-snippet-date">Posted on {{jsonData.date}}</span>
       <p>
         {{jsonData.snippet}}
       </p>
       <p>
         Tags: {{jsonData.tags}}
       </p>
    </div>
</template>
<style lang="scss">
    div.blog-snippet {
        background-color:#3d4446;
        padding:1em;
        color:white;
        margin-top:1em;
        h1 {
            font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
            font-weight:800;
            margin-top:0;
            a {
                color: white;
            }
        }
        p {
            font-family: 'IBM Plex Serif', 'Georgia', Times, serif;
            font-weight:400;
        }
        hr {
            height:0.1px;
            width:80%;
            margin-left:0;
        }
        img.blog-snippet-thumbnail{
            width:50px;
            height:50px;
        }
        span.blog-snippet-date{
            display:inline;
            margin-left:0.5em;
            position: relative;
            top:-0.5em;
        }
   }
</style>

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
         TEST
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
<style>
    div.blog-snippet {
        color:white;
    }

    .blog-snippet h1 {
        font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
        font-weight:400;
        font-style:normal;
    }

</style>

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
   <h1>{{jsonData.title}}</h1> 
</div>
</template>
<style>
    div.blog-snippet {
        color:white;
    }
    
</style>

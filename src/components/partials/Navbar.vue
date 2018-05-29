<script>
export default{
  'name': 'lantern77-navbar'
}
</script>

<style scoped>
    .brand-tagline {
        font-weight:400;
    }
</style>

<template>
<div class="sidebar pure-u-1 pure-u-md-1-6"> <!--Temporary fix on the computer side not on the phone side-->
        <div class="header">
            <img src="static/img/logo.png" class="logo">
            <a style="color:#ffffff;" href="#/blog"><h1 class="brand-title">Peter's Void</h1></a>
            <h2 class="brand-tagline">Where words may mean nothing </h2>

            <nav class="nav">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a class="pure-button" href="#/about">About me</a>
                    </li>
                    <li class="nav-item">
                        <a class="pure-button" href="#/blog">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="pure-button" ng-href="#/resume" href="#/resume">Resume</a><!--Only works online directories messed up-->
                    </li>
                </ul>
                <br>
                -----------------
                <p>© Test 2014 Designed By Peter Hoang Using <a href="https://angularjs.org/">AngularJS</a> and <a href="http://purecss.io/">PureCSS</a> framework</p>
            </nav>
        </div>
</div>
</template>

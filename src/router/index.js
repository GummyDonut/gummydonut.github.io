import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/pages/about/About'
import Resume from '@/components/pages/resume/Resume'
import Blog from '@/components/pages/blog/Blog'
import BlogEntry from '@/components/pages/blogEntry/BlogEntry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:blog',
      name: 'BlogEntry',
      component: BlogEntry
    }
  ]
})

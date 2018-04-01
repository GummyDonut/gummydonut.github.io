import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/layouts/About'
import Resume from '@/components/layouts/Resume'
import Blog from '@/components/layouts/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
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
    }
  ]
})

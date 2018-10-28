import Vue from 'vue'
import Router from 'vue-router'
import create from '@/pages/Create'
import modify from '@/pages/Modify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/create'
    },
    {
      path: '/create',
      name: 'Create',
      component: create
    },
    {
      path: '/modify',
      name: 'Modify',
      component: modify
    }
  ]
})

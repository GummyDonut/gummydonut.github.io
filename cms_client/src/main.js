// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '../static/css/bootstrap.min.css'
import * as uiv from 'uiv'

Vue.config.productionTip = false
let devAxios = axios.create({
  'baseURL': 'http://localhost:3000/'
})
Vue.prototype.$axios = devAxios

Vue.use(uiv)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

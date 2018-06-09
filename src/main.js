// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Adapted from https://github.com/lsquires/open-iota

import Vue from 'vue'
import App from './App'
import router from './router'
import AsyncComputed from 'vue-async-computed'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClipboard from 'vue-clipboard2'
// import VueAwesome from 'vue-awesome'
import 'vue-awesome/icons'
import 'font-awesome/css/font-awesome.css'

Vue.use(VueClipboard)
Vue.use(Buefy)
Vue.use(AsyncComputed)
Vue.use(require('vue-moment'))
Vue.use(VueAxios, axios)
// Vue.use(VueAwesome)
// Vue.use(require('vue-awesome'))
Vue.use(require('vue-truncate-filter'))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
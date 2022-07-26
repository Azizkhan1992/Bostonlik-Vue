import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import PersonMenu from '@/views/PersonMenu'
import '@/utils/directives'
import store from '@/plugins/store/store'

import axios from '@/plugins/axios'
Vue.component('person-menu', PersonMenu)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,

  render: h => h(App),
}).$mount('#app')

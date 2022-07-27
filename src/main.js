import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import PersonMenu from '@/views/PersonMenu'
import '@/utils/directives'
<<<<<<< HEAD
import store from '@/plugins/store/store'
=======
>>>>>>> a1dd48d86b9c62883cea2566aaded5cbf0d6e41b

import axios from '@/plugins/axios'
Vue.component('person-menu', PersonMenu)


Vue.config.productionTip = false

new Vue({
  router,
<<<<<<< HEAD
  store,
=======

>>>>>>> a1dd48d86b9c62883cea2566aaded5cbf0d6e41b
  axios,

  render: h => h(App),
}).$mount('#app')

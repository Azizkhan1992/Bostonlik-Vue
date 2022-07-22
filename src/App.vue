<template>
  <div id="app">
    <component :is="getLayout"></component>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import MainDashboardLayout from './components/admin/MainDashboardLayout.vue'
import noLayout from './views/layouts/noLayout.vue'

import './assets/styles/menu-style.css'
import './assets/styles/content-style.css'

export default {
  name: 'App',
  components: {
    MainDashboardLayout,
    noLayout
  },
  data(){
    return{
      isLayout: false
    }
  },
  computed:{
    getLayout(){
      if(this.$route.meta.layout == 'MainDashboard'){
        // this.isLayout = true
        return MainDashboardLayout
      }
      else{
        return noLayout
      }
      
    }
  }
}
</script>

<style>
</style>

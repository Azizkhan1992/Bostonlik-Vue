<template>
<div class="main-container">
    <main-menu/>
    <div class="main-content">
            <router-view></router-view>
        </div>
</div>
</template>
<script>
import MainMenu from './MainMenu.vue'
export default {
    name: 'main-dashboard',
    components:{
        MainMenu
    }
}
</script>
<style>




</style>
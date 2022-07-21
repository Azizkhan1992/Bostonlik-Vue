<template>
<div class="main-container">
    <main-menu class="figma-menu row"/>
    <div class="main-content row">
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
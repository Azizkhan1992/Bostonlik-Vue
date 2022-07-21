<template>
<div class="settings-container">
    <div class="settings-header">
        <div class="header-left-blog">
            <span>Настройки</span>
            <p>Настройки</p>
        </div>
        
        <img src="@/assets/src/Icons/Ellipse.png" alt="">
    </div>
    <div v-if="!isSettings" class="settings-route">
        <router-link to="/user-settings">
        <button><img src="@/assets/src/svg-icons/Settings-staff.svg">
        <p>Пользователи системы</p>
        </button>
        </router-link>
    </div>
    <div class="settings-content">
        <router-view/>
    </div>
</div>
</template>
<script>
export default {
    name: 'settings-app',
    data(){
        return{
            isSettings: false 
        }
    },
    mounted(){
        this.getSettings()
    },
    methods:{
        getSettings(){
            if(this.$route.params['/user-settings']){
                this.isSettings = true
            }
        }
    }
}
</script>
<style>

</style>
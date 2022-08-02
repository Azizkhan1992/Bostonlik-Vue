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
    },
    data(){
        return{
            users_permissions: null,
        }
    },
    mounted(){
        this.getUser()
        this.getCheckRoles()
    },
    methods:{
        getUser() {
      this.$api
        .get("currentUser")

        .then(
          (response) => {
            if (response?.data?.user?.role) {
              this.$store.dispatch("role", response.data.user.role);
            }
            if (response?.data?.user?.department) {
              this.$store.dispatch("department", response.data.user.department);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    },
    getCheckRoles() {
      this.$api.get("settings/check").then(
        (response) => {
          if (response?.data?.categories) {
            const checkroles = response.data.categories;
            this.users_permissions = checkroles;
            this.$store.dispatch("CHECK_ROLES", checkroles);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    }
}
</script>
<style>




</style>
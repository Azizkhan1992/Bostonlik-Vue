<template>
<div>
    <img @click="personActive" src="@/assets/src/Icons/Ellipse.png" alt="">
        <div :class="{'personal-keys' :isPersonal}" class="own">
<<<<<<< HEAD
        <router-link to="/my-profile"><button>Мой профиль</button></router-link>
            
            <button @click="logOut">Выход</button>
=======
            <button>Мой профиль</button>
            <button>Выход</button>
>>>>>>> a1dd48d86b9c62883cea2566aaded5cbf0d6e41b
        </div>
</div>
</template>
<script>
<<<<<<< HEAD
import TokenService from '@/services/TokenService'
=======
>>>>>>> a1dd48d86b9c62883cea2566aaded5cbf0d6e41b
export default {
    name: 'person-menu',
    data(){
        return{
            isPersonal: true
        }
    },
    methods:{
        personActive(){
            this.isPersonal = !this.isPersonal
        },
<<<<<<< HEAD
        logOut(){
            TokenService.removeToken()
            this.$router.go()
            // this.$store.dispatch('logOut')   
        }
    }
}
</script>
<style scoped>
=======
    }
}
</script>
<style>
>>>>>>> a1dd48d86b9c62883cea2566aaded5cbf0d6e41b
img{
    cursor: pointer;
}
/* .personal-keys{
    display: none;  
} */
.own{
    display: flex;
    flex-direction: column;
    min-width: 15%;
    position: absolute;
    top: 75px;
    right: 25px;   
    z-index: 110;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    gap: 0;
    box-shadow: 0 6px 8px rgb(0 0 0 / 8%);
    border-radius: 20px
}
.own button{
    margin-top: 10px;
    width: 75%;
    border: none;
    background: #fff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 10px;
}
.own button:hover{
    color: #1C9E3C;
} 
<<<<<<< HEAD
.own .router-link-exact-active{
    background: #1C9E3C !important;
}
.own .router-link-exact-active button{
    background: #1C9E3C;
}
.own .router-link-exact-active button:hover{
    color: #fff;
}
=======
>>>>>>> a1dd48d86b9c62883cea2566aaded5cbf0d6e41b
</style>
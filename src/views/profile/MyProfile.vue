<template>
    <div class="my-profile-container">
        <div class="my-profil-header">
            
                <h2>Мой профиль</h2>
                <person-menu/>
        </div>
        <div class="my-profil-content">
            <div class="my-profil-left">
                <div class="my-login my-profil-form">
                    <h4>Логин:</h4>
                    <span>login_003</span>
                </div>
                <div class="my-account my-profil-form">
                    <h4>Дата создания аккаунта:</h4>
                    <span>11.11.2022</span>
                </div>
                <div class="my-department my-profil-form">
                    <h4>Ведомство</h4>
                    <span>Тоза худуд</span>
                </div>
            </div>
            <div class="my-profil-right">
                <img src="@/assets/src/Icons/profil-icon.svg" alt="">
            </div>
            <div class="my-profil-footer"></div>
        </div>
    </div>
</template>
<script>
import PersonMenu from '../PersonMenu.vue'
export default{
  components: { PersonMenu },
    name: 'my-profil',
    mounted(){
        
    },
    methods:{
        
    }
}
</script>
<style>
.my-profil-header .personal-keys{
    display: none;  
}
.my-profile-container{
    width: 100%;
    /* display: flex; */
}
.my-profile-container .my-profil-header{
    display: flex;
    width: 100%;
    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 15px;
}
.my-profil-header h2{
    display: block;
    margin-left: 25px;
    font-size: 2rem;
    font-weight: 700;
    color: #1E1920;
}
.my-profile-container .my-profil-content{
    display: flex;
    flex: 0 0 auto;
    width: 97%;
    background: #FFFFFF;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 25px;
    border-radius: 10px;
}
.my-profil-content .my-profil-left{
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    width: 50%;
    margin-left: 15px;
    margin-top: 15px;
}
.my-profil-left .my-login{
    width: 33%;
    margin-left: 25px;
}
.my-profil-left .my-account{
    width: 33%;
}
.my-profil-left .my-department{
    width: 33%;
    margin-left: 25px;
    margin-top: 15px;
}
.my-profil-left .my-profil-form h4{
    font-size: 1rem;
    font-weight: 700;
}
.my-profil-left .my-profil-form span{
    font-size: 1rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 10px;
}
.my-profil-content .my-profil-right{
    margin-top: 25px;
}



</style>
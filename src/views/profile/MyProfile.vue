<template>
    <div class="my-profile-container">
        <div class="my-profil-header">
            
                <h2>Мой профиль</h2>
                <person-menu/>
        </div>
        <div class="my-profil-content">
            <div class="profil-content-header">
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
            </div>
            
            <div class="my-profil-footer">
                <div class="my-profil-input">
                    <div class="input-left">
                        <div class="my-lastname my-row-one">
                            <label for="lastname-input">Фамилия</label>
                            <input type="text" id="lastname-input" placeholder="Фамилия">
                        </div>
                        <div class="my-firstname my-row-one">
                            <label for="firstname-input">Имя</label>
                            <input type="text" id="firstname-input" placeholder="Имя"> 
                        </div>
                        <div class="my-patronimic my-row-one">
                            <label for="patronimic-input">Отчество</label>
                            <input type="text" id="patronimic-input" placeholder="Отчество">
                        </div>
                    </div>
                    <div class="input-right">
                        <div class="my-phone-number my-row-one">
                            <label for="phone-input">Номер телефона</label>
                            <input type="text" id="phone-input" placeholder="+998">
                        </div>
                        <div class="my-email my-row-one">
                            <label for="email-input">Эл. адрес</label>
                            <input type="text" id="email-input" placeholder="Email">
                        </div>
                        <div class="my-password my-row-one">
                            <label for="password-input">Пароль</label>
                            <input type="text" id="password-input" placeholder="Пароль">
                        </div>
                    </div>
                    <div class="my-profil-btn">
                        <button class="my-profil-exit">Отмена</button>
                        <button class="my-profil-save">Сохранить</button>
                    </div>
                </div>
                <div class="my-input-img">
                    <div class="image-input">
                        <label for="my-input-image">
                            <i aria-hidden="true">Прикрепить фото</i>
                            <img src="@/assets/src/Vector (3).png" alt="">
                        </label>
                        <input type="file" id="my-input-image">
                    </div>
                    <div class="image-shower">
                        <img class="my-own-image" src="@/assets/src/image 5.png" alt="">
                        <button>
                            <img src="@/assets/src/Icons/Vector01.png" alt="">
                        </button>
                    </div>
                </div>
            </div>
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
    

</style>
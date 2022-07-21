<template>
<div class="my-profil-container">
    <div class="my-profil-header">
        <span>Мой профиль</span>
        <img src="@/assets/src/Icons/Ellipse.png" alt="">
    </div>
    <div class="my-profil-content">
        <div class="profil-content-one">
            <div class="inner-content-one">
                <div class="profil-title">
                    <span>Логин:</span>
                    <p>login_003</p>
                </div>
                <div class="profil-title">
                    <span>Ведомство</span>
                    <p>Тоза худуд</p>
                </div>
            </div>
            <div class="inner-content-two">
                <span>Дата создания аккоунта:</span>
                <p>11.11.2022</p>
            </div>
        </div>
        <div class="profil-content-two">
            <img src="@/assets/src/Icons/profil-icon.svg" alt="">
        </div>

         <div class="profil-content-three">
            <div class="profil-form">
                <div class="profil-left-form">
                    <div class="profil-inputs">
                        <label for="profil-input">Фамилия</label>
                        <input class="profil-input" type="text" placeholder="Фамилия">
                    </div>
                    <div class="profil-inputs">
                        <label for="profil-input">Имя</label>
                        <input class="profil-input" type="text" placeholder="Имя">
                    </div>
                    <div class="profil-inputs">
                        <label for="profil-input">Отчество</label>
                        <input class="profil-input" type="text" placeholder="Отчество">
                    </div>
                </div>
                <div class="profil-right-form">
                    <div class="profil-inputs">
                        <label for="profil-input">Номер телефона</label>
                        <input class="profil-input" type="text" placeholder="+998">
                    </div>
                    <div class="profil-inputs">
                        <label for="profil-input">Эл. адрес</label>
                        <input class="profil-input" type="text" placeholder="Email">
                    </div>
                    <div class="profil-inputs">
                        <label for="profil-input">Пароль</label>
                        <input class="profil-input" type="text" placeholder="Пароль">
                    </div>
                </div>
                <div class="profil-btn">
                    <button class="close-btn"><p>Отмена</p></button>
                    <button class="save-btn"><p>Сохранить</p></button>
                </div>
            </div>
            <div class="profil-image">
                <div class="profil-file-input">
                    <label for="profil-image-input">
                        <img src="@/assets/src/Vector.png" alt="">
                        <span>Прикрепить фото</span>
                        </label>
                    <input type="file" id="profil-image-input">
                </div>
                <div class="file-image">
                    <img src="@/assets/src/image 5.png" alt="">
                    <button><img src="@/assets/src/Icons/Vector01.png" alt=""></button>
                </div>
            </div>
        </div>
       
    </div>
    
</div>
</template>
<script>
export default{
    name: 'my-profil'
}
</script>
<style>

</style>
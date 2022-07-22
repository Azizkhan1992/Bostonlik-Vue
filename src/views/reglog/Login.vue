<template>
<div class="login-container">
    <div class="login-left-content">
         <img src="@/assets/src/Icons/left-icon.svg" width="350" height="150" alt="">
         <div class="left-center">
            <div class="left-header">
                 <span class="left-header-span">Информационная система по экологическому мониторингу раёна Бостанлыка</span>
            </div>
           <div class="login-form">
            <div class="login-input">
                <label for="item-input">Логин</label>
                <input class="item-input" type="text" placeholder="введите логин">
            </div>
            <div class="login-input">
                <label for="">Пароль</label>
                <input class="item-input" type="text" placeholder="введите парол">
            </div>
            <button class="left-btn"><p>вход</p></button>
           </div>
           <div class="left-footer">
            <span>Разработка сайта:</span>
            <img :src="`./src/DAC site logo 1.png`" alt="">
           </div>
         </div>    
    </div>
    <div class="login-right-content">
        <img src="@/assets/src/Icons/log-page.svg" alt="">
    </div>
</div>
</template>
<script>
export default {
    name: 'login-app'
}
</script>
<style>


</style>
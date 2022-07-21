<template>
<div class="menu-container">
    <img src="@/assets/src/Icons/left-icon.svg" width="220" height="80" alt="">
    <div class="menu-container-center">
        <div class="menu-container-item">
            <img src="@/assets/src/Icons/bar-graph-1.png" alt="" class="item-img">
            <router-link to="/"><span>Панел графиков</span></router-link>
        </div>
        <div class="menu-container-item">
            <img src="@/assets/src/Icons/Vector.png" alt="" class="item-img">
            <span class="menu-item-span">Заявки</span>
            
            <img src="/src/Icons/Vector-5.png" alt="" class="item-img-one">
            <div class="inner-menu-items">
                <div class="menu-item-one"></div>
                <div class="menu-item-two"></div>
            </div>
        </div>
        <!-- <div class="menu-container-item">
            <img src="/src/Icons/Vector-1.png" alt="" class="item-img">
            <span class="menu-item-span">Статистика</span>
        </div> -->
        <div class="menu-container-item">
            <img src="/src/Icons/Vector-2.png" alt="" class="item-img">
            <span class="menu-item-span">Жалоби и предложения</span>
        </div>
        <div class="menu-container-item">
            <img src="/src/Icons/Settings.png" alt="" class="item-img">
            <router-link to="/settings"><span class="menu-item-span">Настройки</span></router-link>
            
        </div>
        <div class="menu-container-item">
            <img src="/src/Icons/Profile.png" alt="" class="item-img">
            <router-link to="/my-profile"><span class="menu-item-span">Мой профил</span></router-link>
        </div>
    </div>

    <div class="menu-container-footer">
        <img :src="`./src/Group1.png`" alt="" class="footer-image">
        <div class="footer-block">
            <span>Разработка сайта:</span>
            <img :src="`./src/DAC site logo 1.png`" alt="">
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'main-menu'
}
</script>
<style>


</style>
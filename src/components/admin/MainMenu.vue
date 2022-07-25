<template>
<div class="menu-container">
    <div>
        <img src="@/assets/src/Icons/left-icon.svg" width="220" height="80" alt="">
        <div class="menu-container-center">
            <div class="menu-container-item">
                
                <router-link to="/dashboard">
                    <img src="@/assets/src/Icons/bar-graph-1.png" alt="" class="item-img">
                    <span class="menu-item-span">Панел графиков</span>
                    </router-link>
            </div>

            <div class="menu-container-item accordion" id="request-elem">
                
               <div  @click="menuActive" class="request-outer-block">
                    <img src="@/assets/src/Icons/Vector.png" alt="" class="item-img">
                    <span class="menu-item-span">Заявки</span>
                    <img src="/src/Icons/Vector-5.png" alt="" class="item-img-one">
               </div>
                    

                 <div v-if="isActive" class="inner-menu-items">
                    <div class="menu-item-one">
                        <router-link to="/opened-requests">
                            <span>Откритые заявки</span>
                        </router-link>
                        
                    </div>
                    <div class="menu-item-one panel">
                        <router-link to="/closed-requests">
                            <span>Закрытые заявки</span>
                        </router-link>
                        
                    </div>
                </div>
            </div>

            <div class="menu-container-item">
               
                <router-link to="/statistics">
                    <img src="@/assets/src/svg-icons/Statistics.svg" alt="" class="item-img">
                    <span class="menu-item-span">Статистика</span>
                </router-link>
                
            </div>

            <div class="menu-container-item">
               
                <router-link to="/sentenses">
                    <img src="/src/Icons/Vector-2.png" alt="" class="item-img">
                    <span class="menu-item-span">Жалоби и предложения</span>
                </router-link>
                
            </div>
            <div class="menu-container-item">
                
                <router-link to="/settings">
                <img src="/src/Icons/Settings.png" alt="" class="item-img">    
                <span class="menu-item-span">Настройки</span></router-link>
                
            </div>
            <div class="menu-container-item">
                
                <router-link to="/my-profile">
                <img src="/src/Icons/Profile.png" alt="" class="item-img">  
                <span class="menu-item-span">Мой профил</span></router-link>
            </div>
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
    name: 'main-menu',
    data(){
        return{
            isActive: false,
            elem: null,
            beforeElem: null,
        }
    },
    mounted(){
        this.getBeforeClass();
    },
    methods:{
        menuActive(){
            this.isActive = !this.isActive
            if(this.isActive){
            this.elem = document.getElementById('request-elem')
            
             this.elem.classList.toggle("active-request-element")
            // console.log(this.isActive)    
            }
           else{
            this.elem = document.getElementById('request-elem')
            // console.log(this.isActive)   
           }
        },
        getBeforeClass(){
                this.beforeElem = document.getElementsByClassName('router-link-active')
                // this.beforeElem.classList.toggle("non-active-request")
                // console.log(this.isActive)
        }
    }
}
</script>
<style>
.inner-menu-items{
    margin-left: 85px;
}
.active-request-element{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #1C9E3C;
    /* transition: all 1s linear; */
}
.active-request-element .request-outer-block .item-img-one{
    transform: rotate(180deg);
}
.non-active-request{
    background: #F4F5FA;
    /* transition: all 1s linear; */
}
.active-request-element .router-link-active{
    display: block;
    width: 170px;
    background:forestgreen;
    color: #fff;
}
.menu-item-one{
    margin-top: 5px;
}
.panel{
    margin-bottom: 10px;
}
</style>
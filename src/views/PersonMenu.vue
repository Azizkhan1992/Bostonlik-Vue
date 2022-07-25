<template>
<div>
    <img @click="personActive" src="@/assets/src/Icons/Ellipse.png" alt="">
        <div :class="{'personal-keys' :isPersonal}" class="own">
            <button>Мой профиль</button>
            <button>Выход</button>
        </div>
</div>
</template>
<script>
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
    }
}
</script>
<style>
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
</style>
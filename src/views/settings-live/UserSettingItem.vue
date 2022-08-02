<template>
    <div class="user-item-container">
        <div class="user-item-content">
            <div class="user-item-one items">
                <h3>ФИО</h3>
                <span v-if="isSetUser">{{users.firstName}}</span>
                <span v-else class="is-not-user">-</span>
            </div>
            <div class="user-item-two items">
                <h3>Ведомство</h3>
                <span>{{users.department}}</span>
            </div>
            <div class="user-item-three items">
                <h3>Роль</h3>
                <span>{{users.role}}</span>
            </div>
            <div class="user-item-four items">
                <h3>Статус</h3>
                <select id="selectStatus">
                    <option value="">Активный</option>
                    <option value="">Деактивный</option>
                </select>
                <!-- <span v-if="users.status === true">Активный</span> -->
            </div>
            <div class="user-item-five items">
                <h3>Электронная почта</h3>
                <span v-if="isSetUser">{{users.email}}</span>
                <span v-else class="is-not-user">-</span>
            </div>
            <div class="user-item-six items">
                <h3>Номер телефона</h3>
                <span v-if="isSetUser">{{users.phoneNumber}}</span>
                <span v-else class="is-not-user">-</span>
            </div>
            <div class="user-item-seven items">
                <h3>Логин</h3>
                <span>{{users.login}}</span>
            </div>
        </div>
        <div class="user-item-footer">
            <img src="@/assets/src/Icons/profil-icon.svg" alt="">
            <button @click="goBack" >Back</button>
        </div>
    </div>
</template>
<script>

export default {
    name: 'user-setting-item',
    data(){
        return{
            id : this.$route.params,
            users: [],
            user: '',
            isSetUser: false,
        }
    },
    mounted(){
        this.getUserItem()
        // this.getSettingUser()
    },
    
    methods:{
        getSettingUser(elem){
            console.log(elem)
            if(elem.lastName){
                this.isSetUser = true

            }
        },
        getUserItem(){
            this.$api.get('users')
            .then(response =>{
                this.checkUserItem(response.data)
            },
            error => {
                console.log(error)
            }
            )
        },
        checkUserItem(item){
            const userId = this.$route.params.id
            item.forEach(element => {
                if(element._id == userId){
                    this.users = element
                    this.getSettingUser(element)
                }
            });

                // console.log(this.users)
        },
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style>
.user-item-container .user-item-content{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    margin-left: 15px;
}
.user-item-content .items{
    margin-left: 10px;
    margin-top: 10px;
    margin-left: 30px;
    padding: 10px;
}
.user-item-container .user-item-footer{
    display: flex;
    flex-direction: column;
}
.user-item-container .user-item-footer img{
    display: block;
    width: 75%;
    margin-left: 100px;
}
.user-item-container .user-item-footer button{
    display: block;
    align-self: center;
    width: 125px;
    height: 50px;
    margin-top: 50px;
    background: rgba(244, 33, 45, 0.48);
    border-radius: 10px;
    border: none;
    font-weight: 600;
    cursor: pointer;
}
.user-item-container .user-item-footer button:hover{
        color: #fff;
}
.user-item-one .is-not-user{
    font-size: 36px;
    line-height: 20px;
    font-style: normal;
    font-weight: 500;
}
.user-item-five .is-not-user{
    font-size: 36px;
    line-height: 20px;
    font-style: normal;
    font-weight: 500;
}
.user-item-six .is-not-user{
    font-size: 36px;
    line-height: 20px;
    font-style: normal;
    font-weight: 500;
}
</style>
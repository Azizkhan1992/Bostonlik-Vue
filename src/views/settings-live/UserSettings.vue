<template>
<div class="user-settings-container">
    <div class="user-settings-header">
        <div class="settings-header-left">
            <h2>Настройки</h2>
            <div class="header-route">
                <router-link tag="span" to="/settings">Настройки</router-link>
                <img src="@/assets/src/Vector (1).png" alt="">
                <p>Пользователи системы</p>
            </div>
            
        </div>
        <div class="settings-header-right">
            <person-menu/>
        </div>
    </div>
    <div class="user-settings-table">
        <table>
            <tr class="table-header">
                <th class="th-one">ФИО</th>
                <th class="th-two">Ведомство</th>
                <th class="th-two">Статус</th>
                <th class="th-two">Дата создания аккоунта</th>
                <th class="th-two">Последная активность</th>
            </tr>
            <hr/>
            <router-link tag="tr" v-for="(user, idx) in list" :key="idx" :to="`/user-setting-item/${user._id}`"  class="settings-table">
            
                <td class="td-one">{{user.firstName }}</td>
                <td class="td-two">{{user.department}}</td>
                <td class="td-two">{{user.status}}</td>
                <td class="td-two">{{user.createdDate}}</td>
                <td class="td-two">{{user.lastActiveDate}}</td>
            </router-link>
            <hr/>
        </table>
    </div>
    <div class="user-add">
        <div class="request-footer">
        <app-pagination @paginate="setPaginationData" :data="Users" :limit="4"></app-pagination>
      </div>
    </div>
</div>
</template>
<script>
import PersonMenu from '../PersonMenu.vue'
import AppPagination from '@/components/common/AppPagination'
export default{
  components: { PersonMenu, AppPagination },
    name: 'user-profil',
    data(){
        return{
            Users: [],
            list: [],
            static: {
                true: 'Активный',
                false: 'Неактивный'
            }
        }
    },
    mounted(){
        this.getUsers()
    },
    methods:{
        getUsers(){
            this.$api.get('users')
            .then(response => {
                console.log(response.data)
                this.Users = response.data;
                this.list = this.Users.slice(0, 4)
            },
            error => {console.log(error)}
            )
        },
        setPaginationData(data) {console.log('pg data', data)
            this.list = data
        }
    }
}
</script>
<style>
.user-settings-header .settings-header-right .personal-keys {
  display: none;
}
.user-settings-container .user-add{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    padding-bottom: 25px;
}
.user-add .user-footer-left{
    display: flex;
    flex-direction: row;
    width: 30%;
    margin-left: 25px;
}
.user-add .user-footer-left button{
    position: relative;
    display: flex;
    width: 50%;
    margin-left: 25px;
    background: #FFFFFF;
    justify-content: center;
    height: 50px;
    align-items: center;
    border-radius: 15px;
    font-size: 1rem;
    font-weight: 600;
    color: #A0AEC0;
}
.user-add .user-footer-left button:hover{
    color: #1C9E3C;
}
.user-add .user-footer-left button .footer-left-left-img{
    display: block;
    margin-right: 25px;
}
.user-add .user-footer-left button .footer-left-right-img{
    display: block;
    position: absolute;
    right: 30px;
}
</style>
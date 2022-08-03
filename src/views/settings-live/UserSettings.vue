<template>
<div class="user-settings-container">
    <div class="user-settings-header">
        <div class="settings-header-left">
            <h2>Настройки</h2>
            <div class="header-route">
                <router-link tag="span" to="/settings">настройки</router-link>
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
            <router-link tag="tr" v-for="(user, idx) in Users" :key="idx" :to="`/user-setting-item/${user._id}`"  class="settings-table">
            
                <td class="td-one">{{user.firstName }}</td>
                <td class="td-two">{{user.department}}</td>
                <td class="td-two">{{user.status}}</td>
                <td class="td-two">{{user.createdDate}}</td>
                <td class="td-two">{{user.lastActiveDate}}</td>
            </router-link>
            <hr/>
        </table>
    </div>
    <div class="user-add"></div>
</div>
</template>
<script>
import PersonMenu from '../PersonMenu.vue'

export default{
  components: { PersonMenu },
    name: 'user-profil',
    data(){
        return{
            Users: [],
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
                this.Users = response.data
            },
            error => {console.log(error)}
            )
        }
    }
}
</script>
<style>
.user-settings-header .settings-header-right .personal-keys {
  display: none;
}
.user-settings-container .user-settings-header{
    display: flex;
    width: 100%;
    margin-left: 25px;
    margin-top: 10px;
}
.user-settings-header .settings-header-left{
    display: flex;
    flex-direction: column;
}
.settings-header-left h2{
    font-size: 2rem;
    font-weight: 800;
}
.settings-header-left .header-route{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}
table .settings-table{
    display: flex;
    margin-top: 15px;
    width: 100%;
}
table .settings-table td{
    cursor: pointer;
}
table .settings-table .td-one{
    display: block;
    width: 25%;
    text-align: left;
    margin-left: 33px;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 700;
    color: #A0AEC0;
}
table .settings-table .td-two{
    display: block;
    width: 25%;
    text-align: left;
    margin-left: 33px;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 700;
    color: #A0AEC0;
    margin-left: 7%;
}

hr{
    border: 1px solid #E2E8F0
}

</style>
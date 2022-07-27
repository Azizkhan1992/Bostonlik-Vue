<template>
<div class="user-settings-container">
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

export default{
    name: 'user-profil',
    data(){
        return{
            Users: []
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
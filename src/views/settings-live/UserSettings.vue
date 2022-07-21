<template>
<div class="user-settings-container">
    <div class="user-settings-table">
        <table>
            <tr class="table-header">
                <th>ФИО</th>
                <th>Ведомство</th>
                <th>Статус</th>
                <th>Дата создания аккоунта</th>
                <th>Последная активность</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
    <div class="user-add"></div>
</div>
</template>
<script>
export default{
    name: 'user-profil'
}
</script>
<style>
.user-settings-container{
    margin-left: 10px;
}

.user-settings-table table tr{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.user-settings-table table tr th{
    display: block;
    width: 150px;
    text-align: left;
    margin-left: 33px;
    color: #A0AEC0;
    margin-top: 5px;
}
.user-settings-table table .table-header{
    width: 100%;
    background: #F7FAFC;
}
</style>
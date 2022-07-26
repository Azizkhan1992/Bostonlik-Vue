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
            <tr class="settings-table">
                <td class="td-one">Абдужабборов Акбар</td>
                <td class="td-two">Эко-прокуратура</td>
                <td class="td-two">Активирован</td>
                <td class="td-two">01.01.2022</td>
                <td class="td-two">15.06.2022</td>
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
table .settings-table{
    display: flex;
    margin-top: 15px;
    width: 100%;
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



</style>
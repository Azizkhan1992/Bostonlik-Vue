<template>
    <div class="sentenses-container">
        <div class="sentenses-header">
            <div class="sentenses-header-left">
                <span>Жалобы и предложения</span>
                <p>Жалобы и предложения</p>
            </div>
            <img src="@/assets/src/Icons/Ellipse.png" alt="">
        </div>
        <div class="sentenses-content">
            <div class="sentenses-content-header">
                <div class="sentenses-content-one one">

                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="sentenses-one-select">
                    <option value="">Все</option>
                    <option value="">Новые</option>
                    <option value="">Старые</option>
                </select>
            </div>
            <div class="sentenses-content-one two">
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="sentenses-status">
                    <option value="">Предложение</option>
                    <option value="">Откритые</option>
                    <option value="">Закрытые</option>
                </select>
            </div>
            <div class="sentenses-content-one three">
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="sentenses-month">
                    <option value="">2022</option>
                    <option value="">Естественные</option>
                    <option value="">Человеческие</option>
                </select>
            </div>
            <div class="sentenses-content-one four">
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="sentenses-year">
                    <option value="">Апрель</option>
                    <option value="">Естественные</option>
                    <option value="">Человеческие</option>
                </select>
            </div>
            </div>
            <div class="sentenses-content-content">
                <table>
                    <tr>
                        <th>ФИО Заявителя</th>
                        <th>номер телефона</th>
                        <th>Категория</th>
                        <th>Статус</th>
                        <th>Дата поступления</th>
                    </tr>
                </table>
            </div>
            <div class="sentenses-footer"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sentense-app'
}
</script>
<style>
.sentenses-container{
    margin-left: 25px;
    margin-top: 10px;
    width: 95%;
    position: relative;
}
.sentenses-container .sentenses-header{
    display: flex;
    position: relative;
}
.sentenses-header .sentenses-header-left{
    margin-left: 10px;
    margin-top: 10px;
}
.sentenses-header .sentenses-header-left span{
    font-size: 20px;
    font-weight: 700;
}
.sentenses-header .sentenses-header-left p{
    font-size: 12px;
    font-weight: 500;
}
.sentenses-container .sentenses-header img{
    position: absolute;
    right: 25px;
    top: 10px;
}
.sentenses-content{
    position: relative;
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
    /* background: white; */
    border-radius: 10px;
    flex-direction: column
}
.sentenses-content .sentenses-content-header{
    display: flex;
    /* justify-content: space-around */
}
.sentenses-content-one{
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    
    align-items: self-start;
}
.sentenses-content-one select{
    margin-top: 5px;
    min-width: 200px;
    padding: 5px;
    border: none;
    outline: none;
    display: inline-block;
    -moz-appearance: none;
    -webkit-appearance:none;
      -moz-appearance: none;
      appearance: none;
      cursor: pointer;
      margin-left: 25px;
}
.sentenses-content-one img{
    display: block;
    position: absolute;
    top: 5px;
    right: 10px;
}
th{
        /* display: block;
    margin-left: 50px; */
}
</style>
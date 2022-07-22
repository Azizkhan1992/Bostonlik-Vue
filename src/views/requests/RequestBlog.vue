<template>
<div class="requests-container">
    <div class="requests-header">
        <div class="requests-header-left">
            <span>Заявки</span>
            <p>Заявки</p>
        </div>
        <div class="requests-header-right">
            <div class="request-search-input">
                <input type="text" placeholder="Введите номер заявки">
                <img src="@/assets/src/svg-icons/search.svg" alt="">
            </div>
            <div class="request-header-img">
                <img src="@/assets/src/Icons/Ellipse.png" alt="">
            </div>
        </div>
    </div>
    <div class="requests-content">
        <div class="requests-content-header">
            <div class="requests-content-one">
<<<<<<< HEAD
                <label for="content-one-select">Ведомство</label>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="content-one-select">
                    <option value="">Выберите ведомство</option>
                    <option value="">Новые</option>
                    <option value="">Старые</option>
                </select>
            </div>
            <div class="requests-content-one">
                <label for="request-status">Статус заявки</label>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="request-status">
                    <option value="">Все</option>
                    <option value="">Откритые</option>
                    <option value="">Закрытые</option>
                </select>
            </div>
            <div class="requests-content-one">
                <label for="request-category">Категория нарушения</label>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="request-category">
                    <option value="">Все</option>
                    <option value="">Естественные</option>
                    <option value="">Человеческие</option>
                </select>
            </div>
            <div class="requests-content-one">
                <label for="request-date">Дата поступления заявки</label>
                <img src="@/assets/src/Icons/calendar.svg" alt="">
                <input type="text" id="request-date">
            </div>
        </div>
        <div class="requests-content-content">
            <span>Заявки</span>
            <div class="requests-table">
                <table>
                    <tr>
                        <th>Заявитель</th>
                        <th>Количество нарушения</th>
                        <th>Время отправки</th>
                        <th>Статус заявки</th>
                        <th>Ответвление ведомство</th>
                        <th>Ответственный сотркдник</th>
                    </tr>
                </table>
            </div>
        </div>
=======
                
            </div>
            <div class="requests-content-two"></div>
            <div class="requests-content-three"></div>
            <div class="requests-content-four"></div>
        </div>
        <div class="requests-content-content"></div>
>>>>>>> 991029e0139e0ddd172d46088d43502a02ed56fc
    </div>
</div>
</template>
<script>
export default{
    name: 'request-blog'
}
</script>
<style>
<<<<<<< HEAD


=======
.requests-container{
    margin-left: 25px;
}
.requests-container .requests-header{
    position: relative;
    display: flex;
    margin-top: 10px;
}
.requests-container .requests-header .requests-header-left{
    margin-top: 10px;
    margin-left: 10px;
}
.requests-header .requests-header-left span{
    font-size: 20px;
    font-weight: 700;
    color: #1E1920;
    margin-left: 20px;
}
.requests-header .requests-header-left p{
    font-size: 14px;
    font-weight: 500;
    color: #9AADB0;
}
.requests-container .requests-header .requests-header-right{
    position: absolute;
    display: flex;
    right: 25px;
    top: 10px;
}
.requests-header .requests-header-right .request-search-input{
    position: relative;
    margin-right: 25px;
    margin-top: 10px;
}
.requests-header-right .request-search-input input{
    margin-right: 25px;
    padding: 12px;
    width: 90%;
    border-radius: 8px;
    font-size: 14px;
    color: #A0AEC0;
}
.requests-header-right .request-search-input input:hover{
    border: 2px solid #1C9E3C;
}
.requests-header-right .request-search-input img{
    position: absolute;
    right: 10px;
    bottom: 20px;
    cursor: pointer;
}
>>>>>>> 991029e0139e0ddd172d46088d43502a02ed56fc
</style>
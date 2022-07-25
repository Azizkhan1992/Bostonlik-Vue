<template>
<div class="statistics-container">
        <div class="sentenses-header">
            <div class="sentenses-header-left">
                <span>Статистика</span>
                <p>Статистика</p>
            </div>
            <img src="@/assets/src/Icons/Ellipse.png" alt="">
        </div>
        <div class="statistics-content">
            <div class="statistics-content-header">
               
                <div class="sentenses-content-one one">
                <span>Категория статистики  </span>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="statistics-one-select">
                    <option value="">Все</option>
                    <option value="">Новые</option>
                    <option value="">Старые</option>
                </select>
            </div>

            
            <div class="sentenses-content-one two">
                <span>Период</span>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="statistics-period">
                    <option value="">Предложение</option>
                    <option value="">Откритые</option>
                    <option value="">Закрытые</option>
                </select>
            </div>
            
            
            <div class="sentenses-content-one three">
                <span>Год</span>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="statistics-year">
                    <option value="">2022</option>
                    <option value="">Естественные</option>
                    <option value="">Человеческие</option>
                </select>
            </div>

            
            <div class="sentenses-content-one four">
                <span>Месяц</span>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="statistics-month">
                    <option value="">Апрель</option>
                    <option value="">Естественные</option>
                    <option value="">Человеческие</option>
                </select>
            </div>
            </div>
            <div class="sentenses-content-content">
                <table>
                    <tr class="table-header">
                        <th class="th-one">ФИО Заявителя</th>
                        <th class="th-two two">номер телефона</th>
                        <th class="th-two">Категория</th>
                        <th class="th-two">Статус</th>
                        <th class="th-two">Дата поступления</th>
                    </tr>
                    <tr class="table-content">
                        <td class="td-one">Абдужабборов Акбар</td>
                        <td class="td-two">Место не убрано...</td>
                        <td class="td-two">Предложение</td>
                        <td class="td-two two">Прочитано</td>
                        <td class="td-two two">01.01.2022</td>
                    </tr>
                </table>
            </div>
            <div class="statistics-footer">
                <div class="sentenses-footer-left">
                    <button class="btn-item-one">
                        <img src="@/assets/src/Icons/Vector-left.svg" alt="">
                        <span>Пред.</span>
                    </button>
                    <button class="footer-btn-item">
                        <img class="right-img" src="@/assets/src/Icons/chevron-right.svg" alt="">
                        <span>След.</span>
                    </button>
                </div>
                <div class="statistics-footer-right">
                    <img src="@/assets/src/svg-icons/print.svg" alt="">
                    <span>Распечатать</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'statistics-app'
}
</script>
<style>
.statistics-container{
    margin-left: 25px;
    margin-top: 10px;
    min-width: 50%;
    width: 90%;
    position: relative;
}
.statistics-container .sentenses-header{
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
.statistics-container .sentenses-header img{
    position: absolute;
    right: 25px;
    top: 10px;
}
.statistics-content{
    position: relative;
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
    margin-top: 25px;
    /* background: white; */
    border-radius: 10px;
    flex-direction: column
}
.statistics-content .statistics-content-header{
    display: flex;
    /* justify-content: space-around */
}
.sentenses-content-one{
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    background: #fff;
    border-radius: 5px;
    align-items: self-start;
}
.sentenses-content-one select{
    margin-top: 5px;
    min-width: 200px;
    border-radius: 5px;
    padding: 5px;
    border: none;
    outline: none;
    display: inline-block;
    -moz-appearance: none;
    -webkit-appearance:none;
      -moz-appearance: none;
      appearance: none;
      cursor: pointer;
      /* margin-left: 25px; */
}
.sentenses-content-one img{
    display: block;
    position: absolute;
    top: 5px;
    right: 10px;
}
.sentenses-content-content{
    margin-left: 25px;
    margin-top: 25px;
    display: flex;
    justify-content: flex-start;
    background: #fff;
    min-width: 870px;  
    padding: 10px;  
    border-radius: 5px;
}
.sentenses-content-content table{
    display: block;
    width: 100%;
    
}
.sentenses-content-content table tr .th-one{
    display: block;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #A0AEC0;
}
.sentenses-content-content table tr{
    display: flex;
    
}
.sentenses-content-content table .table-header{
    background: #F7FAFC;
    border-radius: 10px;
}

.sentenses-content-content table tr .th-two{
    display: block;
    margin-left: 95px;
    font-size: 16px;
    font-weight: 700;
    color: #A0AEC0;
}
.sentenses-content-content table tr .td-one{
    display: block;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #A0AEC0;
}
.sentenses-content-content table tr .td-two{
    display: block;
    margin-left: 60px;
    font-size: 16px;
    font-weight: 500;
    color: #A0AEC0;
}
table .table-header .two{
    padding-left: 5px;
}
table .table-content{
    margin-top: 10px;
}
table .table-content .two{
    padding-left: 10px;
}
.statistics-footer{
    margin-top: 25px;
    margin-left: 25px;
    position: relative;
}
.statistics-footer .sentenses-footer-left button img{
    border: none;
}
.statistics-footer .sentenses-footer-left button{
    position: relative;
    margin-left: 10px;
    border: none;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    background: #fff;
}
.sentenses-footer-left button img{
    margin: 5px;
}

.btn-item-one span{
    display: block;
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 5px;
    font-size: 12px;
    font-weight: 500;
    color: #A0AEC0;
}
.btn-item-one span:hover{
    color: #1C9E3C;
}
.sentenses-footer-left .btn-item-one{
    display: flex;
}
.sentenses-footer-left .footer-btn-item{
    height: 30px;
    display: flex;
    flex-direction: row-reverse;
}
.footer-btn-item span{
    display: block;
    margin-top: 5px;
    margin-right: 10px;
    margin-left: 5px;
    font-size: 12px;
    font-weight: 500;
    color: #A0AEC0;
}
.footer-btn-item span:hover{
    color: #1C9E3C;
}
.sentenses-footer-left button:hover{
    color: #1C9E3C;
}
.sentenses-footer-left{
    display: flex;
}

.statistics-footer{
    display: flex;
    justify-content: flex-start;
}
.sentenses-footer .sentenses-footer-center{
    margin-left: 50px;
    display: flex;
}

.statistics-content-header span{
    display: block;
    position: absolute;
    top: -25px;
    left: 5px;
}

.statistics-footer-right{
    display: flex;
    position: absolute;
    right: 10px;
    top: 0;
    background: #fff;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
}
.statistics-footer-right span{
    display: block;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #A0AEC0;
}

</style>
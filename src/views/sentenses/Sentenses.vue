<template>
    <div class="sentenses-container">
        <div class="sentenses-header">
            <div class="sentenses-header-left">
                <span>Жалобы и предложения</span>
                <p>Жалобы и предложения</p>
            </div>
            <person-menu/>
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
            <div class="sentenses-footer">
                <div class="sentenses-footer-left">
                    <button class="btn-item-one">
                        <img class="sentense-left" src="@/assets/src/Vector (2).png" alt="">
                        <span>Пред.</span>
                    </button>
                    <button class="footer-btn-item">
                        <img class="sentense-right" src="@/assets/src/Vector (1).png" alt="">
                        <span>След.</span>
                    </button>
                </div>
                <div class="sentenses-footer-center">
                    <span>Страница</span>
                    <input type="text" placeholder="1">
                    <span>из 1</span>
                    <button>
                        <img src="@/assets/src/Icons/chevron-right.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PersonMenu from '../PersonMenu.vue'
export default {
  components: { PersonMenu },
    name: 'sentense-app'
}
</script>
<style>
.sentenses-header .personal-keys{
    display: none;  
}




.sentenses-container{
    margin-left: 25px;
    margin-top: 10px;
    min-width: 50%;
    width: 90%;
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
    width: 100%;
    margin-top: 50px;
    border-radius: 10px;
    flex-direction: column
}
.sentenses-content .sentenses-content-header{
    display: flex;
    width: 100%;
    /* justify-content: space-around */
}
.sentenses-content-one{
    position: relative;
    display: flex;
    width: 25%;
    flex-direction: column;
    margin-left: 25px;
    background: #fff;
    border-radius: 5px;
    align-items: self-start;
}
.sentenses-content-one select{
    margin-top: 5px;
    width: 100%;
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
    width: 100%;
    margin-top: 50px;
    margin-left: 25px;
    background: #fff;
    border-radius: 15px;
}
.sentenses-content-content table{
    width: 100%;
    display: block;
}
.sentenses-content-content table tr{
    position: relative;
    display: flex;
    justify-content: space-between;
    flex: 0 0 auto;
    padding: 10px;
    margin-left: 10px;
}
.sentenses-content-content table tr th{
    display: block;
    width: 20%;
    flex: 0 0 auto;
    text-align: left;
    border-bottom: 1px solid #ccc;
}
.sentenses-content-content table tr td{
    display: block;
    flex: 0 0 auto;
    width: 20%;
    text-align: left;
    border-bottom: 1px solid #ccc;
}
.sentenses-footer{
    display: flex;
    margin-top: 50px;
    margin-left: 15px;
    width: 100%;
}
.sentenses-footer .sentenses-footer-left{
    width: 25%;
    display: flex;
    margin-left: 10px;
}
.sentenses-footer .sentenses-footer-left button{
    display: flex;
    background: #fff;
    width: 50%;
    height: 50px;
    margin-left: 15px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    position: relative;
}
.sentenses-footer .sentenses-footer-left button:hover{
    color: #1fef52;
}
.sentenses-footer-left button .sentense-left{
    display: block;
    position: absolute;
    left: 25px;
    width: 5%;
}
.sentenses-footer-left button .sentense-right{
    display: block;
    position: absolute;
    right: 25px;
    width: 5%;
}
.sentenses-footer-left button span{
    display: block;
    font-size: 16px;
    font-weight: 600;
    color: #ccc;
}
.sentenses-footer-center{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
}
.sentenses-footer-center span{
    display: block;
    width: 10%;
    margin-left: 15px;
}
.sentenses-footer-center input{
    display: block;
    width: 10%;
    height: 50px;
    margin-left: 25px;
    background: #fff;
    border-radius: 10px;
    border: 2px solid #ccc;
    padding: 10px;
}
.sentenses-footer-center input:hover{
    border: 2px solid #1fef52;
}
.sentenses-footer-center button{
    display: block;
}
.sentenses-footer-center button{
    display: block;
    background: #fff;
    width: 10%;
    height: 50px;
    border-radius: 10px;
    align-items: center;
    position: relative;    
}
.sentenses-footer-center button img{
    display: block;
    position: absolute;
    width: 25%;
    top: 15px;
    left: 15px;
}

</style>
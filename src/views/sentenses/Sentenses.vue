<template>
    <div class="sentenses-container">
        <div class="sentenses-header">
            <div class="sentenses-header-left">
                <h1>Жалобы и предложения</h1>
                <span>Жалобы и предложения</span>
            </div>
            <person-menu/>
        </div>
        <div class="sentenses-content">
            <div class="sentenses-content-header">
                <div class="sentenses-content-one one">

                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <v-app>
            <v-row  justify="center" class="ma-2">
              <v-col sm="6"
              
                ><v-select  label="Все" :items="items"></v-select
              ></v-col>
            </v-row>
          </v-app>
            </div>
            <div class="sentenses-content-one two">
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <v-app>
            <v-row  justify="center" class="ma-2">
              <v-col sm="6"
              
                ><v-select  label="Предложения" :items="items1"></v-select
              ></v-col>
            </v-row>
          </v-app>
            </div>
            <div class="sentenses-content-one three">
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <v-app>
            <v-row  justify="center" class="ma-2">
              <v-col sm="6"
              
                ><v-select  label="Год" :items="items2"></v-select
              ></v-col>
            </v-row>
          </v-app>
            </div>
            <div class="sentenses-content-one four">
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <v-app>
            <v-row  justify="center" class="ma-2">
              <v-col sm="6"
              
                ><v-select  label="Месяц" :items="items2"></v-select
              ></v-col>
            </v-row>
          </v-app>
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
    name: 'sentense-app',
    data(){
        return{
            items: ["Инспекция по экологии", "Тоза Худуд", "Экопрокуратура", "Тур Полиция", "ТРЗ  <<Чарвак>>", "МВД", "Лесное хозяйство", "Комитет по автомобильным дорогам"],
            items1: ["Решена", "Ложные"],
            items2: ["Январ", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сунтябр", "Октябр", "Ноябр", "Декабр"],
        }
    }
}
</script>
<style>
.sentenses-header .personal-keys{
    display: none;  
}

.sentenses-content-one .v-application .v-application--wrap{
    min-height: auto !important;
}
.sentenses-content-one .v-application .ma-2{
    margin: 0 !important;
}
.sentenses-content-one .v-application{
    background: none !important;
}
.sentenses-content-one .v-application .v-application--wrap .row .col{
    padding: 0 !important;
}
.sentenses-content-one .v-application .v-application--wrap .row .col .v-input .v-input__control{
    cursor: pointer;
}
.sentenses-content-one .v-application .v-menu__content{
    min-width: 300px !important;
    top: 75px !important;
    margin-left: -25px;
}


</style>
<template>

<div class="requests-container">
    <div class="requests-header">
        <div class="requests-header-left">
            <span>Заявки</span>
            <p>Заявки</p>
            <!-- <span>{{getSolvedRequests}}</span> -->
        </div>
        <div class="requests-header-right">
            <div class="request-search-input">
                <input type="text" placeholder="Введите номер заявки">
                <img src="@/assets/src/svg-icons/search.svg" alt="">
            </div>
            <div class="request-header-img">
                <person-menu/>
            </div>
        </div>
    </div>
    <div class="requests-content">
        <div class="requests-content-header">
            <div class="requests-content-one">

                <label for="content-one-select">Ведомство</label>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                 <v-app>
          <v-row justify="center" class="ma-2">
            <v-col sm="6"
              ><v-select label="Все" :items="items"></v-select
            ></v-col>
          </v-row>
        </v-app>


            </div>
            <div class="requests-content-one">
                <label for="request-status">Статус заявки</label>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                 <v-app>
          <v-row justify="center" class="ma-2">
            <v-col sm="6"
              ><v-select label="Все" :items="items2"></v-select
            ></v-col>
          </v-row>
        </v-app>


            </div>
            <div class="requests-content-one">
                <label for="request-category">Категория нарушения</label>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <v-app>
          <v-row justify="center" class="ma-2">
            <v-col sm="6"
              ><v-select label="Все" :items="items2"></v-select
            ></v-col>
          </v-row>
        </v-app>


            </div>
            <div @click="showData" class="requests-content-two">
                <label for="request-date">Дата поступления заявки</label>
                <span>Выберите дату</span>
                <img src="@/assets/src/Icons/calendar.svg" alt="">
                <v-app v-if="isData" class="data-picker">
                    <v-row justify="center">
                <v-date-picker></v-date-picker>
                </v-row>
                </v-app>
            </div>
        </div>
        <div class="requests-content-content">
            <span>Заявки</span>
            <div class="requests-table">
                <table>
                    <hr/>
                    <tr>
                        <th>Заявитель</th>
                        <th>Категория нарушения</th>
                        <th>Время отправки</th>
                        <th>Статус заявки</th>
                        <th>Ответвление ведомство</th>
                        <th>Ответственный сотркдник</th>
                    </tr>
                    <hr/>
                     <tr v-for="(solved, idx) in getSolvedRequests" :key="idx" class="table-content">
                        <td>{{solved.phoneNumber}}</td>
                        <td>{{solved.category}}</td>
                        <td>{{solved.lastDateOfSolving}}</td>
                        <td class="td-item">{{solved.status}}</td>
                        <td v-for="(department, idy) in solved.department" :key="idy" class="solved-requests-td">{{department}}</td>
                        <td>{{solved.responsiblePerson}}</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="request-footer">
            <div class="footer-left-block">
                <button>
                    <img class="request-right" src="@/assets/src/Icons/Vector-left.svg" alt="">
                    <span>Пред .</span>
                </button>
                <button>
                    <img class="request-left" src="@/assets/src/Icons/chevron-right.svg" alt="">
                    <span>След .</span>
                </button>
            </div>
            <div class="footer-center">
                <span>Страница</span>
                <input type="text" placeholder="1">
                <span>из 0</span>
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
    name: 'closed-requests',
    data(){
        return {
            isData: false,

            items: ["Инспекция по экологии", "Тоза Худуд", "Экопрокуратура", "Тур Полиция", "ТРЗ  <<Чарвак>>", "МВД", "Лесное хозяйство", "Комитет по автомобильным дорогам"],
            items1: ["Решена", "Ложные"],
            items2: ["Стихийная свалка", "Скопления мусора", "Выброс мусора в неположенном месте", "Вырубка деревьев", "Разведение огня в неположенном месте", "Выброс промышленных стоков/мусора в реку"],   
        }
    },
    computed:{
        getSolvedRequests(){
            let requests = this.$store?.getters && this.$store.getters?.getSolvedRequests && this.$store.getters.getSolvedRequests
            console.log(requests)
            return requests
        }
    },
    methods:{
        showData(){
            this.isData = !this.isData
            // console.log(this.isData)
        },
    }
}
</script>
<style>
.requests-table table .table-content{
    display: flex;
    margin-top: 15px;
    width: 100%;
}

.requests-table table tr td{
    display: block;
    width: 20%;
    text-align: left;
    margin-left: 33px;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 700;
    color: #A0AEC0;


}
.table-content .td-item{
    color: #CB8F2D;
}
hr{
    border: 1px solid #E2E8F0
}
.request-header-img .personal-keys{
    display: none;  
}
.table-content .solved-requests-td{
    display: flex;
    flex-wrap: wrap;
}
</style>
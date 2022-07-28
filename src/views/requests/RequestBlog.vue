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
                <person-menu/>
            </div>
        </div>
    </div>
    <div class="requests-content">
        <div class="requests-content-header">
            <div class="requests-content-one">

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
            <div @click="showData" class="requests-content-one">
                <label for="request-date">Дата поступления заявки</label>
                <img src="@/assets/src/Icons/calendar.svg" alt="">
                <!-- <input type="text" id="request-date"> -->
                <v-app v-if="isData" class="data-picker">
                    <v-row justify="center">
                <v-date-picker v-model="picker"></v-date-picker>
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
                        
                        <th>Номер заявителя</th>
                        <th>Количество нарушения</th>
                        <th>Время отправки</th>
                        <th>Статус заявки</th>
                        <th>Ответвление ведомство</th>
                        <th>Ответственный сотрудник</th>
                   
                    </tr>
                    <hr/>
                    <tr v-for="(now, idx) in news" :key="idx" class="table-content">
                        <td>{{now.phoneNumber}}</td>
                        <td>Выброс мусора</td>
                        <td>{{now.lastDateOfSolving}}</td>
                        <td class="td-item">{{now.status}}</td>
                        <div tag="td" class="department-item">
                            <td v-for="(depart, idy) in now.department" :key="idy" class="department">{{depart}}</td>
                        </div>
                        
                        <td>{{now.name}}</td>
                    </tr>
                </table>
            </div>
        </div>

    </div>
</div>
</template>
<script>
import PersonMenu from '../PersonMenu.vue'
export default{
  components: { PersonMenu },
    name: 'request-blog',
    data(){
        return{
            news: null,
            picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            isData: false
        }
    },
    mounted(){
        this.getNews()
    },
    methods:{
        getNews(){
            this.$api.get('/applications/news')
            .then(response => {
                this.news = response.data
            },
            error => {
                console.log(error)
            }
            )
        },
        showData(){
            this.isData = !this.isData
            // console.log(this.isData)
        }
    }
}
</script>
<style>
.requests-table table{
    display: block;

    width: 100%;

    padding-top: 25px;
    padding-bottom: 25px;
}
.requests-table table .table-content{
    display: flex;
    margin-top: 15px;
    width: 100%;
    cursor: pointer;
}
.requests-table table .table-content:hover{
    background: rgb(214, 238, 214);
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
.table-content .department{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.table-content .department-item{
    width: 25%;
}
.v-application{
    z-index: 1;
    margin-top: 55px;
    margin-left: 10px;
}
.v-picker__body{
    width: 100% !important;
    box-sizing: border-box;
}
.v-btn--round{
    background-color: aqua;
}
</style>
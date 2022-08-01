<template>
  <div @click="deactiveAllImg" class="requests-container">
    <div class="requests-header">
      <div class="requests-header-left">
        <span>Заявки</span>
        <p>Заявки</p>
      </div>
      <div class="requests-header-right">
        <div class="request-search-input">
          <input type="text" placeholder="Введите номер заявки" />
          <img src="@/assets/src/svg-icons/search.svg" alt="" />
        </div>
        <div class="request-header-img">
          <person-menu />
        </div>
      </div>
    </div>
    <div class="requests-content">
      <div class="requests-content-header">
        <div class="requests-content-one">
          <label for="content-one-select">Ведомство</label>
          <img :class="isActiveImg_one === true ? 'active-img-one': 'deactive-img-one'" src="@/assets/src/Icons/chevron-down.svg" alt="" />
          <v-app>
            <v-row @click.stop="activateImg_one" justify="center" class="ma-2">
              <v-col sm="6"
              
                ><v-select  label="Выберите ведомство" :items="getDepartments" v-model="Departments" @change="getRequestDepartment"></v-select
              ></v-col>
            </v-row>
          </v-app>
        </div>
        <div class="requests-content-one">
          <label for="request-status">Статус заявки</label>
          <img :class="isActiveImg_two === true ? 'active-img-two' : 'deactive-img-two'" src="@/assets/src/Icons/chevron-down.svg" alt="" />
          <v-app>
            <v-row @click.stop="activeImg_two" justify="center" class="ma-2">
              <v-col sm="6"
                ><v-select label="Все" :items="getRequestsStatus" v-model="requestStatus" @change="getRequestStatus"></v-select
              ></v-col>
            </v-row>
          </v-app>
        </div>
        <div class="requests-content-one">
          <label for="request-category">Категория нарушения</label>
          <img :class="isActiveImg_three === true? 'active-img-three' : 'deactive-img-three'" src="@/assets/src/Icons/chevron-down.svg" alt="" />
          <v-app>
            <v-row @click.stop="activeImg_three" justify="center" class="ma-2">
              <v-col sm="6"
                ><v-select label="Все" :items="getRequestsCategories" v-model="requestCategory" @change="getRequestCategory"></v-select
              ></v-col>
            </v-row>
          </v-app>
        </div>
        <div @click="showData" class="requests-content-two">
          <label for="request-date">Дата поступления заявки</label>
          <span>Выберите дату</span>
          <img src="@/assets/src/Icons/calendar.svg" alt="" />
          <!-- <input type="text" id="request-date"> -->
          <v-app v-if="isData" class="data-picker">
            <v-row justify="center">
              <v-date-picker color="green"
                header-color="primary" v-model="picker" @change="getRequestData"></v-date-picker>
            </v-row>
          </v-app>
        </div>
      </div>
      <div class="requests-content-content">
        <span>Заявки</span>
        <div class="requests-table">
          <table>
            <hr />
            <tr>
              <th>Номер заявителя</th>
              <th>Количество нарушения</th>
              <th>Время отправки</th>
              <th>Статус заявки</th>
              <th>Ответвление ведомство</th>
              <th>Ответственный сотрудник</th>
            </tr>
            <hr />
            <tr v-for="(now, idx) in news" :key="idx" class="table-content">
              <td>{{ now.phoneNumber }}</td>
              <td>Выброс мусора</td>
              <td>{{ now.lastDateOfSolving }}</td>
              <td class="td-item">{{ now.status }}</td>
              <div tag="td" class="department-item">
                <td
                  v-for="(depart, idy) in now.department"
                  :key="idy"
                  class="department"
                >
                  {{ depart }}
                </td>
              </div>

              <td>{{ now.name }}</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="request-footer">
        <div class="footer-left-block">
          <button>
            <img
              class="request-right"
              src="@/assets/src/Icons/Vector-left.svg"
              alt=""
            />
            <span>Пред .</span>
          </button>
          <button>
            <img
              class="request-left"
              src="@/assets/src/Icons/chevron-right.svg"
              alt=""
            />
            <span>След .</span>
          </button>
        </div>
        <div class="footer-center">
          <span>Страница</span>
          <input type="text" placeholder="1" />
          <span>из 0</span>
          <button>
            <img src="@/assets/src/Icons/chevron-right.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PersonMenu from "../PersonMenu.vue";
export default {
  components: { PersonMenu },
  name: "request-blog",
  data() {
    return {
      news: null,
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      isData: false,
      isActiveImg_one: false,
      isActiveImg_two: false,
      isActiveImg_three: false,
      Departments: null,
      requestStatus: null,
      requestCategory: null
    };
  },
  mounted() {
    this.getNews();
  },
  computed:{
    getDepartments(){
      const request_departments = this.$store?.getters && this.$store.getters?.getRequestDepartments&& this.$store.getters.getRequestDepartments
      return request_departments
    },
    getRequestsStatus(){
      const requests_status = this.$store?.getters && this.$store.getters?.getRequestStatus && this.$store.getters.getRequestStatus
      return requests_status
    },
    getRequestsCategories(){
      const request_category = this.$store?.getters && this.$store.getters?.getRequestCategories && this.$store.getters.getRequestCategories
      return request_category
    }
  },
  
  methods: {
    getRequestData(){
      this.$store.dispatch('getRequestData', {
        data: this.picker
      })
    },
    getRequestDepartment(){
      this.$store.dispatch('getRequestDepartment', {
        deparment : this.Departments
      })
      .then(response =>{
        console.log(response)
      })
    },
    getRequestStatus(){
      this.$store.dispatch('getRequestStatus', {
        status: this.requestStatus
      })
      .then(response=> {
        console.log(response)
      })
    },
    getRequestCategory(){
      this.$store.dispatch('getRequestCategories', {
        category: this.requestCategory
      })
      .then(response=> {
        console.log(response)
      })
    },
    // sendStatus(){
    //   this.$api.get(`applications/news/?${this.requestStatus}`)
    //   .then(response => {
    //     console.log(response)
    //   },
    //   error=> {
    //     console.log(error)
    //   }
    //   )
    // },
    
   
    getNews() {
      setTimeout(()=>{
        this.$store.dispatch('getNews')
      .then(response=>{
        console.log(response)
      })
      
      }, 1000)
      // this.$api.get("/applications/news").then(
      //   (response) => {
      //     this.news = response.data;
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // );
    },
    activateImg_one(){
      this.isActiveImg_one = !this.isActiveImg_one
    },
    activeImg_two(){
      this.isActiveImg_two = !this.isActiveImg_two
    },
    activeImg_three(){
      this.isActiveImg_three = !this.isActiveImg_three
    },
    deactiveAllImg(){
      this.isActiveImg_one = false,
      this.isActiveImg_two = false,
      this.isActiveImg_three = false
    },
    showData() {
      this.isData = !this.isData
    },
  }
}
</script>
<style>
.request-header-img .personal-keys {
  display: none;
}
.requests-content-header .requests-content-one .v-application .v-select__selections input {
  cursor: pointer;
}
.requests-content-one .active-img-one{
  transform: rotate(180deg);
  transition: transform .5s;
}
.requests-content-one .deactive-img-one{
  transition: transform .5s;
}

.requests-content-one .active-img-two{
  transform: rotate(180deg);
  transition: transform .5s;
}
.requests-content-one .deactive-img-two{
  transition: transform .5s;
}

.requests-content-one .active-img-three{
  transform: rotate(180deg);
  transition: transform .5s;
}
.requests-content-one .deactive-img-three{
  transition: transform .5s;
}

</style>

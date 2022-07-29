<template>
  <div class="requests-container">
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
          <img src="@/assets/src/Icons/chevron-down.svg" alt="" />
          <v-app>
            <v-row justify="center" class="ma-2">
              <v-col sm="6"
                ><v-select label="Выберите ведомство" :items="items"></v-select
              ></v-col>
            </v-row>
          </v-app>
        </div>
        <div class="requests-content-one">
          <label for="request-status">Статус заявки</label>
          <img src="@/assets/src/Icons/chevron-down.svg" alt="" />
          <v-app>
            <v-row justify="center" class="ma-2">
              <v-col sm="6"
                ><v-select label="Все" :items="items1"></v-select
              ></v-col>
            </v-row>
          </v-app>
        </div>
        <div class="requests-content-one">
          <label for="request-category">Категория нарушения</label>
          <img src="@/assets/src/Icons/chevron-down.svg" alt="" />
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
          <img src="@/assets/src/Icons/calendar.svg" alt="" />
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

      items: ["Blue", "Red", "Yellow", "Green"],
      items1: ["Green", "White"],
      items2: ["Red", "Black", "Dark-Blue"],
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    getNews() {
      this.$api.get("/applications/news").then(
        (response) => {
          this.news = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
    },
    showData() {
      this.isData = !this.isData;
      // console.log(this.isData)
    },
  },
};
</script>
<style>
.request-header-img .personal-keys {
  display: none;
}


</style>

<template>
  <div class="statistics-container">
    <div class="statistics-header">
      <div class="statistics-header-left">
        <span>Статистика</span>
        <p>Статистика</p>
      </div>
      <person-menu />
    </div>

    <div class="statistics-content">
      <div class="statistics-content-header">
        
          <v-app>
            <p>Категория статистики</p>
          <v-row justify="center" class="ma-2">
            <v-col sm="6"
              ><v-select label="Все" :items="items"></v-select
            ></v-col>
          </v-row>
        </v-app>
        
        
          <v-app>
            <p>Период</p>
          <v-row justify="center" class="ma-2">
            <v-col sm="6"
              ><v-select label="Годовая статистика" :items="items1"></v-select
            ></v-col>
          </v-row>
        </v-app>
        

        
           <v-app>
            <p>Год</p>
          <v-row justify="center" class="ma-2">
            <v-col sm="6"
              ><v-select label="Color" :items="items2"></v-select
            ></v-col>
          </v-row>
        </v-app>
       

        
          <v-app>
            <p>Месяц</p>
          <v-row justify="center" class="ma-2">
            <v-col sm="6"
              ><v-select label="Color" :items="items3"></v-select
            ></v-col>
          </v-row>
        </v-app>
        </div>
        

       

        <div class="statistics-content-content">
          <table>
            <tr class="table-header">
              <th class="th-one">Дата</th>
              <th class="th-two two">Количество заявок</th>
              <th class="th-two">Решенные заявки в %</th>
              <th class="th-two">Ложные заявки в %</th>
              <th class="th-two">Соотношение случаев в аналогичном периоде</th>
            </tr>
            <tr class="table-content">
              <td class="td-one">01.04.2022</td>
              <td class="td-two">1916</td>
              <td class="td-two">57,80 %</td>
              <td class="td-two two">04,22 %</td>
              <td class="td-two two">04,22 %</td>
            </tr>
          </table>
        </div>
        <div class="statistics-footer">
          <div class="statistics-footer-left">
            <button class="btn-item-one">
              <img
                class="statistics-left"
                src="@/assets/src/Vector (2).png"
                alt=""
              />
              Пред .
            </button>
            <button class="footer-btn-item">
              <img
                class="statistics-right"
                src="@/assets/src/Vector (1).png"
                alt=""
              />
              След .
            </button>
          </div>
          <div class="statistics-footer-right">
            <button>
              <img src="@/assets/src/svg-icons/print.svg" alt="" />
              Распечатать
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
  name: "statistics-app",
  data() {
    return {
      items: ["Blue", "Red", "Yellow", "Green"],
      items1: ["Green", "White"],
      items2: ["Red", "Black", "Dark-Blue"],
      items3: ["Purple", "Yellow", "Brown"]
    };
  },
  methods: {},
};
</script>
<style>
hr {
  border: 1px solid #e2e8f0;
}

.statistics-content .statistics-content-header{
    display: flex;
    flex: 0 0 auto;
    position: relative;
    margin-top: 25px;
    width: 100%;
    height: 25%;
}

.statistics-header .personal-keys {
  display: none;
}

.statistics-content .statistics-content-header .v-application--wrap {
    min-height: auto;
}

.statistics-content .statistics-content-header .v-application{
  background: none !important;
  width: 25% !important;
  margin-top: 20px !important;
}
.statistics-content .statistics-content-header .col-sm-6{
  width: 100% !important;
  
}

.statistics-content .statistics-content-header .v-menu__content{
  max-height: 304px;
  min-width: 95% !important;
  top: 50px !important;
  margin-left: -100px;
  margin-top: 35px;
  background: #1fef52;
  /* left: 10px !important; */
}
.statistics-content .statistics-content-header .v-menu__content{
  position: absolute;
  top: 75px !important;
  width: 75%;
  height: auto;
}
.statistics-content .statistics-content-header .justify-center{
  border-radius: 10px !important;
  margin: 0 !important;
  background: #FFFFFF;
  margin-left: 15px !important;
}
.statistics-content .statistics-content-header .statistics-content-header .drop-common{
  width: 25%;
  display: flex;
  flex: 0 0 auto;
}
.v-application p{
  display: block;
  position: absolute;
  top: -25px;
  left: 10px;
}


.statistics-header .personal-keys {
  display: none;
}
.statistics-content-content {
  width: 100%;
  margin-top: 25px;
  margin-left: 15px;
}
.statistics-content-content table {
  display: block;
  background: #fff;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
}
.statistics-content-content table tr {
  display: flex;
  width: 100%;
  justify-items: flex-start;
  margin-left: 10px;
}
.statistics-content-content table tr th {
  display: block;
  flex: 0 0 auto;
  width: 20%;
  text-align: left;
  border-bottom: 2px solid #ccc;
}
.statistics-content-content table tr td {
  display: block;
  flex: 0 0 auto;
  width: 20%;
  margin-top: 15px;
  text-align: left;
  cursor: pointer;
}

.statistics-footer {
  display: flex;
  width: 100%;
  margin-top: 50px;
  margin-left: 25px;
  margin-bottom: 25px;
}
.statistics-footer .statistics-footer-left {
  display: flex;
  width: 50%;
}
.statistics-footer-left button {
  display: flex;
  background: #ffffff;
  width: 20%;
  height: 50px;
  margin-left: 15px;
  border-radius: 10px;
  align-items: center;
  position: relative;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #ccc;
}
.statistics-footer-left button:hover {
  color: #1fef52;
}
.statistics-footer-left button .statistics-left {
  display: block;
  position: absolute;
  left: 25px;
}
.statistics-footer-left button .statistics-right {
  display: block;
  position: absolute;
  right: 25px;
}

.statistics-footer .statistics-footer-right {
  display: flex;
  width: 50%;
}
.statistics-footer-right button {
  display: block;
  position: relative;
  width: 25%;
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding-left: 10px;
  color: #ccc;
}
.statistics-footer-right button:hover {
  color: #1fef52;
}
.statistics-footer-right button img {
  display: block;
  width: 15%;
  position: absolute;
  left: 10px;
}

</style>

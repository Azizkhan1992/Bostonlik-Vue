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

.statistics-header .personal-keys {
  display: none;
}



</style>

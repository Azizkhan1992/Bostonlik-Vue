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
        
          <v-app :class="isActiveSvg_one == true ? 'active-svg-one' : 'deactive-svg-one'">
            <p>Категория статистики</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289L12 14.5858L19.2929 7.29289C19.6834 6.90237 20.3166 6.90237 20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289Z" stroke="#1C9E3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          <v-row @click="activeInput" justify="center" class="ma-2">
            <v-col sm="6"
              ><v-select  label="Все" :items="items"></v-select
            ></v-col>
          </v-row>
        </v-app>
        
        
          <v-app>
            <p>Период</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289L12 14.5858L19.2929 7.29289C19.6834 6.90237 20.3166 6.90237 20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289Z" stroke="#1C9E3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          <v-row justify="center" class="ma-2">
            <v-col sm="6"
              ><v-select label="Годовая статистика" :items="items1"></v-select
            ></v-col>
          </v-row>
        </v-app>
        

        
           <v-app>
            <p>Год</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289L12 14.5858L19.2929 7.29289C19.6834 6.90237 20.3166 6.90237 20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289Z" stroke="#1C9E3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          <v-row justify="center" class="ma-2">
            <v-col sm="6"
              ><v-select label="Color" :items="items2"></v-select
            ></v-col>
          </v-row>
        </v-app>
       

        
          <v-app>
            <p>Месяц</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289L12 14.5858L19.2929 7.29289C19.6834 6.90237 20.3166 6.90237 20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289Z" stroke="#1C9E3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
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
      items1: ["Годовая статистика", "Квартальная статистика", "Месячная статистика", "Недельная статистика"],
      items2: ["Red", "Black", "Dark-Blue"],
      items3: ["Purple", "Yellow", "Brown"],
      isActiveSvg_one: false
    }
  },
  methods: {
    activeInput(){
      this.isActiveSvg_one = !this.isActiveSvg_one
      console.log(this.isActiveSvg_one)
    }
  },
};
</script>
<style>

.statistics-header .personal-keys {
  display: none;
}

.statistics-content-header .v-application .v-select__selections input{
  cursor: pointer;
}
.statistics-content-header .v-application svg{
  position: absolute;
  top: 40px;
  margin-left: 300px;
}
.statistics-content-header .active-svg-one svg{
  transform: rotate(180deg);
  transition: transform .5s;
}
.statistics-content-header .deactive-svg-one svg{
  transition: transform .5s;
}
</style>

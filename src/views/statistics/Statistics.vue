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
        <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>


        <div class="statistics-content-one two">
          <span>Период</span>
          <div class="statistics-select">
                 <img src="@/assets/src/Icons/chevron-down.svg" alt="" />
          <select id="statistics-period">
            <option value="">Предложение</option>
            <option value="">Откритые</option>
            <option value="">Закрытые</option>
          
         
          </select>

          </div>
        </div>

        <div class="statistics-content-one three">
          <span>Год</span>
          <div class="statistics-select">
                <img src="@/assets/src/Icons/chevron-down.svg" alt="" />
          <select id="statistics-year">
            <option value="">2022</option>
            <option value="">Естественные</option>
            <option value="">Человеческие</option>
          </select>
          </div>
          
        </div>

        <div class="statistics-content-one four">
          <span>Месяц</span>
          <div class="statistics-select">
             <img src="@/assets/src/Icons/chevron-down.svg" alt="" />
          <select id="statistics-month">
            <option value="">Апрель</option>
            <option value="">Естественные</option>
            <option value="">Человеческие</option>
          </select>
          </div>
         
        </div>
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
        items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
        ]   
    };
  },
  methods: {},
};
</script>
<style>
hr {
  border: 1px solid #e2e8f0;
}

.statistics-header .personal-keys {
  display: none;
}

.statistics-content-header{
    display: flex;
    width: 100%;
    margin-top: 75px;
}
.statistics-content-header .statistics-content-one{
    display: flex;
    position: relative;
    width: 24%;
    margin-left: 15px;
}
.statistics-content-one span{
    display: block;
    flex: 0 0 auto;
    position: absolute;
    left: 10px;
    bottom: 30px;
    margin-left: 10px;
}
.statistics-content-one .statistics-select{
    display: flex;
    width: 100%;
    height: 50px;
    background: #FFFFFF;
    position: absolute;
    left: 15px;
    bottom: -25px;
    border-radius: 10px;
    position: relative;
}
.statistics-content-one .statistics-select img{
    display: block;
    position: absolute;
    right: 10px;
    top: 15px;
}
.statistics-content-one .statistics-select select{
    display: block;
    margin-left: 15px;
    margin-top: 10px;
    height: 35px;
    width: 100%;
    padding-left: 10px;
    -moz-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

.statistics-content-one .statistics-select select:hover{
    -moz-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

/* .statistics-content-one select {
  margin-top: 5px;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  border: none;
  outline: none;
  display: inline-block;
  -moz-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  /* margin-left: 25px; */
/* } */ */

.statistics-header .personal-keys {
  display: none;
}
.statistics-content-content {
  width: 100%;
  margin-top: 50px;
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

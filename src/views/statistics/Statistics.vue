<template>
<div class="statistics-container">
        <div class="statistics-header">
            <div class="statistics-header-left">
                <span>Статистика</span>
                <p>Статистика</p>
            </div>
            <person-menu/>
        </div>
        <div class="statistics-content">
            <div class="statistics-content-header">
               
                <div class="statistics-content-one one">
                <span>Категория статистики  </span>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="statistics-one-select">
                    <option value="">Все</option>
                    <option value="">Новые</option>
                    <option value="">Старые</option>
                </select>
            </div>

            
            <div class="statistics-content-one two">
                <span>Период</span>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="statistics-period">
                    <option value="">Предложение</option>
                    <option value="">Откритые</option>
                    <option value="">Закрытые</option>
                </select>
            </div>
            
            
            <div class="statistics-content-one three">
                <span>Год</span>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="statistics-year">
                    <option value="">2022</option>
                    <option value="">Естественные</option>
                    <option value="">Человеческие</option>
                </select>
            </div>

            
            <div class="statistics-content-one four">
                <span>Месяц</span>
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="statistics-month">
                    <option value="">Апрель</option>
                    <option value="">Естественные</option>
                    <option value="">Человеческие</option>
                </select>
            </div>
            </div>
            <div class="statistics-content-content">
                <table>
                    <hr/>
                    <tr class="table-header">
                        <th class="th-one">ФИО Заявителя</th>
                        <th class="th-two two">номер телефона</th>
                        <th class="th-two">Категория</th>
                        <th class="th-two">Статус</th>
                        <th class="th-two">Дата поступления</th>
                    </tr>
                    <hr/>
                    <tr class="table-content">
                        <td class="td-one">Абдужабборов Акбар</td>
                        <td class="td-two">Место не убрано...</td>
                        <td class="td-two">Предложение</td>
                        <td class="td-two two">Прочитано</td>
                        <td class="td-two two">01.01.2022</td>
                    </tr>
                </table>
            </div>
            <div class="statistics-footer">
                <div class="statistics-footer-left">
                    <button class="btn-item-one">
                        <img src="@/assets/src/Icons/Vector-left.svg" alt="">
                        <span>Пред.</span>
                    </button>
                    <button class="footer-btn-item">
                        <img class="right-img" src="@/assets/src/Icons/chevron-right.svg" alt="">
                        <span>След.</span>
                    </button>
                </div>
                <div class="statistics-footer-right">
                    <img src="@/assets/src/svg-icons/print.svg" alt="">
                    <span>Распечатать</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PersonMenu from '../PersonMenu.vue'
export default {
  components: { PersonMenu },
    name: 'statistics-app',
    data(){
        return{
        }
    },
    methods:{
        
    }
}
</script>
<style>
hr{
    border: 1px solid #E2E8F0
}
.statistics-header .personal-keys{
    display: none;  
}

</style>
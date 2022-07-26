<template>
    <div class="sentenses-container">
        <div class="sentenses-header">
            <div class="sentenses-header-left">
                <span>Жалобы и предложения</span>
                <p>Жалобы и предложения</p>
            </div>
            <person-menu/>
        </div>
        <div class="sentenses-content">
            <div class="sentenses-content-header">
                <div class="sentenses-content-one one">

                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="sentenses-one-select">
                    <option value="">Все</option>
                    <option value="">Новые</option>
                    <option value="">Старые</option>
                </select>
            </div>
            <div class="sentenses-content-one two">
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="sentenses-status">
                    <option value="">Предложение</option>
                    <option value="">Откритые</option>
                    <option value="">Закрытые</option>
                </select>
            </div>
            <div class="sentenses-content-one three">
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="sentenses-month">
                    <option value="">2022</option>
                    <option value="">Естественные</option>
                    <option value="">Человеческие</option>
                </select>
            </div>
            <div class="sentenses-content-one four">
                <img src="@/assets/src/Icons/chevron-down.svg" alt="">
                <select id="sentenses-year">
                    <option value="">Апрель</option>
                    <option value="">Естественные</option>
                    <option value="">Человеческие</option>
                </select>
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
                        <img src="@/assets/src/Icons/Vector-left.svg" alt="">
                        <span>Пред.</span>
                    </button>
                    <button class="footer-btn-item">
                        <img class="right-img" src="@/assets/src/Icons/chevron-right.svg" alt="">
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
    name: 'sentense-app'
}
</script>
<style>
.sentenses-header .personal-keys{
    display: none;  
}
</style>
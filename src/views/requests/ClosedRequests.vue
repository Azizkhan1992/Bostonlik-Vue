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
            <div class="requests-content-one">
                <label for="request-date">Дата поступления заявки</label>
                <img src="@/assets/src/Icons/calendar.svg" alt="">
                <input type="text" id="request-date">
            </div>
        </div>
        <div class="requests-content-content">
            <span>Заявки</span>
            <div class="requests-table">
                <table>
                    <hr/>
                    <tr>
                        <th>Заявитель</th>
                        <th>Количество нарушения</th>
                        <th>Время отправки</th>
                        <th>Статус заявки</th>
                        <th>Ответвление ведомство</th>
                        <th>Ответственный сотркдник</th>
                    </tr>
                    <hr/>
                     <tr class="table-content">
                        <td>+99890123-45-67</td>
                        <td>Выброс мусора</td>
                        <td>22.07.2022 14:37</td>
                        <td class="td-item">Решено</td>
                        <td>Эко-прокуратура</td>
                        <td>Не определен</td>
                    </tr>
                </table>
            </div>
        </div>

    </div>
</div>
</template>
<script>
import PersonMenu from '../PersonMenu.vue'
export default {
  components: { PersonMenu },
    name: 'closed-requests'
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
</style>
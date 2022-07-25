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
                <img src="@/assets/src/Icons/Ellipse.png" alt="">
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
                    <tr>
                        <th>Заявитель</th>
                        <th>Количество нарушения</th>
                        <th>Время отправки</th>
                        <th>Статус заявки</th>
                        <th>Ответвление ведомство</th>
                        <th>Ответственный сотркдник</th>
                    </tr>
                </table>
            </div>
        </div>

    </div>
</div>
</template>
<script>
export default {
    name: 'closed-requests'
}
</script>
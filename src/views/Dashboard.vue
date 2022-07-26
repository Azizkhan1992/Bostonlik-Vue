<template>
<div class="dashboard-container">
    <div class="dashboard-header">
        <span>Панел графиков</span>
        <person-menu/>
    </div>

    <div class="dashboard-block-one">
        <div class="inner-block">
                <img src="@/assets/src/svg-icons/dashboard_avatar.svg" alt="">
                <div class="title-block">
                    <span>Всего</span>
                    <P class="title-text">2231</P>
                </div>
        </div>
        <div class="inner-block">
            <img src="@/assets/src/svg-icons/dashboard_avatar.svg" alt="">
            <div class="title-block">
                <span>Новые заявки</span>
                <p>29</p>
            </div>
        </div>
        <div class="inner-block">
            <img src="/src/svg-icons/dashboard_avatar2.svg" alt="">
            <div class="title-block">
                <span>Заявки в обработке</span>
                <p>62</p>
            </div>
        </div>
    </div>
    <div class="dashboard-block-two">
        <div class="inner-block-one">
            <img src="@/assets/src/svg-icons/dashboard_avatar3.svg" alt="">
            <div class="title-block-one">
                <span>Закрытие заявки</span>
                <p>1998</p>
            </div>
        </div>
        <div class="inner-block-one">
            <img src="@/assets/src/svg-icons/dashboard_avatar2.svg" alt="">
            <div class="title-block-one">
                <span>Ложные заявки</span>
                <p>142</p>
            </div>
        </div>
    </div>
    <div class="dashboard-block-three">
        <div class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar4.svg" alt="">
            <div class="title-block-two">
                <span>Стихийная свалка</span>
                <p>24</p>
            </div>
        </div>
        <div class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar5.svg" alt="">
            <div class="title-block-two">
                <span>Скопления мусора</span>
                <p>128</p>
            </div>
        </div>
        <div class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar6.svg" alt="">
            <div class="title-block-two">
                <span>Выброс мусора в неположённом месте</span>
                <p>156</p>
            </div>
        </div>
        <div class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar7.svg" alt="">
            <div class="title-block-two">
                <span>Вырубка деревьев</span>
                <p>44</p>
            </div>
        </div>
    </div>
    <div class="dashboard-block-four">
        <div class="inner-block-three">
            <img class="block-img" src="@/assets/src/svg-icons/dashboard_avatar8.svg" alt="">
            <div class="title-block-three">
                <span class="title-span">Разведение огня в неположённом месте</span>
                <p>57</p>
            </div>
        </div>
        <div class="inner-block-three">
            <img class="block-img-item" src="@/assets/src/svg-icons/dashboard_avatar9.svg" alt="">
            <div class="title-block-three">
                <span class="title-span">Выброс промишленных стоков/мусора в реку</span>
                <p>43</p>
            </div>
        </div>
        <div class="inner-block-three">
            <img class="img-item-one" src="@/assets/src/svg-icons/dashboard_avatar2.svg" alt="">
            <div class="title-block-three">
                <span class="title-span-item">Прочее</span>
                <p>83</p>
            </div>
        </div>
    </div>
    <div class="dashboard-block-five">
        <div class="inner-table">
            <span>Поцент решения случаев</span>
            <div class="inner-table-block-one">
                <table cell-spacing="0" cellpadding="0">
                    
                        <th>Ведомство</th>
                        <th>Кол-во заявок</th>
                        <th>% решения случаев</th>
                    
                </table>
            </div>
        </div>
        <div class="inner-table">
            <span>Среднее время обработки заявок ( за месяц )</span>
            <div class="inner-table-block">
                <table cell-spacing="0" cellpadding="0">
                        <th>Ведомство</th>
                        <th>Среднее время обработки (нынешный месяц)</th>
                        <th>Среднее время обработки (прошлый месяц)</th>
                </table>
            </div>
        </div>
    </div>

</div>
</template>
<script>
import TokenService from '@/services/TokenService'
export default {
    name: 'dashboard-app',
    data(){
        return{
        }
    },
    mounted(){
        this.getUser()
    },
    methods:{
      getUser(){
        this.$api.get('currentUser')
        .then(response => {
            if (response?.data?.user?.role) {
                TokenService.saveRoles(response.data.user.role)
            }
        },
        error => {
            console.log(error)
        }
        )
      }
    }
    

}
</script>
<style>
.dashboard-header .personal-keys{
    display: none;  
}

</style>
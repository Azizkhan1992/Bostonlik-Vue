<template>
<div class="dashboard-container">
    <div class="dashboard-header">
        <span>Панел графиков</span>
        <person-menu/>
    </div>
    <div v-if="can(['admin', 'moderator'])"  class="dashboard-block-one">
        <div class="inner-block">
           
                <img src="@/assets/src/svg-icons/dashboard_avatar.svg" alt="">
                <div class="title-block">
                    <span>Всего</span>
                    <P class="title-text">{{applications.applications}}</P>
                </div>
        </div>
        <div class="inner-block">
            <img src="@/assets/src/svg-icons/dashboard_avatar.svg" alt="">
            <div class="title-block">
                <span>Новые заявки</span>
                <p>{{applications.newApplications}}</p>
            </div>
        </div>
        <div class="inner-block">
            <img src="/src/svg-icons/dashboard_avatar2.svg" alt="">
            <div class="title-block">
                <span>Заявки в обработке</span>
                <p>{{applications.applicationsOnProcess}}</p>
            </div>
        </div>
    </div>
    <div class="dashboard-block-two">
        <div class="inner-block-one">
            <img src="@/assets/src/svg-icons/dashboard_avatar3.svg" alt="">
            <div class="title-block-one">
                <span>Закрытие заявки</span>
                <p>{{applications.completedApplications}}</p>
            </div>
        </div>
        <div class="inner-block-one">
            <img src="@/assets/src/svg-icons/dashboard_avatar2.svg" alt="">
            <div class="title-block-one">
                <span>Ложные заявки</span>
                <p>{{applications.falseApplications}}</p>
            </div>
        </div>
    </div>
    <div class="dashboard-block-three">
        <div class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar4.svg" alt="">
            <div class="title-block-two">
                <span>Стихийная свалка</span>
                <p>{{applications.spontaneous}}</p>
            </div>
        </div>
        <div class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar5.svg" alt="">
            <div class="title-block-two">
                <span>Скопления мусора</span>
                <p>{{applications.clusterGarbage}}</p>
            </div>
        </div>
        <div class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar6.svg" alt="">
            <div class="title-block-two">
                <span>Выброс мусора в неположённом месте</span>
                <p>{{applications.ejectionCarbage}}</p>
            </div>
        </div>
        <div class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar7.svg" alt="">
            <div class="title-block-two">
                <span>Вырубка деревьев</span>
                <p>{{applications.cuttingDownTrees}}</p>
            </div>
        </div>
    </div>
    <div v-if="getCheckedFire" class="dashboard-block-four">
        <div class="inner-block-three">
            <img class="block-img" src="@/assets/src/svg-icons/dashboard_avatar8.svg" alt="">
            <div class="title-block-three">
                <span class="title-span">Разведение огня в неположённом месте</span>
                <p>{{applications.breedingFire}}</p>
            </div>
        </div>
        <div class="inner-block-three">
            <img class="block-img-item" src="@/assets/src/svg-icons/dashboard_avatar9.svg" alt="">
            <div class="title-block-three">
                <span class="title-span">Выброс промишленных стоков/мусора в реку</span>
                <p>{{applications.industrialWaste}}</p>
            </div>
        </div>
        <div class="inner-block-three">
            <img class="img-item-one" src="@/assets/src/svg-icons/dashboard_avatar2.svg" alt="">
            <div class="title-block-three">
                <span class="title-span-item">Прочее</span>
                <p>{{applications.other}}</p>
            </div>
        </div>
    </div>
    <div class="dashboard-block-five">
        <div class="inner-table">
            <span>Поцент решения случаев</span>
            <div class="inner-table-block-one">
                <table cell-spacing="0" cellpadding="0">
                    <tr>
                        <th>Ведомство</th>
                        <th>Кол-во заявок</th>
                        <th>% решения случаев</th>
                    </tr>
                    <tr class="category-content-tr">
                        <td>Инспекция по экологии</td>
                        <td>{{applications.ecologyDepartment}}</td>     
                        <td>{{applications && applications.solutions && applications.solutions.ecologySolutions}}</td>
                    </tr>
                    
                </table>
            </div>
        </div>
        <div class="inner-table">
            <span>Среднее время обработки заявок ( за месяц )</span>
            <div class="inner-table-block">
                <table cell-spacing="0" cellpadding="0">
                    <tr>
                        <th>Ведомство</th>
                        <th>Среднее время обработки (нынешный месяц)</th>
                        <th>Среднее время обработки (прошлый месяц)</th>
                    </tr>
                    <tr class="category-content-tr"   >
                        <td>Инспекция по экологии</td>
                        <td>{{applications&& applications.stat && applications.stat.currentEcologyStat}}</td>
                        <td>{{applications && applications.stat && applications.stat.currentEcologyStat}}</td>
                    </tr>
                        
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
            applications: {},
            users_permissions: null,
            checker: false
        }
    },
    computed:{
        getCheckedFire(){
            let department = this.$store.getters && this.$store.getters.getDepartmentRoles;
            // console.log(22,department)  
            this.$store.getters &&  this.$store.getters.getCheckRoles && this.$store.getters.getCheckRoles.breedingFire && this.$store.getters.getCheckRoles.breedingFire.forEach(element => {
                element == department? this.checker = true : this.checker =false
            });
            console.log(this.checker);
            return this.checker;
        }
    },
    mounted(){
            this.getUser()
            this.getDashboardContent()
            this.getCheckRoles()
    },
    methods:{
      getUser(){
            const headers = {
                'Content-type': 'application/json',
                'authorization': `${TokenService.getToken()}`
            }
             this.$api.get('currentUser',{
                headers: headers
             })
            .then(response => {
                // console.log(response) 
            if (response?.data?.user?.role) {
                this.$store.dispatch('role', response.data.user.role)
            }
            if(response?.data?.user?.department){
                // console.log(response.data.user.department)
                this.$store.dispatch('department', response.data.user.department)
            }
        },
            error => {
            console.log(error)
        }
        )
        },
        getDashboardContent(){
            this.$api.get('dashboard')
            .then(response => {
                // console.log(response.data)
                this.applications = response.data
            },
            error => {console.log(error)}
            )
        },
        getCheckRoles(){
            this.$api.get('settings/check')
            .then(response => {
                if(response?.data?.categories){
                    const checkroles = response.data.categories
                    // console.log(checkroles)
                    this.users_permissions = checkroles
                    // console.log(this.users_permissions)
                    this.$store.dispatch('checkRoles', checkroles)
                }
            },
            error => {console.log(error)}
            )
        }
       
    }
    

}
</script>
<style>
.dashboard-header .personal-keys{
    display: none;  
}
.inner-table-block-one table .category-content-tr{
     box-sizing: border-box;
    vertical-align: middle;
    display: table-row;

    user-select: none;
    cursor: default;
    border: none;
    background: #f7fafc;
    height: 60px;
    width: 100%;
    font-family: Jost;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1px;
}
.inner-table-block-one table .category-content-tr td{
    font-size: 14px;

    padding: 0 20px;
    height: 60px;
    width: unset;
    align-items: center;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    display: table-cell;
    vertical-align: inherit;
}
.inner-table-block .time-content-tr{
     box-sizing: border-box;
    vertical-align: middle;
    display: table-row;

    user-select: none;
    cursor: default;
    border: none;
    background: #f7fafc;
    height: 60px;
    width: 100%;
    font-family: Jost;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1px;
}
.inner-table-block .time-content-tr td{
    font-size: 14px;

    padding: 0 20px;
    height: 60px;
    width: unset;
    align-items: center;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    display: table-cell;
    vertical-align: inherit;
}

</style>
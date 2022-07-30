<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
        <span>Панел графиков</span>
        <person-menu />
    </div>

    <div v-if="can(['admin', 'moderator'])" class="dashboard-block-one">
        <div class="inner-flex-block">
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




            <div class="inner-block-one">
            <img src="@/assets/src/svg-icons/dashboard_avatar3.svg" alt="">
            <div class="title-block-one">
                <span>Закрытие заявки</span>

                <p>{{applications.completedApplications}}</p>

            </div>
        </div>
        <div class="inner-block-one dashboard-one">
            <img src="@/assets/src/svg-icons/dashboard_avatar2.svg" alt="">
            <div class="title-block-one">
                <span>Ложные заявки</span>

                <p>{{applications.falseApplications}}</p>

            </div>
        </div>
    

        <div class="inner-block-two">

            <img src="@/assets/src/svg-icons/dashboard_avatar4.svg" alt="">
            <div class="title-block-two">
                <span>Стихийная свалка</span>
                <p>{{applications.spontaneous}}</p>

            </div>
        </div>
        <div  class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar5.svg" alt="">
            <div class="title-block-two">
                <span>Скопления мусора</span>

                <p>{{applications.clusterGarbage}}</p>

            </div>
        </div>
        <div  class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar6.svg" alt="">
            <div class="title-block-two">
                <span>Выброс мусора в неположённом месте</span>

                <p>{{applications.ejectionCarbage}}</p>

            </div>
        </div>
        <div v-if="checkCompanyRole('cuttingDownTrees')" class="inner-block-two">
            <img src="@/assets/src/svg-icons/dashboard_avatar7.svg" alt="">
            <div class="title-block-two">
                <span>Вырубка деревьев</span>

                <p>{{applications.cuttingDownTrees}}</p>
            </div>
        </div>
    
        <div v-if="checkCompanyRole('breedingFire')"  class="inner-block-three">

            <img class="block-img" src="@/assets/src/svg-icons/dashboard_avatar8.svg" alt="">
            <div class="title-block-three">
                <span class="title-span">Разведение огня в неположённом месте</span>
                <p>{{applications.breedingFire}}</p>

            </div>
        </div>
        <div v-if="checkCompanyRole('industrialWaste')"  class="inner-block-three">
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
        
    </div>
    
    <div v-if="can(['admin', 'moderator'])" class="dashboard-block-five">
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
            <div class="inner-table-block-one">
                <table cell-spacing="0" cellpadding="0">

                    <tr>
                        <th>Ведомство</th>
                        <th>Среднее время обработки (нынешный месяц)</th>
                        <th>Среднее время обработки (прошлый месяц)</th>
                    </tr>
                    <tr>
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
export default {
  name: "dashboard-app",

  data() {
    return {
      applications: {},
      users_permissions: null,
      checker: false,
    };
  },
  computed: {},
  mounted() {
    this.getUser();
    this.getDashboardContent();
    this.getCheckRoles();
  },
  methods: {
    checkCompanyRole(roleName) {
      // console.log(roleName);
      let checker = false;
      let department = this.$store.getters?.getDepartmentRoles;
      this.$store.getters?.getCheckRoles[roleName] &&
        this.$store.getters.getCheckRoles[roleName].forEach((element) => {
          element == department ? checker = true : checker = false;
        });
      return checker;
    },
    getUser() {
      this.$api
        .get("currentUser")

        .then(
          (response) => {
            if (response?.data?.user?.role) {
              this.$store.dispatch("role", response.data.user.role);
            }
            if (response?.data?.user?.department) {
              this.$store.dispatch("department", response.data.user.department);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    },
    getDashboardContent() {
      this.$api.get("dashboard").then(
        (response) => {
          this.applications = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getCheckRoles() {
      this.$api.get("settings/check").then(
        (response) => {
          if (response?.data?.categories) {
            const checkroles = response.data.categories;
            this.users_permissions = checkroles;
            this.$store.dispatch("CHECK_ROLES", checkroles);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style>

.dashboard-header .personal-keys {
  display: none;
}


</style>

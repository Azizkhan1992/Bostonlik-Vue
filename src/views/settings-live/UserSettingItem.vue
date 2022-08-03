    <template>
        <div class="user-item-container">
            <div class="user-item-content">
                <div class="user-item-one items">
                    <h3>ФИО</h3>
                    <span v-if="isSetUser">{{users.firstName}}</span>
                    <span v-else class="is-not-user">-</span>
                </div>
                <div class="user-item-two items">
                    <h3>Ведомство</h3>
                    <span>{{users.department}}</span>
                </div>
                <div class="user-item-three items">
                    <h3>Роль</h3>
                    <span>{{users.role}}</span>
                </div>
                <div class="user-item-four items">
                    <h3>Статус</h3>
                    <img class="current-user-img" src="@/assets/src/Vector (Stroke).png" alt="">
                    <select v-if="getCurrentUser" @change="changeStatus($event)" v-model="status" class="user-status-select" id="selectStatus">
                        <option  :value="true">Активный</option>
                        <option :value="false">Деактивный</option>
                    </select>
                    <!-- <span v-if="users.status === true">Активный</span> -->
                </div>
                <div class="user-item-five items">
                    <h3>Электронная почта</h3>
                    <span v-if="isSetUser">{{users.email}}</span>
                    <span v-else class="is-not-user">-</span>
                </div>
                <div class="user-item-six items">
                    <h3>Номер телефона</h3>
                    <span v-if="isSetUser">{{users.phoneNumber}}</span>
                    <span v-else class="is-not-user">-</span>
                </div>
                <div class="user-item-seven items">
                    <h3>Логин</h3>
                    <span>{{users.login}}</span>
                </div>
            </div>
            <div class="user-item-footer">
                <img src="@/assets/src/Icons/profil-icon.svg" alt="">
                <button @click="goBack" >Back</button>
            </div>
        </div>
    </template>
    <script>

    export default {
        name: 'user-setting-item',
        data(){
            return{
                status: {
                    ACTIVE: true,
                    NO_ACTIVE: false
                },
                id : this.$route.params,
                users: [],
                user: '',
                isSetUser: false,
            }
        },
        mounted(){
            this.getUserItem()
            // this.getSettingUser()
        },
        computed:{
            getCurrentUser(){
                const currentUser = this.$store?.getters && this.$store.getters?.getCurrentUser && this.$store.getters.getCurrentUser
                let checkCurrentUser;
                if(currentUser){
                    if(currentUser === 'admin')
                    checkCurrentUser = currentUser
                }
                
                return checkCurrentUser
            }
        },
        
        methods:{
            changeStatus(e){
                const target = e.target.value
                this.$store.dispatch("changeStatusUser", {
                    status: target,
                    id: this.$route.params.id
                })
                
            },
            getSettingUser(elem){
                console.log(elem)
                if(elem.lastName){
                    this.isSetUser = true

                }
            },
            getUserItem(){
                this.$api.get('users')
                .then(response =>{
                    this.checkUserItem(response.data)
                },
                error => {
                    console.log(error)
                }
                )
            },
            checkUserItem(item){
                const userId = this.$route.params.id
                item.forEach(element => {
                    if(element._id == userId){
                        this.users = element
                        this.getSettingUser(element)
                    }
                });

                    // console.log(this.users)
            },
            goBack(){
                this.$router.go(-1)
            }
        }
    }
    </script>
    <style>
    
    </style>
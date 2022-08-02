<template>
    <div class="request-item-container" @click="deactiveImages">
        <div class="request-item-header">
            <div class="item-header-left">
                <h2>Заявки</h2>
                <div class="item-header-titles">
                    <span>Откриытые заявки</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" class="request-item-svg">
                    <path d="M1.5 9L5.5 5L1.5 1" stroke="#1C9E3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="item-id">#{{request_item_id}}</p>
                </div>
                
            </div>
            <div class="item-header-right">
                <person-menu/>
            </div>
            
        </div>
        <div class="request-item-content">
            <div class="item-content-header">
                <div class="content-item">
                    <h4>Заявитель</h4>
                    <span>+998901234567</span>
                </div>
                <div class="content-item">
                    <h4>Категория нарушения</h4>
                    <span>Выброс мусора</span>
                </div>
                <div class="content-item">
                    <h4>Время отправки</h4>
                    <span>22.07.2022 14:37</span>
                </div>
                <div class="content-item item-select">
                    <h4>Статус заявки</h4>
                     <img src="@/assets/src/Icons/chevron-down.svg" :class="isRequestStatus === true ? 'active-request-svg' : 'deactive-request-svg'" class="item-dropdown-svg"/>
                            
                    <v-app>
                       
                    <v-row @click.stop="showStatusRequest" justify="center" class="ma-2">
                    <v-col sm="6"
              
                        ><v-select  label="В обработке" :items="items"></v-select
                    ></v-col>
                    </v-row>
                    </v-app>
                </div>
                <div class="content-item">
                    <h4>Ответственное ведомство</h4>
                    <span>Эко-прокуратура</span>
                </div>
                <div class="content-item">
                    <h4>Ответственный сотрудник</h4>
                    <span>Не определен</span>
                </div>
            </div>
            <div class="item-content-center">
                <div class="request-content-title">
                    <h4>Описание</h4>
                    <p>Какой-то не законопослушный человек решил выбросить мусор в неположенном месте. Но, я как АБСОЛЮТНО ЗАКОНОПОСЛУШНЫЙ гражданин заявляю вам об этом случае и прошу принять соответственные меры!</p>
                </div>
                <div class="request-content-date">
                    <h4>Время на решение заявки</h4>
                    <span>До 17.06.2022 14:37</span>
                </div>
            </div>
            <div class="item-content-footer">
                <div class="item-footer-images">
                    <p>Файлы</p>
                    <div class="fields-images">
                        <img src="@/assets/src/image 1.png" alt="">
                        <img src="@/assets/src/image 2.png" alt="">
                        <img src="@/assets/src/image 4.png" alt="">
                    </div>
                </div>
                <div class="location-request">
                    <p>Местоположение случившегося нарушения</p>
                    <span>Ташкентская область, Бостанликский район, поселок Чимган, ул. Ш. Рашидов 67Б</span>
                    <img src="@/assets/src/Vector (4).png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PersonMenu from '@/views/PersonMenu.vue'
export default {
  components: { PersonMenu },
    name: 'request-blog-item',
    data(){
        return{
            request_item_id: null,
            items: ["В обработке", "Решена", "Ложная информация"],
            isRequestStatus: false
        }
    },
    mounted(){
        this.getRequestItem_id()
    },
    methods:{
        showStatusRequest(){
            this.isRequestStatus = !this.isRequestStatus
            // console.log(this.isRequestStatus)
        },
        deactiveImages(){
            this.isRequestStatus = false
        },
        getRequestItem_id(){
            this.request_item_id = this.$route.params.id
            // console.log(this.request_item_id)
        }
    }
   
}
</script>
<style>
.request-item-header .personal-keys {
  display: none;
}


</style>
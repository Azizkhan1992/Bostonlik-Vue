import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import router from '@/router'
import TokenService from '@/services/TokenService';


Vue.use(VueAxios, axios);


const URL_BASE = 'https://back.bostonliqlive.uz/api/'
const instance = axios.create({
    baseURL: URL_BASE,
    headers: {
        common: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    },
});

instance.interceptors.response.use(config => {
    if(TokenService.getToken()){
        config.headers = {
            'authorization' : `Bearer ${localStorage.getToken()}` 
        }
    }
    return config
}, error => { if(error.response.status === 401 ){
    TokenService.removeToken()
}})



Vue.prototype.$api = instance;

export default instance;
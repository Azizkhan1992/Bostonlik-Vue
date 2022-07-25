import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import TokenService from '@/services/TokenService';


Vue.use(VueAxios, axios);


const URL_BASE = 'https://back.bostonliqlive.uz/api/'
const instance = axios.create({
    baseURL: URL_BASE,
    headers: {
        common: {
            'X-Requested-With': 'XMLHttpRequest',
            "Access-Control-Allow-Headers": "content-type",
            "Access-Control-Allow-Origin": "*"
        },
    },
});


const _token = TokenService.getToken();


axios.defaults.headers.common['Authorization'] = 'Bearer ' + _token;


instance.interceptors.response.use(config => {
    if(TokenService.getToken()){
        config.headers = {
            'authorization' : `Bearer ${localStorage.getToken()}` 
        }
    }
    return config
}, error => { if(error.response.status === 401 ){
    TokenService.removeToken()
}});




Vue.prototype.$api = instance;

export default instance;
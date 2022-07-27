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

<<<<<<< HEAD
instance.interceptors.request.use((config) => {
    const _token = TokenService.getToken();
    if (_token) {
        // console.log(config)
=======
const _token = TokenService.getToken();

instance.interceptors.request.use((config) => {
    if (_token) {
>>>>>>> a1dd48d86b9c62883cea2566aaded5cbf0d6e41b
        config.headers['authorization'] = `${_token}`
    }
    return config;
}, error => console.log(error))


Vue.prototype.$api = instance;

export default instance;
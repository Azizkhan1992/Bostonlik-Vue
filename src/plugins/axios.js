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

instance.interceptors.request.use((config) => {
    if (_token) {
        // console.log(config)
        config.headers['authorization'] = `${_token}`
    }
    return config;
}, error => console.log(error))


Vue.prototype.$api = instance;

export default instance;
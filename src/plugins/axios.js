import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


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



Vue.prototype.$api = instance;

export default instance;
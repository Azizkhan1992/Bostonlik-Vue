import Vue from "vue";
// import { axios } from "vue/types/umd";
import Vuex from "vuex";
// import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentUser: null,
    role: [],
    checkRoles: [],
    requestsDepartments: [
      "Инспекция по экологии",

      "Тоза худуд",

      "Экопрокуратура",

      "Тур Полиция",

      "ТРЗ <<Чарвак>>",

      "МВД",

      "Лесное хозяйство",

      "Комитет по автомобильным дорогам",
    ],
    requestsStatus:[
        "Новая",
        "Процесс",
        "Просрочено"
    ],
    requestsCategories: [
        "Стихийная свалка",
        "Скопление мусора",
        "Выброс мусора в неположенном месте",
        "Вырубка деревьев",
        "Разведение огня в неположенном месте",
        "Выброс промишленных стоков/мусора в реку"
    ],
    departmentRole: "",
  },
  actions: {
    getNews(){
        return this.$api.get("applicatins/news")
        .then(response=>{
            console.log(response)
            return response
        }).catch(error=>{console.log(error)})
    },
    getRequestData(_, params){
        return this.$api.get("applications/news", {params})
        .then(response => {
            return response
        }).catch(error=>{console.log(error)})
    },
    getRequestCategories(_, params){
        return this.$api.get("applications/news", {params})
        .then(response=>{
            return response
        }).catch(error=>console.log(error))
    },
    getRequestStatus(_, params){
        return this.$api.get("applications/news", {params})
        .then(response=>{
            return response
        }).catch(error=>{console.log(error)})
    },
    getRequestDepartment(_, params){
        return this.$api.get("applications/news", {params})
        .then(response => {
            console.log(response)
            return response
        }).catch(error=>console.log(error))
    },
    getCurrentUsers(_,params){
        return this.$api.get("currentUser",{params})
        .then(response =>{
            // console.log(response);
            return response
        },
        ).catch(error=>{console.log(error)}) 
        
    },
    role(userRole, role) {
      userRole.commit("role", role);
    },
    department(department, departmentRole) {
      department.commit("departmentRole", departmentRole);
    },
    logOut() {
      this.state.role.pop();
      // localStorage.removeItem('token')
      // delete axios.defaults.headers.common['Authorization']
    },
    CHECK_ROLES({ commit }, checkRoles) {
      // console.log(checkRoles);
      commit("check_Roles", checkRoles);
    },
  },
  mutations: {
    currentUser(state, data){
        state.currentUser = data
        console.log(data)
    },
    role(state, role) {
      state.role.push(role);
    },
    departmentRole(state, departmentRole) {
      state.departmentRole = departmentRole;
    },
    check_Roles(state, checkRoles) {
      // console.log(checkRoles);
      state.checkRoles = checkRoles;
    },
  },
  getters: {
    getRole(state) {
      return state.role;
    },
    getCheckRoles(state) {
      return state.checkRoles;
    },
    getDepartmentRoles(state) {
      return state.departmentRole;
    },
    getRequestDepartments(state) {
      return state.requestsDepartments;
    },
    getRequestStatus(state){
        return state.requestsStatus
    },
    getRequestCategories(state){
        return state.requestsCategories
    }
  },
});

export default store;

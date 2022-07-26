import Vue from "vue";
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        role: [],
        checkRoles: [],
        departmentRole: ''
    },
    actions:{
        role(userRole, role){
            userRole.commit('role', role)
        },
        department(department, departmentRole ){
            department.commit('departmentRole', departmentRole)
        },
        logOut(){
            this.state.role.pop()
            // localStorage.removeItem('token')
            // delete axios.defaults.headers.common['Authorization']
        },
        checkRoles(userRoles, checkRoles){
            userRoles.commit('checkRoles', checkRoles)
        }
    },
    mutations:{
        role(state, role){
            state.role.push(role)
        },
        departmentRole(state, departmentRole){
            state.departmentRole = departmentRole
        },
        checkRoles(state, checkRoles){
            state.checkRoles = checkRoles
        }
    },
    getters:{
        getRole(state){
            return state.role
        },
        getCheckRoles(state){
            return state.checkRoles
        },
        getDepartmentRoles(state){
            return state.departmentRole
        }
    }
});

export default store;
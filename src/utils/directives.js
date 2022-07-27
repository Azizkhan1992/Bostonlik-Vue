import Vue from 'vue';
<<<<<<< HEAD
import store from '@/plugins/store/store';
=======
import TokenService from "@/services/TokenService";
>>>>>>> a1dd48d86b9c62883cea2566aaded5cbf0d6e41b

const can = {
    install(VueInstance) {
        VueInstance.prototype.can = (permissions) => {
<<<<<<< HEAD
            const rolesInStore = store.state.role;
        
            if (Array.isArray(permissions)) {
                for (let i = 0; i < permissions.length; i++) {
                    if (rolesInStore.includes(permissions[i])) {
=======
            const rolesInStorage = TokenService.getRoles();
        
            if (Array.isArray(permissions)) {
                for (let i = 0; i < permissions.length; i++) {
                    if (rolesInStorage.includes(permissions[i])) {
>>>>>>> a1dd48d86b9c62883cea2566aaded5cbf0d6e41b
                        return true;
                    } else {
                        continue;
                    }
                }
            } else {
<<<<<<< HEAD
                return rolesInStore.includes(permissions)
=======
                return rolesInStorage.includes(permissions)
>>>>>>> a1dd48d86b9c62883cea2566aaded5cbf0d6e41b
            }
        }
    }
}

Vue.use(can)
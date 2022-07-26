import Vue from 'vue';
import TokenService from "@/services/TokenService";

const can = {
    install(VueInstance) {
        VueInstance.prototype.can = (permissions) => {
            const rolesInStorage = TokenService.getRoles();
        
            if (Array.isArray(permissions)) {
                for (let i = 0; i < permissions.length; i++) {
                    if (rolesInStorage.includes(permissions[i])) {
                        return true;
                    } else {
                        continue;
                    }
                }
            } else {
                return rolesInStorage.includes(permissions)
            }
        }
    }
}

Vue.use(can)
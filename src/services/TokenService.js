import router from "@/router";
const TOKEN = 'Authorization'
const ROLES = 'roles';
// const STATUS = 'Status'

const TokenService = {
    saveToken(token){
        localStorage.setItem(TOKEN, token)
    },
    getToken(){
        return localStorage.getItem(TOKEN)
    },
    removeToken(){
        localStorage.removeItem(TOKEN)
        router.push('login')
    },
    // saveStatus(status){
    //     localStorage.setItem(STATUS, status)
    // },

    removeAll() {
		this.removeToken();
		router.push('/login');
	},

    saveRoles(roles) {
        localStorage.setItem(ROLES, JSON.stringify(roles.split(',')));
    },

    getRoles() {
        const roles = localStorage.getItem(ROLES);
        return roles ? JSON.parse(roles) : [];
    }
};

export default TokenService;
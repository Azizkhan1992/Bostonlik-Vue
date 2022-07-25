import router from "@/router";
const TOKEN = 'Authorization'

const TokenService = {
    saveToken(token){
        localStorage.setItem(TOKEN, JSON.stringify(token))
    },
    getToken(){
        return localStorage.getItem(TOKEN)
    },
    removeToken(){
        localStorage.removeItem(TOKEN)
        router.push('login')
    },

    removeAll() {
		this.removeToken();
		router.push('/login');
	}
};

export default TokenService;
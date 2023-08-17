import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"

const store = createStore({
    state(){
        return{
            token: null,
            username: null
        }
    },
    getters: {
        getToken: (state) => {
            return state.token
        },
        getUsername: (state) =>{
            return state.username
        }
    },
    mutations: {
        setToken(state, {token}){
            state.token = token
        },
        setUsername(state, {username}){
            state.username = username
        }
    },
    plugins: [createPersistedState()]
})



export default store;
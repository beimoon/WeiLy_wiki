import {defineStore} from "pinia";

import login from '@/api/login/index'

export interface IUserState {
    token: string;
    username: string;
    avatar: string;
    account:string;
    password:string;
}

export default defineStore({
    id:'wiki-user',
    state:():IUserState=>({
        token:'eqweqw',
        username:'2311232',
        avatar:'',
        account:'',
        password:'',
    }),
    persist:{
        enabled:true,
        storage:localStorage,
        keys:['token','username'],
    }
        ,
    getters:{
        getToken():string{
            return  this.token
        }
    }
    ,
    actions: {
        clearUserInfo() {
            this.$state = {
                token: '',
                username: '',
                avatar: '',
                account: '',
                password: '',
            }
        },

        async login() {
            try {
                console.log(123)
                const res = await login()
                console.log(res)
                return Promise.resolve(res)
            } catch (e) {
                console.log(e)
                return Promise.reject(e)
            }
        }
    }

})



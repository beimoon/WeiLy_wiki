import {defineStore} from "pinia";

export default defineStore({
    id:'user',
    state:()=>{
        return{
            profile:{
                name:'',
                account:'',
                password:'',
                token:''
            }
        }
    },
    actions:{
        setUser(state,playload){
            state.userInfo=playload
            console.log(state.userInfo)
        }
    }
})

import axios from "axios";
import user from '@/store/modules/user/index'
import {router} from '@/router/index'

export const baseURL='http://127.0.0.1:5173'

const instance=axios.create({
    baseURL,
    timeout:5000,
    headers:{
    },
})


instance.interceptors.request.use(function (config){
    //携带token
    const token=user().getToken
    if(token){
        //携带token
    }
    return config
},function (error){
    return Promise.reject(error)
})

//响应器
instance.interceptors.response.use(res=>res.data,err=>{
    if (err.response&&err.response.status===404){
        // 1. 清空无效用户信息
        // 2. 跳转到登录页
        // 3. 跳转需要传参（当前路由地址）给登录页码
        //当前路径存在参数 需要url解析
        user().clearUserInfo()
        const  fullPath=encodeURIComponent(router.currentRoute.value.fullPath)
        //encodeURIComponent 转换uri编码，防止解析地址(特殊字符%% &&)出问题
        router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
})

export default (url,method,submitData)=>{
    return instance({
        url,
        method,
        // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
        // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
        // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
        // method参数：get,Get,GET  转换成小写再来判断
        // 在对象，['params']:submitData ===== 'params':submitData 这样理解
        [method.toLowerCase()==='get'?'params':'data']:submitData
    })
}


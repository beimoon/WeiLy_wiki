import request from "@/utils/http/axios/index";

export default function login(){

    return request('/user/login','get','')
}

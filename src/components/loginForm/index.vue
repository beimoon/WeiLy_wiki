<template>
  <div class="formBox">
    <span class="title">微力Wiki系统</span>
    <div class="login">
      <span class="login_title">登录</span><br>

      <input
          v-model="formInline.username"
          placeholder="用户名">
      <input type="password" v-model="formInline.password">


          <n-button @click="handleForm">登录</n-button>

      <div class="login_bottom">
        <span style="line-height: 25px;">其他登录方式</span>
        <span>
      <svg style="width: 20px;display: inline-block;margin-left: 5px;" xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path
          d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112C331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3c-34 109.5-23 154.8-14.6 155.8c18 2.2 70.1-82.4 70.1-82.4c0 49 25.2 112.9 79.8 159c-26.4 8.1-85.7 29.9-71.6 53.8c11.4 19.3 196.2 12.3 249.5 6.3c53.3 6 238.1 13 249.5-6.3c14.1-23.8-45.3-45.7-71.6-53.8c54.6-46.2 79.8-110.1 79.8-159c0 0 52.1 84.6 70.1 82.4c8.5-1.1 19.5-46.4-14.5-155.8z"
          fill="currentColor"></path></svg>
      </span>
      </div>
    </div>
    <div class="logo">
      <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/518/logo.png" alt="weiLy">
    </div>


  </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue";
import {useMessage,NMessageProvider,NButton} from 'naive-ui'
import useUserStore from '@/store/modules/user/index'
import {useRouter,useRoute} from "vue-router";
interface FormState {
  username: string,
  password: string
}

// const msg=useMessage()

const formInline:FormState = reactive({
  username: 'admin',
  password: '123456',
});

const msg=useMessage()
const user=useUserStore()
const router=useRouter()
const route=useRoute()

const handleForm=async function (){
  try {
    msg.loading('登录中...')
    const res=await user.login();
    const {code}=res

    // 不好 用于观察效果
    // function sleep(d){
    //   for(let t = Date.now();Date.now() - t <= d;);
    // }
    // sleep(2000);

    if(code=='200'){
      msg.success('登录系统')
      router.push('/home')
    }
  }catch (e){
    console.log(e)
  }
}


</script>

<style scoped lang="less">
.formBox {
  position: relative;
  width: 550px;
  height: 297px;
  display: flex;
  flex-direction: column;
  background-color: rgba(242, 242, 242, 1);
  border-radius: 10px;

  .title {
    position: relative;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.11em;
    color: #0894D0;
    padding-left: 19px;
    padding-bottom: 8px;
    margin-top: 16px;
    border-bottom: 1px solid rgba(8, 148, 208, 0.2);
  }

  .login {
    width: 271px;
    margin-top: 5px;
    border-right: 0.5px solid rgba(0, 0, 0, 0.2);
    margin-left: 19px;

    .login_title {
      width: 38px;
      height: 22px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.11em;
      color: #424242;
      padding-top: 5px;
    }

    input {
      margin-top: 20px;
      position: relative;
      width: 230px;
      height: 34px;
      background: #FFFFFF;
      border-radius: 5px;
    }

    button {

      position: relative;
      width: 230px;
      height: 34px;

      background: rgba(8, 148, 208, 0.8);
      border-radius: 5px;

      margin-top: 15px;
    }

    .login_bottom {
      margin-top: 20px;
    }
  }

  .logo {
    position: absolute;
    width: 270px;
    height: 270px;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);

    img {
      margin: 0 auto;
    }
  }
}

</style>

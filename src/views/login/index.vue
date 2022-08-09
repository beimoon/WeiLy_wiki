<script lang='ts'>
// const name='HomeView'
import user from '@/store/user/index'
import loginForm from '@/components/loginForm/index.vue'
export default {
  setup(){
    const userInfo=user()
    return{
      userInfo
    }
  },
  methods:{
    increment(userInfo){
      userInfo.setUser(userInfo,{name:'pijihua',password:"123"})
    }
  },
  components:{
    loginForm
  }
}
</script>

<template>
  <div class="wapper">
    <div class="inner">
      <div class="vector">
        <div class="welcomeBox">
          <p class="welcome">WELCOME</p>
          <p class="bottom_line"></p>
        </div>
      </div>
        <LoginForm
            class="form"
        ></LoginForm>
    </div>
  </div>
</template>

<style scoped lang='less'>
.wapper{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color:#2e93be;
  .inner{
    width: 1037px;
    height: 799px;
    background-color: #ffffff;
    border-radius:20px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .form{
      margin-right:10px;
    }
    .vector{
      position: relative;
      border-radius: 50px;
      border-top-right-radius: 800px 2000px;
      border-bottom-right-radius: 800px 2000px;
      width: 574px;
      height: 851px;
      background: #37A7D7;
      border: 1px solid rgba(255, 255, 255, 0.38);

      .welcomeBox{
        .welcome{
          position: absolute;
          width: 224px;
          height: 48px;
          top:50%;
          transform: translateY(-50%);
          left: 87px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 48px;
          letter-spacing: 0.11em;
          color: #FFFFFF;
          &::after{
              position: absolute;
              width: 73px;
              height: 10px;
              margin-top:16px;
              background: #FFFFFF;
              content: '';
              display: block;
          }
        }
      }
    }
  }
}
</style>

<script lang='ts'>
// const name='HomeView'
import user from '@/store/user/index'
export default {
  setup(){
    const userInfo=user()
    return{
      userInfo
    }
  },
  methods:{
    increment(userInfo){
      console.log(userInfo.profile)
      userInfo.setUser(userInfo,{name:'pijihua',password:"123"})
    }
  }
}
</script>

<template>
  <button @click="increment(userInfo)">click</button>
</template>

<style scoped lang='less'>

</style>

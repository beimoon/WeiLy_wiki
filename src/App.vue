<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import user  from '@/store/modules/user/index'
import login from '@/api/login/index'


login().then((msg)=>{
  console.log(msg)
},err=>{
  return Promise.reject(err.message)
})
console.log(user().token)

//  const all=()=>{
//   document.documentElement.requestFullscreen()
// }
// const small=()=>{
//   document.exitFullscreen()
// }

</script>

<template>


  <router-view />
</template>

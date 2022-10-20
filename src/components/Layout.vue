<template>
  <div>
<!--     <div class="header">头部</div>
    <div class="navbar">左侧导航</div>
    <div class="main">主题内容</div> -->
    <app-header></app-header>
    <app-navbar></app-navbar>
    <app-main></app-main>
    </div>
</template>

<script >
import AppHeader from '@/components/AppHeader/index.vue'
import AppMain from '@/components/AppMain/index.vue'
import AppNavbar from '@/components/AppNavbar/index.vue'
export default {
  components:{
    AppHeader,
    AppMain,
    AppNavbar
  }
}
</script>

<style>
.header {
  position: absolute;
  line-height: 50px;
  height: 50px;
  background-color: #130505;
  left: 0px;
  top: 0px;
  right: 0px;
  color: rgb(255, 255, 255);
}
.navbar {
  position: absolute;
  left: 0px;
  width: 200px;
  top: 50px;
  background-color: #545c64;
  bottom: 0px;
  color: rgb(255, 255, 255);
  overflow-y: auto;
}
.main {
  position: absolute;
  left: 200px;
  top: 50px;
  bottom: 0px;
  right: 0px;
  padding:5px ;
  overflow-y: auto;
}
</style>
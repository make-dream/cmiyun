<template>
  <div id="layout">
    <Header></Header>
    <div class="mainPage">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="less">
.mainPage{
  margin: 80px 0 0 100px;
}
</style>


<script type="text/ecmascript-6">
  import Header from '../common/headerNav.vue'
  import Footer from '../common/footer'
  export default {
    data(){
      return{

      }
    },
    components:{
      Header,Footer
    }
  }
</script>


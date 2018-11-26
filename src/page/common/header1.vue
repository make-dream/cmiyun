<template>
    <div id="header1">
      <div class="border">
        <div class="border_logo">
          <img src="../../assets/img/logo.png" alt="" @click="jump()">
          <h4> Cloud Bussiness Platform | CMI</h4>
        </div>
        <ul class="list clearfix">
          <li>
            <LanguageSelect></LanguageSelect>
          </li>
          <li>
            <span @click="sign">{{ $t('login.signIn') }}</span>
          </li>
        </ul>
      </div>

    </div>
</template>

<style lang="less">
  #header1{
    width: 100%;
    height: 80px;
    border-bottom: 2px solid #42a5f6;
    background: #f9f9f9;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999999999;
    .border{
      /*width: 1200px;*/
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin:0;
      h4{
        font-size: 24px;
        display: inline-block;
      }
      .border_logo{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          margin-right: 20px;
          cursor: pointer;
        }
      }
      .list>li{
          display: inline-block;
          line-height: 80px;
          height: 100%;
          font-size: 16px;
          color: #42a5f6;
          margin-right: 45px;
          cursor: pointer;
          text-align: right;
          &:first-child{
              text-align: left;
           }
        };

    }
  }
</style>

<script type="text/ecmascript-6">
import LanguageSelect from '../../components/languageSelect';
export default {
  data(){
    return {
    }
  },
  components:{
    LanguageSelect
  },
  methods:{
    sign(){
      this.$router.push({
        path:'./login'
      })
    },
    jump(){
      this.$router.push('/')
    }
  }
}
</script>



<template>
    <Select v-model="lang" style="width: 120px;">
        <Option value="en">English</Option>
        <Option value="zh">简体中文</Option>
        <Option value="zh-TW">繁體中文</Option>
    </Select>
</template>
<script type="text/ecmascript-6">
    export default {
      data(){
        return{
          lang: 'zh'
        }
      },
      watch:{
        lang(newV){
          this.$i18n.locale = newV;
        }
      }
    }
</script>



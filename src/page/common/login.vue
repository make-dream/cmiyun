<template>
    <div class="login">
      <img src="../../assets/img/icon-login.png" class="loginImg" alt="">
      <div class="form">
        <Form class="formBox">
          <h1>Sign In</h1>
          <FormItem>
            <Input placeholder="Email" v-model="email"></Input>
            <Input placeholder="Password" type="password"></Input>
          </FormItem>
          <Button type="primary" @click="submit">Sign In</Button>
          <p class="clearfix"><span class="blue pull-left">Forgot Password?</span><span class="gray pull-right">Join Free</span></p>
        </Form>
        <p class="info">Copyright©2018 China Mobile International Limited</p>
      </div>
    </div>
</template>

<style lang="less">
  #app{
    min-height: auto !important;
    padding-bottom: 0;
    height: 100% !important;
  }
  .login{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .loginImg{
      height: 100%;
    }
    .form{
      position: absolute;
      z-index: 2;
      background: white;
      height: 100%;
      width: 45.5%;
      right: 0;
      top: 0;
      padding-top:200px;
      .formBox{
        width: 350px;
        margin: 0 auto;
        h1{
          font-size: 48px;
          color: #4486fa;
          margin-bottom: 40px;
        }
        input,button{
          width: 100%;
          height: 50px;
          border-radius: 50px;
          margin-bottom: 40px;
          text-indent: 20px;
        }
        button{
          text-indent: 0;
          font-size: 18px;
          margin-bottom: 10px;
        }
        p{
          font-size: 14px;
          padding: 0 30px;
          span{
            cursor: pointer;
          }
          .blue{
            color: #4486fa;
          }
          .gray{
            color: #b3b9c4;
          }
        }
        .ivu-form-item{
          margin-bottom: 0;
        }
      }
      .info{
        font-size: 14px;
        color: #b3b9c4;
        text-align: center;
        position: absolute;
        bottom: 30px;
        width: 100%;
      }
    }
  }
</style>

<script>
    export default{
        data () {
            return {
              email:''
            }
        },
        methods:{
          submit(){
            var that=this;
            if(this.email==''){
                this.email='cmiuser@chinamobile.com';            //cmitestuser@chinamobile.com
            }
            this.$http.post('/login/toLogin?account='+this.email+'&password=123456').then(function(res){
              if(res.data.status==200){
                /*that.$Message.success('Success!');*/
                sessionStorage.setItem('user',res.data.userName);
                that.$router.push({path: '/user/Dashboard'});
               /* setTimeout(function(){

                },1000)*/
              }
            }).catch(function(res){
              console.log(res)
            })
          }
        }
    }
</script>

<template>
    <div class="ProductPage">
        <div class="ProductBanner" :class="bgImgClass">
            <p class="title">{{title}}</p>
            <h6>{{distrable}}</h6>
            <button class="buy" @click="jump">Buy Now</button>
            <button class="sales">Connect Sales</button>
        </div>
        <!--<div class="hotline" v-show="display">
            <span @click="close">X</span>
        </div>-->
        <div class="contant">
            <img src="../../assets/img/icon-sdw.png" alt="" v-if="title=='SD-WAN'">
            <img src="../../assets/img/chanpinye_content.jpg" v-if="title!='SD-WAN'" alt="">
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import headTop from "../../page/common/header"
export default {
  data() {
    return {
        display:false,
        data:[
          {
            productName: 'SD-WAN',
            Description: 'Provides central management tools, network visibility and agility for customer to form WAN network at finger tips.',
            status: status,
            name:'product1'
          },
          {
            productName: 'Cloud Connect',
            Description: 'Cloud Connect Cloud to Cloud for Minor Enterprise.',
            status: status,
            name:'product2'
          },
          {
            productName: 'Cloud to Cloud',
            Description: 'Cross region connection between Clouds in China and Oversea.Business data synchronization multiple CSP.',
            status: status,
            name:'product3'
          },
          {
            productName: 'On-Premise to Cloud',
            Description: 'Connect apps and content hosted on Cloud to Customer LOB systems hosted on premises.',
            status: status,
            name:'product4'
          },
          {
            productName: 'Elastic Compute Service',
            Description: 'An online computing service that offers elastic and secure virtual cloud servers to cater all your cloud hosting needs.',
            status: status,
            name:'product5'
          },
          {
            productName: 'Cloud Connect Basic',
            Description: 'Cloud Connect Cloud to Cloud for Minor Enterprise.',
            status: status,
            name:'createProduct'
          },
        ],
        title:'',
        bgImgClass:'',
        distrable:'',
    }
  },
  mounted(){
      window.scrollTo(0,0);
      if(this.title==='Cloud to Cloud'){
        this.bgImgClass='yundaoyun';
      }else if(this.title==='On-Premise to Cloud'){
        this.bgImgClass='dianshangyun';
      }else {
        this.bgImgClass='other';
      }
  },
  methods: {
    jump(){
        this.data.forEach((item,index)=>{
            if(item.productName == this.title){
                if(item.productName == 'SD-WAN'){
                    this.$router.push({
                        path:"/page/order/BusinessOrderSDW",
                        query:{
                            title:item.name,
                            name:item.productName
                        }
                    })
                }else{
                    this.$router.push({
                        path:"/page/order/BusinessOrder",
                        query:{
                            title:item.name,
                            name:item.productName
                        }
                    })
                }
            }
        })
    },
    sales(){
        this.display = true;
    },
    close(){
        this.display = false;
    }
  },
    created () {
        this.title = this.$route.query.title;
        this.data.forEach((item,index)=>{
            if(item.productName == this.title){
                this.distrable = item.Description;
            }
        })
    },
  components: {
    headTop
  }
}
</script>

<style lang='less'>
.ProductPage{
    width: 1440px;
    margin: 0 auto;
    .head{
        width: 100%;
        height: 80px;
        background: #4486fa;
        .logo{
            width: 50%;
            float: left;
            padding: 18px 0 18px 120px;
        }
        .list{
            width: 50%;
            float: right;
            padding-top: 30px;
            padding-left: 120px;
            li{
                font-size: 16px;
                float: left;
                color:#c6d5ff;
                margin-right: 50px;
                cursor: pointer;
                a{
                    color:#c6d5ff;
                }
                img{
                    display: block;
                    width: 30px;
                    height: 30px;
                    float: left;
                    margin-right: 10px;
                    margin-top: -5px;
                }
            };
        }
    }
    .ProductBanner{
        width: 100%;
        height: 228px;
        background-size: 100% 100%;
        .title{
            text-align: left;
            font-size: 28px;
            color:#fff;
            line-height: 28px;
            padding-top: 50px;
            padding-left: 180px;
        }
        h6{
            font-size: 14px;
            line-height: 14px;
            margin-top: 16px;
            padding-left: 180px;
            color:#bfc1c7;
            margin-bottom: 30px;
        }
        .buy{
            width: 120px;
            height: 40px;
            cursor: pointer;
            background: #2ed496;
            text-align: center;
            line-height: 40px;
            color:#fff;
            font-size: 12px;
            margin-left: 180px;
            border: none;
            border-radius: 5px;
        }
        .sales{
            width: 140px;
            height: 40px;
            cursor: pointer;
            background: transparent;
            text-align: center;
            line-height: 40px;
            color:#fff;
            font-size: 12px;
            margin-left: 20px;
            border: 1px solid #80899e;
            border-radius: 5px;
        }

    }
    .dianshangyun{
      background: url("../../assets/img/head_bg_dianshangyun.png") no-repeat;
    }
    .yundaoyun{
      background: url("../../assets/img/head_bg_yundaoyun.png") no-repeat;
    }
    .other{
      background: url("../../assets/img/head_bg.jpg") no-repeat;
    }
    .hotline{
        width: 480px;
        height: 270px;
        border:5px solid #af5531;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-left: -240px;
        margin-top: -135px;
        box-sizing: border-box;
        background: #fff;
        span{
            color:#fff;
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            width: 0;
            height: 0;
            text-indent: 30px;
            font-size: 24px;
            line-height: 30px;
            border-color: transparent #af5531 transparent  transparent;
            border-style:solid solid dashed dashed;
            border-width:0px 50px 50px 0px ;
        }
    }
    .contant{
        width: 100%;
    }
    .fotter{
        width: 100%;
        padding: 0 120px;
        background: #f8f8f8;
        overflow: hidden;
        p{
            width: 50%;
            line-height: 74px;
            float: left;
            font-size: 16px;
            color:#c7cfde;
        }
        p:nth-child(1){
            text-align: left;
        }

        p:nth-child(2){
            text-align: right;
        }
    }
}
</style>

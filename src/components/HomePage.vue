<template>
  <div class="HomePage">
    <!-- 头部 -->
    <headTop></headTop>
    <!-- <div class="head" v-show="scrool">
      <div class="left">
        <div class="logo">
          <img src="../assets/img/logo.png" alt="">
        </div>
      </div>
      <div class="right">
        <div class="sales">
          <div class="aa">
            <span>Contact Sales</span>
            <div class="time">
              Sales Hotline:+ 852 3975 6688 | 09:00 - 18:00 GMT +8 CHN&ENG
            </div>
          </div>
          <Select v-model="model1" class="language" placeholder="English">
            <Option v-for="item in language" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <div class="logon">
            <span>Sign In</span>
            <Icon type="ios-lock" color="#fff" size="16"/>
          </div>
        </div>
        <div class="menu">
          <ul>
            <li v-for="(item,index) in menuList" :key="index" @click="choice(index)" :class="{active:tabIndex==index}">{{item}}</li>
          </ul>
          <div class="search" @click="search()"><Icon type="ios-search" v-show="!SearchBox"/><Icon type="md-close" v-show="SearchBox" /></div>
        </div>
      </div>
      <div class="SearchBox" v-show="SearchBox">
        <Input v-model="value" placeholder="Search" clearable style="width: 1240px" />
      </div>
    </div>
    <div class="head1" v-show="scrool1">
      <div class="left">
        <div class="logo">
          <img src="../assets/img/logo.png" alt="">
        </div>
      </div>
      <div class="right">
         <div class="menu">
          <div class="search" @click="search()"><Icon type="ios-search" v-show="!SearchBox"/><Icon type="md-close" v-show="SearchBox" /></div>
          <div class="lock"></div>
          <div class="phone"></div>
          <ul>
            <li v-for="(item,index) in menuList" :key="index" @click="choice(index)" :class="{active:tabIndex==index}">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="SearchBox" v-show="SearchBox">
        <Input v-model="value" placeholder="Search" clearable style="width: 1240px" />
      </div>
    </div> -->
    <!-- 背景 -->
    <div class="banner">
      <div class="banner_img"></div>
      <div class="title">CMI. The global SD-WAN leader</div>
      <Button type="primary">ENQUIRE NOW</Button>
    </div>
    <!-- 内容区 -->
    <div class="content">
      <div class="ContentOne">
        <div class="title">
          <p>SD-WAN & CMI Cloud Connect</p>
          <p>The Security Foundation for Your Enterprise</p>
        </div>
        <div class="SD_CMI">
          <div class="sd_1">
            <div class="picture"></div>
            <div class="disctibe">
              <p class="ms">SD-WAN traffic can transvers through CMI high quality global backbone network when hybrid with MPLS/IEPL product. By incorporating with Internet broadband or LTE as the last-mile between CMI POPs and enterprise branch offices, it will shorten WAN network setup time, reduce operation costs without sacrificing network performance and security.</p>
              <!-- <p>LEARN MORE ABOUT SD-WAN</p> -->
            </div>
            <div class="introduction" @click="jump">LEARN MORE ABOUT SD-WAN</div>
          </div>
          <div class="sd_2">
            <div class="picture"></div>
            <div class="disctibe">
              <p class="ms">CMI Cloud Connect Service is unique in the market for enterprises that require reliable, secure and private cross border connections between company offices, data centers and Cloud platform for data communications and synchronization. It offers dynamic bandwidth, flexible billing and fast provision, which fits the enterprises nowadays business model.</p>
            </div>
            <div class="introduction" @click="jump1">LEARN MORE ABOUT CMI CLOUD</div>
          </div>
        </div>
      </div>
      <!-- 产品优势 -->
      <div class="ContentTwo">
        <div class="title">
          <p>Our Products Advantage</p>
          <p>You have network challenges. We have them covered.</p>
        </div>
        <ul>
          <li v-for="(item,index) in productList" :key="index">
            <div class="picture">
              <img :src="item.src" alt="">
            </div>
            <p>{{item.title}}</p>
            <div class="describe">{{item.describe}}</div>
          </li>
        </ul>
      </div>
      <!-- 客户区 -->
      <div class="custom">
        <ul>
          <li>
            <div class="title">
              <span>Hear from</span>
              <span>ICN customers</span>
              <span>see all partner</span>
            </div>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <!-- 帮助区 -->
      <div class="help">
        <div class="title">How Can We Help?</div>
        <p class="sales">
          <i></i>
          <b>Sales</b><br>
          <span>Get a no-obligation price quote and learn more about SD-WAN</span>
        </p>
        <p class="support">
          <i></i>
          <b>Technical support</b><br>
          <span>Find answers to your questions with user documentation</span>
        </p>
      </div>
      <!-- 咨询区 -->
      <div class="enquire">
        <div class="title">Reach Out. We're here</div>
        <Button type="primary">ENQUIRE NOW</Button>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="left">
        <ul class="footList">
          <li v-for="(item,index) in menuList" :key="index">{{item}}</li>
        </ul>
        <div class="SaleHot">Contact Sales</div>
      </div>
      <div class="right">
        <div class="logo">
          <img src="../assets/img/logo.png" alt="">
          <h4>Cloud Bussiness Platform | CMI</h4>
        </div>
        <div class="floowUs">
          <span>FOLLOW US</span>
          <i class="weixin"></i>
          <i class="in"></i>
        </div>
        <div class="copyright">©  2018  China  Mobile  International  Limited</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import headTop from '../page/common/header1'
export default {
  data() {
    return {
      language: [
        {
            value: 'English',
            label: 'English'
        },
        {
            value: 'Chinese',
            label: 'Chinese'
        },     
      ],
      scrool:true,
      scrool1:false,
      scrollTop:'',
      model1: '',
      menuList:['Products','Solution','Support','About Us'],
      tabIndex:0,
      SearchBox:false,
      value:'',
      productList:[{
        src:require('../assets/img/products-1.png'),
        title:'Reliable',
        describe:'Reliable, secure, point-to-point bandwidth dedicated Connection'
      },{
        src:require('../assets/img/products-2.png'),
        title:'COVERAGE',
        describe:'China Mobile nationwide network covering 31 provinces and more than 350 metropolitan cities throughout China, which enable connection to China and overseas'
      },{
        src:require('../assets/img/products-3.png'),
        title:'SERVICE LEVEL',
        describe:'Service level Agreement is provided'
      },{
        src:require('../assets/img/products-4.png'),
        title:'FLEXIBILITY',
        describe:'Supporting various connection service, bandwidth and Connection Solution'
      },{
        src:require('../assets/img/products-5.png'),
        title:'ONE STOP SOLUTION',
        describe:'Providing cost effective, agile provision, one-stop Cloud Connect solution'
      },{
        src:require('../assets/img/products-6.png'),
        title:'INTERNATIONAL',
        describe:'GUARANTEED INTERNATIONAL NETWORK BANDWIDTH AND LATENCY'
      },{
        src:require('../assets/img/products-7.png'),
        title:'VALUE-ADDED NETWORK AND MANAGEMENT SERVICES',
        describe:'End-to-end management service by service provider while maintaining network visibility and control'
      },{
        src:require('../assets/img/products-8.png'),
        title:'FAST WAN SERVICE DELIVERY',
        describe:'Extend corporate network into public cloud service'
      }]
    }
  },
  methods: {
    search(){
      let searchBox = document.getElementsByClassName("search");
      if(this.SearchBox == false){
        this.SearchBox = true;
      }else{
        this.SearchBox = false;
      }
    },
    choice(index){
      this.tabIndex = index;
    },
    enter(index,item){
    },
    leave(){},
    handleScroll() {
      //let scrollObj = document.getElementsByClassName('HomePage');
      this.scrollTop = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
      if(this.scrollTop > 120){
        this.scrool = false;
        this.scrool1 = true;
      }else{
        this.scrool = true;
        this.scrool1 = false;
      }
    },
    jump(){
      if(window.sessionStorage.getItem('user')==null){
        this.$router.push('/Login')
      }else{
        this.$router.push({
          path:'/page/product/ProductPage',
          query:{
            title:'SD-WAN'
          }
        })
      }
    },
    jump1(){
      if(window.sessionStorage.getItem('user')==null){
        this.$router.push('/Login')
      }else{
        this.$router.push({
          path:'/page/product/ProductPage',
          query:{
            title:'Cloud Connect'
          }
        })
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
  },
  watch: {
    handleScroll(){
      
    }
  },
  components: {
    headTop 
  }
}
</script>

<style lang="less">
*{
  list-style: none;
}
.HomePage{
  width: 100%;
  margin: 0 auto;
  background: #f9f9f9;
  //头部
  // .head{
  //   width: 100%;
  //   height: 120px;
  //   position: relative;
  //   .left{
  //     width: 50%;
  //     height: 100%;
  //     float: left;
  //     .logo{
  //       height: 42px;
  //       padding: 30px 0;
  //       img{
  //         display: block;
  //         width: 405px;
  //         height: 42px;
  //         float: left;
  //         margin: 0 15px 0 30px;
  //       }
  //     }
  //   }
  //   .right{
  //     width: 50%;
  //     height: 100%;
  //     float: left;
  //     .sales{
  //       height: 30px;
  //       float: right;
  //       width: 625px;
  //       margin-top: 15px;
  //       .aa{
  //         float: left;
  //         width: 410px;
  //         text-align: right;
  //         span{
  //           line-height: 30px;
  //           color:#323232;
  //           font-size: 14px;
  //           line-height: 14px;
  //         }
  //         .time{
  //           width: 100%;
  //           font-size: 12px;
  //           line-height: 12px;
  //           margin-top: 2px;
  //         }
  //       }
  //       .language{
  //         width: 85px;
  //         height: 100%;
  //         margin-left: 20px;
  //         box-sizing: border-box;
  //         float: left;
  //         span{
  //           color:#efefef;
  //         }
  //         i{
  //           color:#fff;
  //         }
  //         .ivu-select-selection{
  //           border: none;
  //           background: #8b8b8b;
  //           border-radius: 0;
  //         }
  //       }
  //       .logon{
  //         width: 85px;
  //         margin-top: 1px;
  //         height: 32px;
  //         float: left;
  //         margin-left: 12px;
  //         background: #434343;
  //         text-align: center;
  //         cursor: pointer;
  //         span{
  //           color:#dadada;
  //           line-height: 32px;
  //         }
  //         .ivu-icon-ios-lock{
  //           margin-left: 10px;
  //           line-height: 30px;
  //         }
  //       }
  //     }
  //     .menu{
  //       width: 565px;
  //       float:right;
  //       height: 60px;
  //       margin-right: 15px;
  //       margin-top: 15px;
  //       ul{
  //         li{
  //           line-height: 60px;
  //           margin-right: 52px;
  //           float: left;
  //           color:#080808;
  //           font-size: 16px;
  //           font-weight: 500;
  //           font-family: 'helvetica';
  //           cursor: pointer;
  //         }
  //         li.active{
  //           color:#008dd3;
  //         }
  //       }
  //       .search{
  //         width: 60px;
  //         height: 60px;
  //         float: right;
  //         background: #008dd3;
  //         text-align: center;
  //         cursor: pointer;
  //         i{
  //           width: 100%;
  //           height: 100%;
  //           color:#fff;
  //           font-size: 30px;
  //           line-height: 30px;
  //           margin-top: 15px;
  //         }
  //       }
  //     }
  //   }
  //   .SearchBox{
  //     width: 100%;
  //     height: 100px;
  //     background: #008dd3;
  //     position: absolute;
  //     top:100%;
  //     padding: 0 100px;
  //     z-index:99;
  //     .ivu-input-wrapper{
  //       margin-top: 45px;
  //     }
  //     .ivu-input{
  //       line-height: 30px;
  //       height: 30px;
  //       border:none;
  //       border-radius: 0;
  //       color:#5c5c5c;
  //       background: #008dd3;
  //       border-bottom: 2px solid #fff;
  //       transition: none;
  //     }
  //     .ivu-input:focus,.ivu-input:hover{
  //       box-shadow: none;
  //     }
  //   }
  // }
  // .head1{
  //   width: 100%;
  //   height: 80px;
  //   position: fixed;
  //   background: #fff;
  //   top: 0;
  //   left: 0;
  //   z-index:9999;
  //   .left{
  //     width: 410px;
  //     height: 100%;
  //     float: left;
  //     .logo{
  //       height: 50px;
  //       padding: 14px 0;
  //       img{
  //         display: block;
  //         width: 405px;
  //         height: 42px;
  //         float: left;
  //         margin: 0 15px 0 30px;
  //       }
  //     }
  //   }
  //   .right{
  //     height: 100%;
  //     float: right;
  //     width: 50%;
  //     .menu{
  //       width: 100%;
  //       float:right;
  //       height: 60px;
  //       margin-right: 15px;
  //       margin-top: 10px;
  //       ul{
  //         float: right;
  //         overflow: hidden;
  //         li{
  //           line-height: 60px;
  //           margin-right: 52px;
  //           float: left;
  //           color:#080808;
  //           font-size: 16px;
  //           font-weight: 500;
  //           font-family: 'helvetica';
  //           cursor: pointer;
  //         }
  //         li.active{
  //           color:#008dd3;
  //         }
  //       }
  //       .search{
  //         width: 60px;
  //         height: 60px;
  //         float: right;
  //         background: #008dd3;
  //         text-align: center;
  //         cursor: pointer;
  //         i{
  //           width: 100%;
  //           height: 100%;
  //           color:#fff;
  //           font-size: 30px;
  //           line-height: 30px;
  //           margin-top: 15px;
  //         }
  //       }
  //       .lock{
  //         width: 60px;
  //         height: 60px;
  //         background: url("../assets/img/icon_mima_pre.png") no-repeat;
  //         background-size: 100% 100%;
  //         float: right;
  //         margin-right: 10px;
  //       }
  //       .phone{
  //         width: 60px;
  //         height: 60px;
  //         background: url("../assets/img/icon_phone_pre.png") no-repeat;
  //         background-size: 100% 100%;
  //         float: right;
  //         margin-right: 10px;
  //       }
  //     }
  //   }
  //   .SearchBox{
  //     width: 100%;
  //     height: 100px;
  //     background: #008dd3;
  //     position: absolute;
  //     top:100%;
  //     padding: 0 100px;
  //     z-index:99;
  //     .ivu-input-wrapper{
  //       margin-top: 45px;
  //     }
  //     .ivu-input{
  //       line-height: 30px;
  //       height: 30px;
  //       border:none;
  //       border-radius: 0;
  //       color:#5c5c5c;
  //       background: #008dd3;
  //       border-bottom: 2px solid #fff;
  //       transition: none;
  //     }
  //     .ivu-input:focus,.ivu-input:hover{
  //       box-shadow: none;
  //     }
  //   }
  // }
  //背景
  .banner{
    width: 100%;
    height: 550px;
    position: relative;
    overflow: hidden;
    .banner_img{
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background:url("../assets/img/banner.png") no-repeat;
      background-size: 100% 100%;
    }
    .title{
      color:#fff;
      font-size: 46px;
      position: absolute;
      z-index: 999;
      top: 170px;
      left: 50%;
      margin-left: -325px;
    }
    .ivu-btn{
      display:block;
      position: absolute;
      z-index:999;
      height: 60px;
      width: 200px;
      top:275px;
      left: 50%;
      font-size: 16px;
      margin-left: -100px;
      box-sizing: border-box;
      background:transparent;
      border:2px solid #fff;
    }
  }
  //内容区
  .content{
    width: 100%;
    .ContentOne{
      width: 100%;
      padding: 0 90px;
      .title{
        width: 100%;
        padding: 70px 0 50px 0;
        p{
          width: 100%;
          text-align: center;
          font-size: 24px;
          color:#333333;
          line-height: 44px;
        }
      }
      .SD_CMI{
        width: 100%;
        .sd_1{
          width:49%;
          height: 327px;
          float: left;
          position: relative;
          .picture{
            width: 100%;
            height: 100%;
            background: url('../assets/img/2-1.png') no-repeat;
            background-size: 100% 100%;
            position: absolute;
            left: 0;
            top: 0;
            transform: rotateY(0deg);
            transition-property: transform, opacity;
            transition-duration: 1s;
            opacity:1;
          }
          .disctibe{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(0,141,211,0.9);
            opacity: 0;
            transform: rotateY(-180deg);
            transition-property: transform, opacity;
            transition-duration: 1s;
            p{
              color:#fff;
              font-size: 18px;
              line-height: 36px;
              text-align: center;
              padding-top: 80px;
            }
            p.ms{
              color:#fff;
              font-size: 16px;
              line-height: 32px;
              padding: 0 45px;
              position: absolute;
              bottom: 0;
              padding-bottom: 30px;
            }
          }
          .introduction{
            width: 100%;
            position: absolute;
            bottom: -30px;
            color:#000;
            font-size: 16px;
            font-weight: 400;
            text-align: center;
            cursor: pointer;
          }
          .introduction:hover{
            color:#32a3e9;
          }
        }
        .sd_1:hover{
          .picture{
            transform: rotateY(180deg);
          }
          .disctibe{
            opacity:1;
            transform: rotateY(0deg);
          }
        }
        .sd_2{
          width: 49%;
          height: 327px;
          float: right;
          position: relative;
          .picture{
            width: 100%;
            height: 100%;
            background: url('../assets/img/2_2.png') no-repeat;
            background-size: 100% 100%;
            position: absolute;
            left: 0;
            top: 0;
            transform: rotateY(0deg);
            transition-property: transform, opacity;
            transition-duration: 1s;
            opacity:1;
          }
          .disctibe{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(0,141,211,0.9);
            opacity: 0;
            transform: rotateY(-180deg);
            transition-property: transform, opacity;
            transition-duration: 1s;
            p{
              color:#fff;
              font-size: 18px;
              line-height: 36px;
              text-align: center;
              padding-top: 80px;
            }
            p.ms{
              color:#fff;
              font-size: 16px;
              line-height: 32px;
              padding: 0 45px;
              position: absolute;
              bottom: 0;
              padding-bottom: 30px;
            }
          }
          .introduction{
            width: 100%;
            position: absolute;
            bottom: -30px;
            color:#000;
            font-size: 16px;
            font-weight: 400;
            text-align: center;
            cursor: pointer;
          }
          .introduction:hover{
            color:#32a3e9;
          }
        }
        .sd_2:hover{
          .picture{
            transform: rotateY(180deg);
          }
          .disctibe{
            opacity:1;
            transform: rotateY(0deg);
          }
        }
      }
    }
    .ContentOne:after{
      display:block; content:"clear"; height:0; clear:both; overflow:hidden; visibility:hidden
    }
    //产品优势
    .ContentTwo{
      width: 100%;
      padding: 0 120px;
      .title{
        padding-top: 40px;
        padding-bottom: 60px;
        p{
          width: 100%;
          text-align: center;
        }
        p:nth-child(1){
          line-height: 72px;
          color:#333;
          font-size: 24px;
        }
         p:nth-child(2){
           line-height: 14px;
           font-size: 14px;
           color:#676a6d;
         }
      }
      ul{
        width: 100%;
        overflow: hidden;
        li{
          float: left;
          width: 25%;
          height: 225px;
          position: relative;
          .picture{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            display:block; 
            transform: rotateY(0deg);
            transition-property: transform, opacity;
            transition-duration: 1s;
            opacity:1;
            img{
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          p{
            position: absolute;
            left: 0;
            bottom: 0;
            text-align: center;
            width: 100%;
            color:#fff;
            line-height: 36px;
            font-size: 14px;
            padding: 0 40px;
          }
          .describe{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            color:#fff;
            font-size: 14px;
            background: rgba(0,141,211,0.9);
            text-align: center;
            transform: rotateY(-180deg);
            transition-property: transform, opacity;
            transition-duration: 1s;
            line-height: 18px;
            padding: 70px 20px 20px 20px;
            opacity:0;
          }
        }
        li:nth-child(7){
          p{
            line-height: 18px;
            margin-bottom: 6px;
          }
        }
        li:nth-child(8){
          p{
            line-height: 18px;
            margin-bottom: 12px;
            padding: 0 60px;
          }
        }
        li:hover{
          .picture{
            transform: rotateY(180deg);
          }
          .describe{
            opacity:1;
            transform: rotateY(0deg);
          }
        }
      }
    }
    .custom{
      width: 100%;
      padding: 0 120px;
      ul{
        overflow: hidden;
        margin-right: -50px;
        li{
          width: 355px;
          height: 160px;
          margin-right: 20px;
          float: left;
          border-right: 1px solid #eaedf6;
          box-sizing: border-box;
          margin-top: 30px;
          background-size:100% 100%;
          background-repeat: no-repeat;
        }
        li:nth-child(1){
          border:none;
          padding-left: 30px;
          .title{
            width: 380px;
            height: 160px;
            float: left;
            padding-top: 15px;
            span{
              display: block;
              font-size: 24px;
              line-height: 38px;
              color:#333;
            }
            span:nth-child(3){
              color:#66b6f8;
              font-size: 12px;
            }
          }
        }
        li:nth-child(2){
          background: url("../assets/img/custom-1.png");
        }
        li:nth-child(3){
          background: url("../assets/img/custom-2.png");
        }
        li:nth-child(4){
          background: url("../assets/img/custom-3.png");
        }
        li:nth-child(5){
          background: url("../assets/img/custom-4.png");
        }
        li:nth-child(6){
          background: url("../assets/img/custom-5.png");
        }
      }
    }
    .help{
      width: 100%;
      background: #fff;
      padding-top: 80px;
      overflow: hidden;
      .title{
        width: 100%;
        text-align: center;
        color: #333333;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 60px;
      }
      p{
        width: 400px;
        height: 100px;
        float: left;
        i{
          display: block;
          width: 69px;
          height: 69px;
          float: left;
          margin-right: 20px;
        }
        b{
          font-style: normal;
          font-weight: bold;
          color:#333;
          font-size: 16px;
          line-height: 16px;
        }
        span{
          color:#6a6a6a;
          font-size: 16px;
        }
      }
      .sales{
        margin-left: 225px;
        i{
          background: url("../assets/img/icon_sales.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .support{
        margin-left: 160px;
        i{
          background: url("../assets/img/icon_support.png") no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .enquire{
      width: 100%;
      background: url("../assets/img/enquire_banner.png") no-repeat;
      background-size: 100% 100%;
      padding: 75px 0 70px 0;
      .title{
        width: 100%;
        line-height: 24px;
        font-size: 24px;
        color:#fff;
        text-align: center;
      }
      .ivu-btn{
        display:block;
        margin-top: 25px;
        margin-left: auto;
        margin-right: auto;
        height: 46px;
        width: 160px;
        box-sizing: border-box;
        background: #838383;
        border:2px solid #fff;
      }
    }
  }
  //底部
  .footer{
    width: 100%;
    background: #2d3238;
    padding-bottom: 40px;
    overflow: hidden;
    .left{
      width: 500px;
      float: left;
      .footList{
        width: 100px;
        height: 100%;
        margin-left: 70px;
        padding-top: 40px;
        float: left;
        li{
          width: 100%;
          line-height: 54px;
          text-align: left;
          color:#fff;
          font-size: 18px;
        }
      }
      .SaleHot{
        width: 280px;
        line-height: 54px;
        color:#fff;
        font-size: 18px;
        text-align: center;
        float: left;
        padding-top: 40px;
      }
    }
    .right{
      width: 520px;
      float: right;
      padding-right: 70px;
      .logo{
        height: 54px;
        margin: 40px 0 0px 0;
        img{
          display: block;
          height: 42px;
          float: left;
          margin-right: 20px;
        }
        h4{
            font-size: 20px;
            float: left;
            color: #fff;
            font-weight: 400;
            line-height: 42px;
        }
      }
      .floowUs{
        width: 100%;
        color:#dcdcdc;
        margin-top: 55px;
        overflow: hidden;
        span{
          font-size: 12px;
          line-height: 12px;
          padding-left: 200px;
          margin-top: 40px;
          display: block;
          float: left;
          color:#818487;
        }
        i{
          display: block;
          float: right;
          width: 50px;
          height: 50px;
          border-radius: 5px;
          margin-right: 10px;
          background-size: 100% 100%;
          
        }
        i.in{
          background-repeat: no-repeat; 
          background-image: url("../assets/img/icon_in.png");
        }
        i.weixin{
          background-repeat: no-repeat; 
          background-image: url("../assets/img/icon_weixin.png");
        }
      }
      .copyright{
        width: 100%;
        line-height: 18px;
        color:#dcdcdc;
        font-size: 18px;
        text-align: right;
        padding-right: 10px;
        margin-top: 20px;
        color:#818487;
      }
    }
  }
  
}
</style>

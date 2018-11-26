<template>
  <div class="main">
    <div class="content">
      <h6 class="hhh">My Dashboard<span @click="toCustomized" style="cursor: pointer;">Click here start to customize your own requirement <img src="../../assets/img/icon-list.png" alt=""></span></h6>
      <div class="con">
        <ul class="clearfix view mb-40">
          <li class="mr-20">
            <p class="tip clearfix">
              <img class="pull-left" src="../../assets/img/icon-bg4.png" alt="">
              <span class="pull-right">View Detail</span>
            </p>
            <p class="num">3</p>
            <p class="info">Total Forms</p>
          </li>
          <li class="mr-20">
            <p class="tip clearfix">
              <img class="pull-left" src="../../assets/img/icon-bg6.png" alt="">
              <span class="pull-right">View Detail</span>
            </p>
            <p class="num">5</p>
            <p class="info">Total Subscription Orders</p>
          </li>
          <li>
            <p class="tip clearfix">
              <img class="pull-left" src="../../assets/img/icon-product5.png" alt="">
              <span class="pull-right">View Detail</span>
            </p>
            <p class="num">35000</p>
            <p class="info">Total Fee</p>
          </li>
        </ul>
        <div>
          <h5 class="mb-30">My Products<Button type="primary" style="float:right" @click="jump">more</Button></h5>
          <Table border :columns="columns1" :data="data1"></Table>
        </div>

        <ul class="info clearfix mb-40">
          <li class="mr-20">
            <div class="title">
              <span class="name">Site Health</span>
              <Select style="width:100px" value="SDN">
                <Option value="SDN">SDN</Option>
              </Select>
              <img src="../../assets/img/icon-dote.png" alt="">
            </div>
            <div class="clearfix box">
              <p class="num">2<span>Sites Up</span></p>
              <p class="num">0<span>Sites Down</span></p>
              <p class="num">0 <span>Total Alarms</span></p>
              <p class="num">0<span>Current Alarms</span></p>
            </div>
          </li>
          <li class="mr-20">
            <div class="title">
              <span class="name" style="margin-right: 32px">Network Health</span>
              <Select style="width:100px" value="SDN">
                <Option value="SDN">SDN</Option>
              </Select>
              <img src="../../assets/img/icon-dote.png" alt="">
            </div>
            <div class="box">
              <div class="btnBox">
                <Button :class="tab==1?'active':''" ghost class="mr-10">Network Usage</Button>
                <Button :class="tab==2?'active':''" ghost>Packets Loss</Button>
                <div class="time">
                  <p class="num"><img style="vertical-align: text-top" src="../../assets/img/daikuan.png" alt=""> 45% <img src="../../assets/img/icon-arrow.png" alt=""></p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              <span class="name">Recommend</span>
            </div>
            <div v-if="newPro.status==3">
              <div class="desc"  >
                <p>{{title}}</p>
                <p class="f14">{{distrable}}</p>
              </div>
              <Button class="btn" ghost @click="toPro">VIEW NOW</Button>
            </div>
            <!--<ul class="dote clearfix">
              <li class="active"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>-->
          </li>
        </ul>
        <h5 class="mb-20">Equipment Activity</h5>
        <ul class="equipment clearfix">
          <li class="mr-20">
            <div>
              <img src="../../assets/img/pop.png" alt="">
              <p class="num">16</p>
              <p class="info">Running Edge</p>
            </div>
          </li>
          <li class="mr-20">
            <div>
              <img src="../../assets/img/icon-cpe.png" alt="">
              <p class="num">2</p>
              <p class="info">Running CPE</p>
            </div>
          </li>
          <li>
            <div>
              <img src="../../assets/img/icon-line.png" alt="">
              <p class="num">1</p>
              <p class="info">Running Link</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less">
    #app{
      height: auto !important;
      padding-bottom: 30px;
    }
  .main{
    .content{
      width:1200px;
      margin:0 auto;
      margin-top:18px;
      padding-bottom:30px;
      .hhh{
        font-size: 14px;
        color: #a6b0c5;
        font-weight: normal;
        margin-bottom: 20px;
        span{
          float: right;
          color: white;
          background: #4486fa;
          padding: 3px;
          border-radius: 5px;
          img{
            display: inline-block;
            vertical-align: middle;
            margin-left: 10px;
          }
        }
      }
      /*@media screen and (max-width: 1024px){
        .hhh{
          margin-left: 60px;
        }
      }*/
      .con{
        background: white;
        padding: 40px;
        ul{
          &.view li{
            width: 355px;
            height: 208px;
            float: left;
            &:first-child{
                background: url(../../assets/img/icon-bg1.png) no-repeat;
             }
            &:nth-child(2){
               background: url(../../assets/img/icon-bg2.png) no-repeat;
             }
            &:last-child{
               background: url(../../assets/img/icon-bg3.png) no-repeat;
             }
             p{
                color:white;
                font-size:16px;
                text-align:center;
                &.tip{
                  padding: 14px 18px 0 16px;
                }
                &.num{
                  font-size: 60px;
                }
             }
          }
          &.info>li{
             margin-top: 40px;
             width: 355px;
             height: 290px;
             float: left;
             border: 1px solid #e2e9f6;
              .title{
                height: 36px;
                line-height: 36px;
                font-size:16px;
                color:#333;
                padding:10px 10px 0 20px;
                margin-bottom:50px;
                .ivu-select-selected-value,.ivu-select-single .ivu-select-selection{
                  height: 36px;
                }
                img{
                  vertical-align: middle;
                  margin-left: 5px;
                  cursor: pointer;
                }
                .name{
                  margin-right: 90px;
                }
              }
              .box{
                padding-bottom:50px;
                .num{
                  font-size: 40px;
                  color: #42a5f6;
                  float: left;
                  width: 50%;
                  text-align: center;
                  margin-bottom:30px;
                  span{
                    width: 100%;
                    font-size: 14px;
                    color: #333;
                    display: block;
                  }
                }
                .btnBox{
                  width: 240px;
                  margin: 0 auto;
                  button{
                    border: 1px solid #e2e9f6;
                    color: #666666;
                    &.active{
                      color: #42a5f6;
                      border: 1px solid #42a5f6;
                     }
                  }
                  .time{
                    padding-top:50px;
                    .num{
                      width: 100%;
                    }
                    img{
                      vertical-align: middle;
                    }
                  }
                }
              }
              .desc{
                padding-left:30px;
                p{
                  font-size: 22px;
                  color: #333;
                }
              }
              .btn{
                width: 120px;
                margin: 20px auto;
                display: block;
                color: #42a5f6;
                border: 1px solid #42a5f6;
              }
              .dote{
                width: 70px;
                margin:0 auto;
                li{
                  float: left;
                  width: 8px;
                  height: 8px;
                  background: #e2e9f6;
                  border-radius:50%;
                  margin-right:6px;
                  text-align:center;
                  &.active{
                     background: #42a5f6;
                   }
                }
              }
           }
          &.equipment>li{
             width: 355px;
             height: 160px;
             float: left;
             border: 1px solid #e2e9f6;
              text-align:center;
              img{
                margin-top: 30px;
              }
             .num{
               font-size: 36px;
               color: #333333;
             }
             .info{
               font-size: 16px;
               color: #666;
             }
           }
        }
        h5{
          color: #333333;
          font-size: 16px;
          font-weight: normal;
        }
        th{
          border-right: none;
          background: #f6f7fb;
          text-align: center;
          font-size: 14px;
          color: #8390a4;
          font-weight: normal;
        }
        td{
          text-align: center;
          font-size: 14px;
          &.green{
            color: #19ceb3;
           }
          &.blue{
             color: #42a5f6;
              cursor: pointer;
           }
           &:nth-child(5) {
              color: #19ceb3;
            }
            // &:nth-child(6){
            //    color: #42a5f6;
            //  }
            &:last-child{
               color: #42a5f6;
               cursor: pointer;
             }

        }
      }
    }
  }
</style>

<script>

  export default{
      data(){
        return{
            tab:1,
          columns1:[
            {
              title: 'Product Name',
              key: 'productName'
            },
            {
              title: 'Fee Name',
              key: 'feeName'
            },
            {
              title: 'Effective Time',
              key: 'effectiveTime'
            },
            {
              title: 'Expiry Time',
              key: 'expiryTime'
            },
            {
              title: 'Status',
              key: 'status'
            },
            {
              title: 'Service NO.',
              key: 'subscriptionNo'
            },
            {
              title: 'Operation',
              key: 'operation',
              render:(h,params)=>{
                  return h('div',[h('span', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.show(params.row.subscriptionNo);
                      }
                    }
                  }, 'Detail')])
              }
            }
          ],
          data1:[],
          newPro:{},
          title:"Cloud Connect Basic",
          distrable:'Cloud Connect Cloud to Cloud for Minor Enterprise'
        }
      },
      mounted(){
        this.getProduct();
        this.newProduct();
      },
      methods:{
          show(url){
              this.$router.push({
                path:'../page/cloud/cloudMonitoring',
                query: {
                  title: url
                }
              })
          },
          toCustomized(){
              this.$router.push({path:'../Customized'});
          },
          getProduct(){
              var that=this;
              var user=sessionStorage.getItem('user');
              this.$http.post('/productOrder/bookedBusiness?customerName='+user).then((res)=>{
                  if(res.data.length>0){
                    res.data.map(function(item){
                        if(item.status==3 ||item.status=='6'){
                          item.status='inservice';
                        }else if(item.status=='-1' ){
                          res.data.remove(item)
                        }
                        item.subscriptionNo=item.subscriptionNo+'00';
                    })
                    that.data1=res.data;
                  }
              })
          },
          newProduct(){
              var that=this;
              this.$http.post('/productInfo/listInfo').then((res)=>{
                  that.newPro=res.data.find(item => item.productId == 'createProduct');
              })
          },
          toPro(){
              this.$router.push({
                path:'../page/product/ProductPage',
                query:{
                    title:this.title
                }
              })
          },
          jump(){
            this.$router.push('/page/order/Mybusiness')
          }
      }

  }
</script>

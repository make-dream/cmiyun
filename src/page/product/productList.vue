<template>
  <div id="productList">
    <div class="nav">
      <h5>Products</h5>
      <div>
        <span @click="toCustomized">Click  here start to customize your own requirement</span>
        <Icon type="md-menu" />
      </div>
    </div>
    <div class="top">
      <div style="width: 2500px;">
        <div class="block" v-for="(data,index) in data1">
          <h4>Recommend</h4>
          <div class="imgBox">
            <p>{{data.productName}}</p>
            <img src="../../assets/img/icon-pro.png" alt="">
          </div>
          <div class="list">
            <span>{{data.productName}}</span>
            <p>
              <span>HOT</span>
            </p>
          </div>
          <div class="list2">
            <span>{{data.Description}}</span>
          </div>
          <div class="list3">
            <span @click="jump(data.productName)">VIEW NOW</span>
            <Icon type="md-arrow-round-forward" />
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <Tabs value="name1">
        <TabPane label="All" name="name1">
          <div class="tabContent">
            <ul v-for="(data,index) in data1">
              <li class="imgBox">
                <h5>{{data.productName}}</h5>
                <img src="../../assets/img/icon-pro1.png" alt="">
              </li>
              <li>
                <div>
                  <span>{{data.productName}}</span>
                  <p style="display: inline-block">
                    <span style="color: #4f88fb;vertical-align: middle;font-weight: 700;cursor: pointer" @click="jump(data.productName)">VIEW NOW</span>
                    <Icon type="md-arrow-round-forward" style="color: #4f88fb;"/>
                  </p>

                </div>
                <div>{{data.Description}}</div>
              </li>
            </ul>
          </div>
        </TabPane>
        <TabPane label="Cloud Connect" disabled>
        </TabPane>
        <TabPane label="SD-WAN" disabled>
          <div class="tabContent">
            <ul style="padding-top: 0">
              <li>
                <img src="../../assets/img/productlist1.png" alt="">
              </li>
              <li>
                <div>
                  <span>Cloud Connect</span>
                  <span style="color: #4f88fb;vertical-align: middle;padding-left: 730px;font-weight: 700;cursor: pointer" @click="jump">VIEW NOW</span>
                  <Icon type="md-arrow-round-forward" style="color: #4f88fb;"/>
                </div>
                <div>CMI Cloud Connect Service is unique in the market for enterprises that require reliable,secure and  private cross border connections between company offices,data centers and Cloud platform for data communicattions and synchronization</div>
              </li>
            </ul>
            <ul>
              <li>
                <img src="../../assets/img/productlist1.png" alt="">
              </li>
              <li>
                <div>
                  <span>Cloud Connect</span>
                  <span style="color: #4f88fb;vertical-align: middle;padding-left: 730px;font-weight: 700"  @click="jump">VIEW NOW</span>
                  <Icon type="md-arrow-round-forward" style="color: #4f88fb;"/>
                </div>
                <div>CMI Cloud Connect Service is unique in the market for enterprises that require reliable,secure and  private cross border connections between company offices,data centers and Cloud platform for data communicattions and synchronization</div>
              </li>
            </ul>
            <ul>
              <li>
                <img src="../../assets/img/productlist1.png" alt="">
              </li>
              <li>
                <div>
                  <span>Cloud Connect</span>
                  <span style="color: #4f88fb;vertical-align: middle;padding-left: 730px;font-weight: 700"  @click="jump">VIEW NOW</span>
                  <Icon type="md-arrow-round-forward" style="color: #4f88fb;"/>
                </div>
                <div>CMI Cloud Connect Service is unique in the market for enterprises that require reliable,secure and  private cross border connections between company offices,data centers and Cloud platform for data communicattions and synchronization</div>
              </li>
            </ul>
          </div>
        </TabPane >
        <TabPane label="ECS" disabled>
          <div class="tabContent">
            <ul>
              <li>
                <img src="../../assets/img/productlist1.png" alt="">
              </li>
              <li>
                <div>
                  <span>Cloud Connect</span>
                  <span style="color: #4f88fb;vertical-align: middle;padding-left: 730px;font-weight: 700;cursor: pointer" @click="jump">VIEW NOW</span>
                  <Icon type="md-arrow-round-forward" style="color: #4f88fb;"/>
                </div>
                <div>CMI Cloud Connect Service is unique in the market for enterprises that require reliable,secure and  private cross border connections between company offices,data centers and Cloud platform for data communicattions and synchronization</div>
              </li>
            </ul>

          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<style lang="less">
  #productList{
    width: 1200px;
    margin: 0 auto;
    .nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      h5{
        color: #a6b0c5;
        font-size: 14px;
        padding: 15px 0;
        display: inline-block;
      }
      div{
        display: inline-block;
        cursor: pointer;
        width: 360px;
        height: 25px;
        line-height: 25px;
        background-color: #4486fa;
        color: #fff;
        border-radius: 6px;
        font-size: 14px;
        text-align: center;
      }
    }
  .imgBox{
    position: relative;
  p{
    font-size: 32px;
    color: #636e80;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 20px;
  }
  h5{
    font-size: 10px;
    font-weight: normal;
    color: #636e80;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 10px;
  }
  }
    .top{
      margin-bottom: 20px;
      overflow: hidden;
      width: 1200px;
      .block{
        width: 400px;
        display: inline-block;
        padding: 15px 25px;
        background: #fff;

        h4{
          font-size: 18px;
          font-weight: 400;
          color: #8390a4;
          padding-bottom: 10px;
        }
        img{
          width: 100%;
          height: 100%;
        }
        .list{
          font-size: 14px;
          padding: 10px 10px 10px 0;
          p{
            display: inline-block;
            width: 25px;
            height: 12px;
            line-height: 12px;
            border-radius: 10px;
            background: #ff4e0e;
            text-align: center;
            margin-left: 6px;
            span{
              color: #fff;
              font-size:10px;
              display: inline-block;
              -webkit-transform: scale(0.5);

            }
          }
          span{
            font-size:14px;
          }
        }
        .list2{
          font-size: 12px;
          color: #8390a4;
          padding-bottom: 10px;
          display: inline-block;
          height: 50px;
        }
        .list3{
          color: #4f88fb;
          font-size: 14px;
          font-weight: 700;
          span{
            cursor: pointer;
            vertical-align: middle;
          }
        }
      }
    }
    .content{
      background: #fff;
      .ivu-tabs-tab{
        width:140px;
        text-align: center;
        color: #8390a4;
        font-size: 18px;
      }
      .tabContent{
        padding: 30px;
        ul{
          padding: 20px 0;
          border-bottom: 1px solid #f0f5fe;
          li{
            display: inline-block;
          }
          li:nth-child(1){
            width: 100px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          li:nth-child(2){
            width: 1030px;
            padding-left: 20px;
            div:nth-child(1){
              font-size: 16px;
              display: flex;
              justify-content: space-between;
            }
            div:nth-child(2){
              font-size: 14px;
              color: #8390a4;
            }
          }
        }
      }
    }
  }

</style>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        data1:[],
        data2:[],
      }
    },
    methods:{
      jump(name){
        this.$router.push({
          path:'/page/product/ProductPage',
          query:{
            title:name
          }
        })
      },
      toCustomized(){
        this.$router.push({path:'../../Customized'});
      }
    },
    created(){
      this.$http.get('/productInfo/listInfo').then(res=>{
        let status;
        this.data1 =  [
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
        ];
        for (var i = res.data.length-1; i>-1; i--){
          if (res.data[i].status == -1){
            this.data1.splice(i,1)
          }else if(res.data[i].status == 0){
            this.data1.splice(i,1)
          }
        }
      })
    }
  }
</script>


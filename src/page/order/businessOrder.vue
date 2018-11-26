<template>
  <div id="businessOrder">
    <h5>Product > Product Info > Subscription</h5>
    <div class="content">
      <div class="ArticleSteps">
        <h1>{{title}}</h1>
        <template>
          <Steps :current='current'>
            <Step content="Config" v-if="change==1"></Step>
            <Step content="Change" v-if="change==2"></Step>
            <Step content="Select"></Step>
            <Step content="Confirm"></Step>
            <Step content="Complete"></Step>
          </Steps>
        </template>
      </div>
      <div class="mainContent1" v-if="display.first">
        <div style="padding-bottom: 30px" v-if="change==1">
          <span class="word">Subscription Cycle</span>
          <Select v-model="model1" style="width:280px;margin-left: 20px">
            <Option v-for="item in SubscriptionCycle" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div style="padding-bottom: 30px" v-if="change==1">
          <span class="word">Bandwidth</span>
          <Select v-model="model2" style="width:280px;margin-left: 20px">
            <Option v-for="item in Bandwidth" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <template>
          <Form ref="formDynamic" :model="formDynamic" v-if="change==1">
            <FormItem label="connection Point"  class="connection-point">
              <FormItem
                v-for="(item, index) in formDynamic.items"
                :key="item.index"
                v-if="item.status">
                <Select v-model="item.value" style="width:280px;margin-left: 20px">
                  <Option v-for="item in ConnectionPoint" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Input  placeholder="please input account id" v-if="item.value=='Cloud side'" style="width: 300px" />
                <Input  placeholder="please input address" v-if="item.value=='Client side'" style="width: 300px" />
                <Icon type="ios-add-circle-outline" v-if="item.status==1" style="font-size: 28px;cursor: pointer" @click="handleAdd"/>
                <div v-if="item.status==2"  @click="handleRemove(index)" style="cursor: pointer;width: 24px;height: 24px;line-height:24px;text-align: center;border-radius: 50%;border: 1px solid gray;display: inline-block;vertical-align: middle;margin-left: 3px">-</div>
              </FormItem>
            </FormItem>
          </Form>
          <Form v-if="change==2">
            <FormItem label="Subscription Cycle" :label-width="120">
              7 Months
            </FormItem>
            <FormItem label="Bandwidth" :label-width="120">
              10Mbps
            </FormItem>
            <FormItem label="Connection Point" :label-width="120">
              <p v-if="ifClient==1">Cloud side    CSP-kjfoe13k1</p>
              <p v-if="ifClient==1">Cloud side    CSP-aabod6k1</p>
              <p v-if="ifClient==2">Cloud side    CSP-ccbod6k1</p>
              <p v-if="ifClient==2">Client side    Dacheng Building,Beijing</p>
            </FormItem>
            <FormItem label="New Bandwidth" :label-width="120">
              <Select placeholder="Please Select Bandwidth" style="width: 180px">
                <Option value="Please Select Bandwidth">Please Select Bandwidth</Option>
                <Option value="10Mbps">10Mbps</Option>
                <Option value="100Mbps">100Mbps</Option>
              </Select>
            </FormItem>
          </Form>
        </template>
        <div class="next">
          <span @click="firstJump">Next</span>
          <Icon type="md-arrow-round-forward"/>
        </div>
      </div>
      <div class="mainContent2" v-if="display.second">
        <template>
          <Collapse v-model="value1">
            <Panel name="1">
              <input type="checkbox" checked value="是我" v-if="change==1">
              <input type="checkbox" value="是我" v-if="change==2">
              <span style="font-size: 14px;font-weight: 700;width: 210px;">10Mbps Monthly Rental Fee </span>
              <span style="display: inline-block;margin-left: 40px;font-size: 16px">1000HKD/Month</span>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Bandwidth </span>
                <span class="word">10Mbps </span>
              </p>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Desciption </span>
                <span class="word">Cloud Connect Cloud to Cloud for Minor Enterprise </span>
              </p>
            </Panel>
            <Panel name="2">
              <input type="checkbox" value="是我">
              <span style="font-size: 14px;font-weight: 700;width: 210px;">10Mbps Yearly Rental Fee </span>
              <span style="display: inline-block;margin-left: 40px;font-size: 16px">10000HKD/Year</span>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Bandwidth </span>
                <span class="word">10Mbps </span>
              </p>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Desciption </span>
                <span class="word">Cloud Connect Cloud to Cloud for Minor Enterprise </span>
              </p>
            </Panel>
            <Panel name="3">
              <input type="checkbox" value="是我" v-if="change==1">
              <input type="checkbox" checked value="是我" v-if="change==2">
              <span style="font-size: 14px;font-weight: 700;width: 210px;">100Mbps Monthly Rental Fee </span>

              <span style="display: inline-block;margin-left: 40px;font-size: 16px">5000HKD/Year</span>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Bandwidth </span>
                <span class="word">100Mbps </span>
              </p>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Desciption </span>
                <span class="word">Cloud Connect Cloud to Cloud for Minor Enterprise </span>
              </p>
            </Panel>
            <Panel name="4">
              <input type="checkbox" value="">
              <span style="font-size: 14px;font-weight: 700;width: 210px;">100Mbps Yearly Rental Fee </span>
              <span style="display: inline-block;margin-left: 40px;font-size: 16px">50000HKD/Year</span>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Bandwidth </span>
                <span class="word">100Mbps </span>
              </p>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Desciption </span>
                <span class="word">Cloud Connect Cloud to Cloud for Minor Enterprise </span>
              </p>
            </Panel>
          </Collapse>
        </template>
        <div style="float:right;">
          <div class="previous">
            <Icon type="md-arrow-round-back" />
            <span @click="secondBack">Previous</span>

          </div>
          <div class="next">
            <span @click="secondJump">Next</span>
            <Icon type="md-arrow-round-forward"/>
          </div>
        </div>
      </div>
      <div class="mainContent3" v-if="display.third">
        <div>
          <h4>Configuration Info</h4>
          <ul>
            <li>
              <span class="firstSpan">Subscription Cycle</span>
              <span class="secondSpan">7 Months</span>
            </li>
            <li>
              <span class="firstSpan">Bandwidth Cycle</span>
              <span class="secondSpan">10 Mbps</span>
            </li>
            <li>
              <span class="firstSpan">Connection Point</span>
              <span class="secondSpan" v-if="ifClient==1">Cloud side CSP-kjfoe13k1 </span>
              <span style="display: block;margin-left: 153px;margin-top: 10px" v-if="ifClient==1">Cloud side CSP-aabod6k1 </span>
              <span style="display: block;margin-left: 153px;margin-top: 10px" v-if="ifClient==2">Cloud side CSP-ccbod6k1</span>
              <span style="display: block;margin-left: 153px;margin-top: 10px" v-if="ifClient==2">Client side Dacheng Building,Beijing </span>
            </li>
            <li v-if="change==2">
              <span class="firstSpan">New Bandwidth</span>
              <span class="secondSpan">100 Mbps</span>
            </li>
          </ul>
          <h4>Fee Info</h4>
          <Table :columns="columns1" :data="data1" style="margin-bottom: 60px" v-if="change==1"></Table>
          <Table :columns="columns2" :data="data2" style="margin-bottom: 60px" v-if="change==2"></Table>
          <div style="text-align: center">
            <Button type="primary" style="font-size: 14px;margin-bottom: 60px" @click="thirdJump" :disabled="change==2">Confirm</Button>
          </div>
          <h4>Recommend Product</h4>
          <div class="endBorder">
            <div class="endBorder_1">
              <img src="../../assets/img/businessPic.png" alt="">
              <div>
                <h5>Elastic Compute Service</h5>
                <h6>An online computing service that offers elastic and secure virtual cloud servers to cater all you cloud hosting needs</h6>
              </div>
            </div>
            <Button type="success" @click="goToProductPage">View</Button>
          </div>
        </div>
      </div>
      <div class="mainContent4" v-if="display.fourth">
        <div class="success">
          <div style="width: 300px;text-align: right;display: inline-block">
            <Icon type="ios-checkmark-circle-outline" style="font-size: 65px;color: #4486fa"/>
          </div>
          <div style="width: 495px;display: inline-block;margin-left: 20px">
            <h5 style="font-size: 16px">Congratulations</h5>
            <div style="font-size: 14px">You Subscription has been successfully submitted</div>
          </div>
        </div>
        <h6 style="text-align: center;font-size: 14px">5s later this page will redirect to the <span style="color: #4486fa;cursor: pointer" @click="jumpPage">order info page</span> automatically.Or you can press the hyperlink right now</h6>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  #businessOrder{
    width: 1200px;
    margin: 20px auto;
  h5{
    font-size: 14px;
    color: #919daf;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .ivu-steps-item.ivu-steps-status-finish .ivu-steps-tail>i:after{
    height: 4px;
    background-color: #2ed496 !important;
    border: 1px solid #f1f4f9;
  }
  .ivu-icon-ios-checkmark:before{
    border-radius: 50% !important;
    border: 4px solid #f1f4f9;
    background: #2ed496;
  }
  .content{
    background: #fff;
    border: 1px solid #e2e9f6;
    padding: 30px 40px 100px 40px;
  .ArticleSteps{
    padding-bottom: 120px;
  .ivu-steps{
    position: relative;
    left: 125px;
  }
  .ivu-steps-head{
  .ivu-steps-head-inner{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #f1f4f9;
    background-color: #fff;
  /*border: 3px solid #2ed496;*/
  span{
    color: black !important;
  }
  }
  .ivu-icon-ios-checkmark:before{
    color: #fff;
  }
  }
  .ivu-steps-content{
    padding:5px 4px 0 0;
    margin-left: -8px;
    font-size: 14px;
  }
  }
  .mainContent1{
    width: 900px;
    margin: 0 auto;
  .word{
    display: inline-block;
    width: 120px;
    text-align: right;
    font-size: 14px;
    color: gray;
  }
  // .ivu-form-item{
     //   margin-left: 48px;
     // }
  .ivu-form-item-content{
    margin-bottom: 20px;
  .ivu-form-item-content{
    padding-left: 123px;
  }
  }
  .next{
    display: block;
    text-align: right;
    font-size: 16px;
    color: #4486fa;
    cursor: pointer;
  span{
    vertical-align: middle;
  }
  }
  button{
    width: 40px;
  }
  }
  .mainContent2{
    margin: 0 auto;
  span{
    display: inline-block;
  }
  input{
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 10;
  }
  .ivu-collapse{
    position: relative;

  }
  .word{
    font-size: 14px;
  }
  p{
    padding: 10px;
  }
  .ivu-collapse-header{
    background-color: #f6f9fe;
  }
  .previous{
    display: inline-block;
    text-align: right;
    font-size: 16px;
    color: #4486fa;
    cursor: pointer;
    margin-right: 30px;
  span{
    vertical-align: middle;
  }
  }
  .next{
    display: inline-block;
    text-align: right;
    font-size: 16px;
    color: #4486fa;
    cursor: pointer;
  span{
    vertical-align: middle;
  }
  }
  }
  .mainContent3{
    margin: 0 auto;
  h4{
    font-size: 18px;
    color: #8390a4;
    margin-bottom: 20px;
  }

  ul{
    width: 1000px;
    margin: 0 auto;
    color: #8390a4;
    font-size: 14px;
  li{
    margin-bottom: 20px;
  }
  .firstSpan{
    display: inline-block;
    width: 140px;
    text-align: right;
  }
  .secondSpan{
    display: inline-block;
    margin-left: 10px;
  }
  }
  .endBorder{
    border: 1px solid #f4f5f9;
    padding: 25px;
    position: relative;
  div{
    display: inline-block;
  }
  .endBorder_1{
    display: flex;
    align-items: center;
  }
  img{
    margin-right: 20px;
  }
  button{
    position: absolute;
    right: 20px;
    top: 45px;
    width: 70px;
    font-size: 14px;
  }
  h6,h5{
    font-size: 14px;
  }
  }
  }
  .mainContent4{
    margin: 0 auto;
  .success{
    width: 800px;
    margin: 0 auto 40px;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  }

  }
  .connection-point{
  .ivu-form-item-label{
    display: inline-block;
    width: 120px;
    text-align: right;
    padding-right: 0;
    font-size: 14px;
    color: gray;
    margin-right: 3px;
  }
  }
  }
</style>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        current:0,
        SubscriptionCycle: [
          {
            value: 'Please Select Cycle',
            label: 'Please Select Cycle'
          },
          {
            value: '1 Months',
            label: '1 Months'
          },
          {
            value: '2 Months',
            label: '2 Months'
          },
          {
            value: '3 Months',
            label: '3 Months'
          },
          {
            value: '4 Months',
            label: '4 Months'
          },
          {
            value: '5 Months',
            label: '5 Months'
          },
          {
            value: '6 Months',
            label: '6 Months'
          },
          {
            value: '7 Months',
            label: '7 Months'
          },
          {
            value: '8 Months',
            label: '8 Months'
          },
          {
            value: '9 Months',
            label: '9 Months'
          },
          {
            value: '10 Months',
            label: '10 Months'
          },
          {
            value: '11 Months',
            label: '11 Months'
          },
          {
            value: '12 Months',
            label: '12 Months'
          },
        ],
        Bandwidth: [
          {
            value: 'Please Select Bandwidth',
            label: 'Please Select Bandwidth'
          },
          {
            value: '10Mbps',
            label: '10Mbps',
          },
          {
            value: '100Mbps',
            label: '100Mbps',
          },
        ],
        ConnectionPoint: [
          {
            value: 'Cloud side',
            label: 'Cloud side'
          },
          {
            value: 'Client side',
            label: 'Client side'
          },
        ],
        model1: 'Please Select Cycle',
        model2: 'Please Select Bandwidth',
        value:'',
        value1:'1',
        point1: 'Cloud side',
        formDynamic: {
          items: [
            {
              index: 1,
              status:1,
              value: 'Cloud side'
            }
          ]
        },
        index: 1,
        display:{
          first:true,
          second:false,
          third:false,
          fourth:false,
        },
        columns1: [
          {
            title: 'Fee Name',
            key: 'FeeName',
            align:'center'
          },
          {
            title: 'Price with Tax',
            key: 'Price',
            align:'center'
          },
          {
            title: 'Subscription Cycle',
            key: 'SubscriptionCycle',
            align:'center'
          },
          {
            title: 'Quantity',
            key: 'Quantity',
            align:'center'
          },
          {
            title: 'Tax（HKD）',
            key: 'Tax',
            align:'center'
          },
          {
            title: 'Subtotal(HKD)',
            key: 'Subtotal',
            align:'center'
          }
        ],
        data1: [
          {
            FeeName: '10Mbps Monthly Rental Fee',
            Price: '1000HKD/Month',
            SubscriptionCycle: '7',
            Quantity: '1',
            Tax: 700,
            Subtotal: '7000',
          },
        ],
        columns2: [
          {
            title: 'Fee Name',
            key: 'FeeName',
            align:'center'
          },
          {
            title: 'Price with Tax',
            key: 'Price',
            align:'center'
          },
          {
            title: 'Subscription Cycle',
            key: 'SubscriptionCycle',
            align:'center'
          },
          {
            title: 'Quantity',
            key: 'Quantity',
            align:'center'
          },
          {
            title: 'Tax（HKD）',
            key: 'Tax',
            align:'center'
          },
          {
            title: 'Subtotal(HKD)',
            key: 'Subtotal',
            align:'center'
          },
          {
            title:'Operation',
            key:'Operation',
            align:'center'
          }
        ],
        data2: [
          {
            FeeName: '10Mbps Monthly Rental Fee',
            Price: '1000HKD/Month',
            SubscriptionCycle: '7',
            Quantity: '1',
            Tax: 700,
            Subtotal: '7000',
            Operation:'Cancel'
          },
          {
            FeeName: '100Mbps Monthly Rental Fee',
            Price: '5000HKD/Month',
            SubscriptionCycle: '7',
            Quantity: '1',
            Tax: 3500,
            Subtotal: '35000',
            Operation:'New'
          },
        ],
        title:'',
        ifClient:1,
        change:1

      }
    },
    mounted(){
      this.title=this.$route.query.name;
      var ifClient=this.$route.query.ifClient;
      if(ifClient){
        this.ifClient=ifClient;
        this.change=2;

      }

    },
    methods:{
      handleAdd () {
        this.index++;
        var point=point+this.index;
        this.formDynamic.items.push({
          value: 'Cloud side',
          index: this.index,
          status:2
        });

      },
      handleRemove (index) {
        this.formDynamic.items[index].status = 0;
      },
      firstJump(){
        scrollTo(0,0);
        if(this.ifClient!=2){
          if(this.formDynamic.items.length>1){
            var value1=this.formDynamic.items[0].value;
            var value2=this.formDynamic.items[1].value;
            if(value1==value2){
              this.ifClient=1;
            }else{
              this.ifClient=2;
            }
          }else{
            this.ifClient=1;
          }
        }

        this.display.first = false;
        this.display.second = true;
        this.current++
      },
      secondBack(){
        scrollTo(0,0)
        this.display.first = true;
        this.display.second = false;
        this.current--
      },
      secondJump(){
        scrollTo(0,0)
        this.display.second = false;
        this.display.third = true;
        this.current++
      },
      thirdJump(){
        scrollTo(0,0);
        this.$http.get().then(res=>{

        }).catch(res=>{

        })
        this.display.third = false;
        this.display.fourth = true;
        this.current++
      },
      jumpPage(){
        let userName = window.sessionStorage.getItem('user');
        let headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
        var ifClient=this.ifClient;   //判斷云互聯，點上云
        this.$http.post('/productOrder/orderSubmit?type=1&productId='+this.$route.query.title+'&userName='+userName+'&ifClient='+ifClient,headers).then(res=>{
          this.$router.push({
            path:'/page/order/orderDetails',
            query:{
              Subscription:res.data.subscriptionNo
            }
          });
        })

      },
      goToProductPage(){
        window.open(window.location.origin+window.location.pathname+'#/page/product/ProductPage?title='+'Elastic Compute Service');
      }
    }
  }
</script>



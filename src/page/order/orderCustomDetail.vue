<template>
  <div class="orderCustom">
    <div class="main">
      <h5 class="mb-20">Accounts > My Subcription > Subcription Info</h5>
      <div class="con">
        <Form :label-width="80" label-position="left">
          <FormItem label="Status">
            <span>{{statusName}}</span> <span class="time">(Update Time：<span>{{updateTime}}</span>)</span>
            <Button type="warning" class="pull-right btn">Contact Us</Button>
          </FormItem>
          <FormItem label="Total" class="line">
            <span>{{totalHkd}}, <span style="color: red;">{{tax}}</span></span>
            <!--<Button type="warning" class="pull-right btn btn-gray">Deny</Button>
            <Button type="primary" class="pull-right mr-20">Accept and Order</Button>-->
          </FormItem>
          <h6>Basic Info</h6>
          <div class="content">
            <FormItem label="Subscription NO." :label-width="120">
              <span>{{subscriptionNo}}</span>
            </FormItem>
            <FormItem label="Create Time" :label-width="120">
              <span>{{createTime}}</span>
            </FormItem>
            <FormItem label="Effective Time" :label-width="120">
              --
            </FormItem>
            <FormItem label="Expiry Time" class="mb-50" :label-width="120">
              --
            </FormItem>
          </div>
        </Form>
        <h6>Configuration Info</h6>
        <div class="Feeinfo">
          <Collapse v-model="value1">
            <Panel name="1">
              Cloud Connect SE
              <p slot="content">
                <template>
                  <Form :label-width="80" :model="formValidate" :rules="ruleValidate">
                    <FormItem label="Subscription Cycle">
                      {{subscriptionCycle}}
                    </FormItem>
                    <FormItem label="Bandwidth">
                      {{bandwidth}}
                    </FormItem>
                    <FormItem label="Connection Point" prop="connection" :label-width="170">
                      <div class="mb-20" v-for="item in connectionPointList">
                        <span class="mr-20">{{item.connectSide}}</span>
                        <span>{{item.accountId}}</span>
                      </div>
                    </FormItem>
                  </Form>

                </template>
              </p>
            </Panel>
          </Collapse>

          <Collapse v-model="value2">
            <Panel name="1">
              SD-WAN SE
              <p slot="content">
                <template>
                  <Form :label-width="80" :model="formValidate" :rules="ruleValidate">
                    <FormItem label="Subscription Cycle" class="line">
                      <span>{{subscriptionCycle}}</span>
                    </FormItem>

                    <div v-for="(item,index) in siteList">
                      <FormItem :label="'Site Address'+(index+1)" prop="address">
                        <span>{{item.siteAddress}}</span>
                      </FormItem>
                      <FormItem label="Bandwidth">
                        {{bandwidth}}
                      </FormItem>
                      <FormItem label="Access Type">
                        <span v-for="i in item.accessType">{{i}}　</span>
                      </FormItem>
                      <FormItem label="WLAN" prop="wlan">
                        <span class="mr-20">{{item.wlans[0].ip}}</span>
                        <span>{{item.wlans[0].port}}</span>
                        <span>{{item.wlans[0].vlanId}}</span>
                      </FormItem>
                      <FormItem label="LAN">
                        <span class="mr-20">{{item.lans[0].ip}}</span>
                        <span class="mr-20">{{item.lans[0].port}}</span>
                        <span>{{item.lans[0].vlanId}}</span>
                      </FormItem>
                      <FormItem label="SUB-NET" class="line">
                        <p v-if="item.subNet.length>0" v-for="j in item.subNet.length" style="margin-left: 91px;margin-bottom: 10px;">
                          <span class="w506 mr-20">{{j}}</span>
                        </p>
                      </FormItem>
                    </div>
                  </Form>
                </template>
              </p>
            </Panel>
          </Collapse>
        </div>
        <h6>Fee Info</h6>
        <Table class="mb-60" :columns="columns1" border :data="data1" width="1115px" style="margin-top: 20px"></Table>
        <h6>Configuration Order</h6>
        <Table :columns="columns2" width="1115px" :data="data2" style="margin-top: 20px" no-data-text class="workInfo"></Table>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .orderCustom{
      background: #f8f8f8;
      .main{
        width: 1200px;
        margin: 0 auto;
        padding-top: 20px;
        padding-bottom: 30px;
        input,.ivu-select{
          width: 236px;
          height: 40px;
        }
        .btn{
          width: 120px;
        &.btn-gray{
           background: #89a0b6;
           border: #89a0b6;
           outline: none;
         }
        }
        .w104{
          input,.ivu-select{
            width: 104px;
          }
        }
        .w506{
          input,.ivu-select{
            width: 490px;
          }
        }
        img{
          vertical-align: middle;
          cursor: pointer;
        }
        .ivu-select-single .ivu-select-selection{
          height: 40px;
          min-height: 40px;
        }
        .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value{
          height: 40px;
          min-height: 40px;
          line-height: 40px;
        }
        .ivu-input-wrapper{
          display: inline;
        }
      }
      h5{
        font-size: 14px;
        font-weight: normal;
        color: #a6b0c5;
      }
      h6{
        font-size: 18px;
        color: #8390a4;
        font-weight: normal;
        margin-bottom: 10px;
      }
      .con{
        background: white;
        padding: 50px 40px;
      .line{
        border-bottom: 1px solid #eceff9;
        padding-bottom: 20px;
        margin-bottom: 40px !important;
      }
      .ivu-form-item{
        margin-bottom: 10px;
      }
      label{
        font-size: 18px;
        color: #8390a4;
      }
      .ivu-form-item-content{
        font-size: 20px;
        color: #636e80;
      }
      .time{
        font-size: 14px ;
        color: #c7cfde;
      }
      .tip{
        text-decoration:line-through;
        color: #8390a4;
      }
      .content{
        padding-left: 40px;
        label{
          color: #8390a4;
          font-size: 14px !important;
          text-align: right;
          margin-right: 8px;
        }
        .ivu-form-item-content{
          font-size: 14px;
        }
      }
    }
      .Feeinfo{
        margin-bottom: 15px;
        h4{
          font-size: 18px;
          font-weight: 500;
          margin:30px 0 15px 0;
          display: inline-block;
        }
      .ivu-collapse-header{
        font-size: 14px;
        background: #f2faff;
        color: #636e80;
      }
      .ivu-form-item-label{
        width: 171px !important;
        font-size: 14px;
      }
      .ivu-form-item-content{
        font-size: 14px;
      }
      .ivu-checkbox-wrapper{
        span{
          font-weight: normal;
          font-size: 14px;
          color: #636e80;
        }
      }
    }
      .ivu-collapse-content{
        padding: 0 40px;
      }
  }
</style>

<script>
  export default{
    data () {
      return {
        value1:'1',
        value2:'1',
        formValidate: {
          interest: [],
          connection:'',
          address:'',
          wlan:'',
          address2:'',
          wlan2:''
        },
        ruleValidate:{
          connection: [
            { required: true, message: '', trigger: 'change' }
          ],
          address:[
            { required: true, message: '', trigger: 'blur' }
          ],
          wlan: [
            { required: true, message: '', trigger: 'change' }
          ],
          address2:[
            { required: true, message: '', trigger: 'blur' }
          ],
          wlan2: [
            { required: true, message: '', trigger: 'change' }
          ],
        },
        columns1:[
          {
            title: 'Product Name',
            key: 'productName',
            align:'center',
          },
          {
            title: 'Fee Name',
            key: 'feeName',
            width:200,
            align:'center'
          },
          {
            title: 'Price with Tax',
            key: 'price',
            align:'center'
          },
          {
            title: 'Subscription Cycle (Month)',
            key: 'cycle',
            width: 200,
            align:'center'
          },
          {
            title: 'Quantity',
            key: 'quantity',
            align:'center'
          },
          {
            title: 'Tax(HKD)',
            key: 'tax',
            align:'center'
          },
          {
            title: 'Subtotal (HKD)',
            key: 'subtotal',
            align:'center'
          },
        ],
        data1:[
          {
            productName: 'Cloud Connect SE',
            feeName: '10Mbps Monthly Rental Fee',
            price: '1000HKD/Month',
            cycle:5,
            quantity:1,
            tax:500,
            subtotal:5000
          },
          {
            productName: 'Cloud Connect SE',
            feeName: '100Mbps Monthly Rental Fee',
            price: '5000HKD/Month',
            cycle:5,
            quantity:1,
            tax:2500,
            subtotal:25000
          },
          {
            productName: 'SD-WAN SE',
            feeName: '10Mbps Monthly Rental Fee',
            price: '500HKD/Month',
            cycle:5,
            quantity:2,
            tax:250,
            subtotal:2500
          },
          {
            productName: 'SD-WAN SE',
            feeName: 'CPE-M Device Fee',
            price: '200HKD/Month',
            cycle:5,
            quantity:2,
            tax:200,
            subtotal:2000
          },
          {
            productName: 'SD-WAN SE',
            feeName: 'License Fee',
            price: '100HKD/Month',
            cycle:5,
            quantity:2,
            tax:100,
            subtotal:1000
          }
        ],
        columns2:[
          {
            title: 'Config No.',
            key: 'productName',
            align:'center',
          },
          {
            title: 'Service',
            key: 'feeName',
            width:200,
            align:'center'
          },
          {
            title: 'Operation',
            key: 'price',
            align:'center'
          },
          {
            title: 'Update Time',
            key: 'cycle',
            width: 200,
            align:'center'
          },
          {
            title: 'Status',
            key: 'quantity',
            align:'center'
          }
        ],
        data2:[
          /*{
            productName: '1120181101161204',
            feeName: 'Cloud Connect Sevice',
            price: 'Open',
            cycle:'2018/11/01  16:12:04',
            quantity:'Pending Config'
          },
          {
            productName: '1120181101161203',
            feeName: 'SD-WAN Sevice',
            price: 'Open',
            cycle:'2018/11/01  16:12:03',
            quantity:'Pending Config'
          },
          {
            productName: '1120181101161245',
            feeName: 'Device Sevice',
            price: 'Open',
            cycle:'2018/11/01  16:12:45',
            quantity:'Pending Config'
          }*/
        ],
        bandwidth: "",
        statusName:'',
        connectionPointList:[],
        createTime: "2018-11-07 16:38",
        customerName: "CMI",
        productName: "productName3",
        siteList: [],
        status: 3,
        subscriptionCycle: "7 Months",
        subscriptionNo: 1541579913615,
        tax: "750HKD",
        totalHkd: "7500HKD/7Months",
        type: 1,
        updateTime: "2018-11-07 16:38",
        workNo: "wono1541579913615"
      }
    },
    mounted(){
      this.getData(this.$route.query.title);
    },
    methods:{
        getData(url){
            var that=this;
            this.$http.post('/productOrder/orderDetail?subscriptionNo='+url).then(function(res){
              that.bandwidth=res.data.bandwidth; /*1*/
              that.connectionPointList=res.data.connectionPointList;  /*1*/
              that.createTime=res.data.createTime;    /*1*/
              that.customerName=res.data.customerName;
              that.productName=res.data.productName;
              that.siteList=res.data.siteList;
              that.status= res.data.status;       /*1*/
              if(that.status==0){
                that.statusName='Inquiry';
              }else if(that.status==1){
                that.statusName='Pending Confirm';
              }else if(that.status==2){
                that.statusName='Pending Config';
              }else if(that.status==3){
                that.statusName='Config Successful';
              }
              that.subscriptionCycle=res.data.subscriptionCycle;
              that.subscriptionNo= res.data.subscriptionNo;   /*1*/
              that.tax=res.data.tax;                /*1*/
              that.totalHkd=res.data.totalHkd;      /*1*/
              that.type=res.data.type;
              that.updateTime=res.data.updateTime;  /*1*/
              that.workNo=res.data.workNo;   /*订单详情*/
              that.getWork();
            })
        },
        getWork(url){
          var that=this;
          this.$http.post('/workOrder/workDetail?workNo='+url).then(function(res){
            if(res.data){
              var status;
              if(res.data.status==1){
                status='Delivered';
              }else if(res.data.status==2){
                status='Pending Config';
              }else if(res.data.status==3){
                status='Config Successful';
              }
              that.data2.push({
                productName: res.data.workNo,
                feeName: res.data.service,
                price: res.data.operation,
                cycle:res.data.updateTime,
                quantity:status
              })
            }

          })
        }
    }
  }
</script>

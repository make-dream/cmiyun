<template>
    <div class="orderCustom">
        <div class="main">
          <h5 class="mb-20">Accounts > My Orders > Order Info</h5>
          <div class="con">
            <Form :label-width="80" label-position="left">
              <FormItem label="Status" :class="status==0?'line':''">
                <span>{{statusName}}</span> <span class="time">(Update Time： <span>{{updateTime}}</span>)</span>
                <Button type="warning" class="pull-right btn">Contact Us</Button>
              </FormItem>
              <FormItem label="Total/Tax" class="line">
                <span v-if="status!=0">{{totalHkd}}, <span>{{tax}}</span></span>
                <span v-if="status!=0" class="time tip"> 13000HKD/5Months</span>
                <Button v-if="status==1" type="warning" class="pull-right btn btn-gray">Deny</Button>
                <Button v-if="status==1" type="primary" class="pull-right mr-20" @click="submit">Accept and Order</Button>
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
                  {{status==3?effectiveTime:'--'}}
                </FormItem>
                <!-- <FormItem v-if="status!==3" label="Expiry Time" class="mb-50" :label-width="120">
                  {{expiryTime}}
                </FormItem> -->
              </div>
            </Form>
            <h6>Configuration Info</h6>
            <div class="Feeinfo">
              <Collapse v-model="value1">
                <Panel name="1">
                  Cloud Connect
                  <p slot="content">
                    <template>
                      <Form :model="formValidate" :rules="ruleValidate">
                        <FormItem label="Subscription Cycle">
                          <span>{{subscriptionCycle}}</span>
                        </FormItem>
                        <FormItem label="Bandwidth">
                          {{bandwidth}}
                        </FormItem>
                        <FormItem v-if="status==2" label="Connection Point">
                          <div class="item-style">
                            <!-- <div v-for="(item, index) in connectionPointList" :key="index"> -->
                            <div>
                              <span>Cloud side</span>
                              <span>CSP-kjfoe13k1</span>
                            </div>
                            <div>
                              <span>Client side</span>
                              <span>Dacheng Building,Beijing</span>
                            </div>
                            <!-- </div> -->
                          </div>
                        </FormItem>
                        <FormItem v-else label="Connection Point" prop="connection" :label-width="170">
                          <div class="mb-20" v-for="item in connectionPointList">
                            <Select placeholder="请选择产品不可办理的业务" v-model="item.connectSide" class="mr-20">
                              <Option value="Cloud side">Cloud side</Option>
                              <Option value="Client side">Client side</Option>
                            </Select>
                            <Input placeholder="please input account id" :value="item.accountId"></Input>
                          </div>
                        </FormItem>
                      </Form>

                    </template>
                  </p>
                </Panel>
              </Collapse>

              <Collapse v-model="value2">
                <Panel name="1">
                  SD-WAN
                  <p slot="content">
                    <template v-if="status==2">
                      <Form :label-width="130" :model="formValidate">
                          <FormItem label="Subscription Cycle" class="line">
                            <span>5 Months</span>
                          </FormItem>
                          <FormItem :label="'Site Address1'">
                            <span>Dacheng Building，Beijing</span>
                          </FormItem>
                          <FormItem label="Bandwidth">
                            <span>10Mbps</span>
                          </FormItem>
                          <FormItem label="Access Type">
                            <span>Internet,4G</span>
                          </FormItem>
                          <div class="line"></div>
                          <FormItem :label="'Site Address2'">
                            <span>Jinyu Building,Shanghai</span>
                          </FormItem>
                          <FormItem label="Bandwidth">
                            <span>10Mbps</span>
                          </FormItem>
                          <FormItem label="Access Type">
                            <span>Internet,MPLS-VPN,4G</span>
                          </FormItem>
                      </Form>
                    </template>
                    <template v-else>
                      <Form :label-width="80" :model="formValidate" :rules="ruleValidate">
                        <FormItem label="Subscription Cycle" class="line">
                          <span>{{subscriptionCycle}}</span>
                        </FormItem>
                        <div v-for="(item,index) in siteList">
                          <FormItem :label="'Site Address'+(index+1)" prop="address">
                            <Input placeholder="please input address" :value="item.siteAddress"></Input>
                          </FormItem>
                          <FormItem label="Bandwidth">
                            {{bandwidth}}
                          </FormItem>
                          <FormItem label="Access Type">
                            <Checkbox-group v-model="item.accessType">
                              <Checkbox label="Internet"></Checkbox>
                              <Checkbox label="MPLS-VPN"></Checkbox>
                              <Checkbox label="4G"></Checkbox>
                            </Checkbox-group>
                          </FormItem>
                          <FormItem label="WLAN" prop="wlan">
                            <div v-for="(j,idx) in item.wlans.length" class="mb-10" style="padding-left: 91px;">
                              <span>ip<i class="red hide">*</i></span>
                              <Select class="mr-20 w104" v-model="item.wlans[idx].ip">
                                <Option value="DHCP">DHCP</Option>
                                <Option value="Static">Static</Option>
                              </Select>
                              <Input v-if="item.wlans[idx].ip == 'Static'" placeholder="Ip Address" class="mr-20 w104"></Input>
                              <span>PORT<i class="red hide">*</i></span>
                              <Input class="mr-20 w104" :value="item.wlans[idx].port"></Input>
                              <span>VLAN ID</span>
                              <Input class="w104 mr-20" :value="item.wlans[idx].vlanId"></Input>
                              <img src="../../assets/img/icon-add.png" v-if="idx==0" alt="" @click="addWlan(index)">
                              <img src="../../assets/img/icon-del.png" v-if="idx>0" alt="" @click="delWlan(index,idx)">
                            </div>
                          </FormItem>
                          <FormItem label="LAN">
                            <div class="mb-10" style="padding-left: 91px" v-for="(j,idx) in item.lans.length">
                              <span>ip<i class="red hide">*</i></span>
                              <Select class="mr-20 w104" v-model="item.lans[idx].ip">
                                <Option value="0">DHCP</Option>
                                <Option value="1">Static</Option>
                              </Select>
                              <Input v-if="item.lans[idx].ip == '1'" placeholder="Ip Address" class="mr-20 w104"></Input>
                              <span>PORT<i class="red hide">*</i></span>
                              <Input class="mr-20 w104" :value="item.lans[idx].port"></Input>
                              <span>VLAN ID</span>
                              <Input class="w104 mr-20" :value="item.lans[idx].vlanId"></Input>
                              <img src="../../assets/img/icon-add.png" v-if="idx==0" alt="" @click="addLan(index)">
                              <img src="../../assets/img/icon-del.png" v-if="idx>0" alt="" @click="delLan(index,idx)">
                            </div>
                          </FormItem>
                          <FormItem label="SUB-NET" class="line">
                            <p v-for="(j,idx) in item.subNet.length" style="margin-left: 91px;margin-bottom: 10px;">
                              <Input class="w506 mr-20" :value="item.subNet[idx]"></Input>
                              <img src="../../assets/img/icon-add.png" v-if="idx==0" alt="" @click="addNet(index)">
                              <img src="../../assets/img/icon-del.png" v-if="idx>0" alt="" @click="delNet(index,idx)">
                            </p>
                            <p v-if="item.subNet.length==0" >
                              <Input class="w506 mr-20"></Input>
                              <img src="../../assets/img/icon-add.png" alt="" @click="addNet(index)">
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
            <Table :columns="columns2" :data="data2" width="1115px" style="margin-top: 20px"></Table>
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
          width: 486px;
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
    .workInfo{
      tbody{
        display: none;
      }
    }
  }
  .item-style{
    float: left;
    span + span{
      margin-left: 20px;
    }
  }
</style>

<script>
    export default{
        data () {
            return {
              value1:'1',
              value2:'1',
              // disabled: false,
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
                  { required: false, message: '', trigger: 'change' }
                ],
                address:[
                  { required: false, message: '', trigger: 'blur' }
                ],
                wlan: [
                  { required: false, message: '', trigger: 'change' }
                ],
                address2:[
                  { required: false, message: '', trigger: 'blur' }
                ],
                wlan2: [
                  { required: false, message: '', trigger: 'change' }
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
                  productName: 'Cloud Connect',
                  feeName: '100Mbps Monthly Rental Fee',
                  price: '5000HKD/Month',
                  cycle:5,
                  quantity:1,
                  tax:500,
                  subtotal:5000
                },
                {
                  productName: 'SD-WAN',
                  feeName: '10Mbps Monthly Rental Fee',
                  price: '500HKD/Month',
                  cycle:5,
                  quantity:2,
                  tax:500,
                  subtotal:5000
                },
                {
                  productName: 'SD-WAN',
                  feeName: 'CPE-M Device Fee',
                  price: '200HKD/Month',
                  cycle:5,
                  quantity:2,
                  tax:200,
                  subtotal:2000
                },
                {
                  productName: 'SD-WAN',
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
                  title: 'Config NO.',
                  key: 'configNo',
                  align:'center',
                },
                {
                  title: 'Service',
                  key: 'service',
                  width:200,
                  align:'center'
                },
                {
                  title: 'Operation',
                  key: 'operation',
                  align:'center'
                },
                {
                  title: 'Update Time',
                  key: 'updateTime',
                  width: 200,
                  align:'center'
                },
                {
                  title: 'Status',
                  key: 'status',
                  align:'center'
                }
              ],
              data2:[],
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
              tax: "1000HKD",
              totalHkd: "10000HKD/7Months",
              type: 1,
              updateTime: "2018-11-07 16:38",
              workNo: "wono1541579913615",
              effectiveTime:'',
              expiryTime:'',
              wlan: {
                items: [
                  {
                    value: '',
                    index: 1,
                    status: 1
                  }
                ]
              },
              lan: {
                items: [
                  {
                    value: '',
                    index: 1,
                    status: 1
                  }
                ]
              },
              net: {
                items: [
                  {
                    value: '',
                    index: 1,
                    status: 1
                  }
                ]
              },
            }
        },
        mounted(){
          this.subscriptionNo = this.$route.query.subscriptionNo || this.$route.query.Subscription;
          this.getData();
        },
        methods:{
          submit(){
            const userName = window.sessionStorage.getItem('user');
            this.$http.get(`customize/switchStatusFromPendingConfirm2PendingConfig?subscriptionNo=${this.subscriptionNo}&userName=${userName}`)
            .then((res) => {
              if(res.data.resultCode==200){
                this.getData();
              }
            })
          },
          getData(){
            var that=this;
            let headers = {
              'Content-Type': 'application/x-www-form-urlencoded',
            };
            this.$http.post('/productOrder/orderDetail?subscriptionNo='+this.subscriptionNo).then(function(res){
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
                // that.disabled = true;
              }else if(that.status==3){
                that.statusName='Config Successful';
              }else if(that.status == 4){
                that.statusName = 'Pending Deliver'
              }
              that.subscriptionCycle=res.data.subscriptionCycle;
              that.subscriptionNo= res.data.subscriptionNo;   /*1*/
              that.tax=res.data.tax;                /*1*/
              that.totalHkd=res.data.totalHkd;      /*1*/
              that.type=res.data.type;
              that.updateTime=res.data.updateTime;  /*1*/
              that.workNo=res.data.workNo;   /*订单详情*/
              that.effectiveTime=res.data.effectiveTime;
              that.expiryTime=res.data.expiryTime;
            })
            // let arr = url.toString()
            this.$http.post('/productOrder/getConfigByOrder?subscriptionNo='+this.subscriptionNo+'&type=1',headers).then((res)=>{
              res.data.map((r,index)=>{
                var status = 'Inquiry'
                if(r.status == 0){
                  status = 'Inquiry'
                }else if(r.status == 1){
                  status = 'Pending Confirm'
                }else if(r.status == 2){
                  status = 'Pending Config'
                }else if(r.status == 3){
                  status = 'Config Successful'
                }else if(r.status == 4){
                  status = 'Pending Deliver'
                }
                r.status = status;
              })
              that.data2 = res.data;
            })
          },
          addWlan(i){
            this.siteList[i].wlans.push({
              ip:'',
              port:'',
              vlanId:''
            })
          },
          addLan(i){
            this.siteList[i].lans.push({
              ip:'',
              port:'',
              vlanId:''
            })
          },
          addNet(i){
            if(this.siteList[i].subNet.length==0){
              this.siteList[i].subNet.push('   ','   ');
            }else{
              this.siteList[i].subNet.push('   ');
            }
          },
          delWlan(item,index){
            this.siteList[item].wlans.splice(index,1);
          },
          delLan(item,index){
            this.siteList[item].lans.splice(index,1);
          },
          delNet(item,index){
            this.siteList[item].subNet.splice(index,1);
          },
        }
    }
</script>

<template>
  <div id="businessOrderSDW">
    <h5>Product > Product Info > Subscription</h5>
    <div class="content">
      <div class="ArticleSteps">
        <h1>{{title}}</h1>
        <template>
          <Steps :current='current'>
            <Step content="Config"></Step>
            <Step content="Select"></Step>
            <Step content="Confirm"></Step>
            <Step content="Complete"></Step>
          </Steps>
        </template>
      </div>
      <div class="mainContent1" v-if="display.first">
        <div style="padding-bottom: 30px">
          <span class="word">Subscription Cycle</span>
          <Select v-model="model1" style="width:240px;margin-left: 20px">
            <Option v-for="item in SubscriptionCycle" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div style="padding-bottom: 30px">
          <span class="word">Topology</span>
          <Select v-model="model2" style="width:240px;margin-left: 20px">
            <Option v-for="item in Topology" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="create">
          <h6>Site</h6>
          <Button type="primary" @click="createDisplay">Create</Button>
        </div>
        <div class="createData" v-if="createData">
          <template>
            <Form :model="formItem" :label-width="150" :rules="ruleValidate" >
              <FormItem label="Site Address" >
                <Input v-model="formItem.input" placeholder="Please input address" style="width: 280px;"></Input>
              </FormItem>
              <FormItem label="Topology Role" prop="name">
                <Select v-model="formItem.select" style="width: 280px;">
                  <Option v-for="item in formItemDataRole" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="SD-WAN Bandwidth" prop="name">
                <Select v-model="formItem.select1" style="width: 280px;">
                  <Option v-for="item in formItemDataBandwidth" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="Access Type" prop="name">
                <CheckboxGroup v-model="formItem.checkbox">
                  <Checkbox label="Internet"></Checkbox>
                  <Checkbox label="MPLS-VPN"></Checkbox>
                  <Checkbox label="4G"></Checkbox>
                </CheckboxGroup>
              </FormItem>
              <FormItem label="WAN IP"
                  v-for="(item, index) in formDynamic.items"
                  :key="item.index"
                  v-if="item.status">
                  <Select v-model="WLANIP" style="width:100px">
                    <Option v-for="item in WLANIPData" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  <Input v-if="WLANIP == 'Static'" placeholder="Ip Address" class="mr-20 w104"></Input>
                  <span class="subtitles"> PORT </span>
                  <Input style="width: 100px" />
                  <span class="subtitles"> VLAN ID </span>
                  <Input style="width: 100px" />
                  <Icon type="ios-add-circle-outline" v-if="item.status==1" style="font-size: 28px;cursor: pointer" @click="handleAdd"/>
                  <div v-if="item.status==2"  @click="handleRemove(index)" style="cursor: pointer;width: 24px;height: 24px;line-height:24px;text-align: center;border-radius: 50%;border: 1px solid gray;display: inline-block;vertical-align: middle;margin-left: 3px">-</div>
              </FormItem>
              <FormItem label="LAN IP"
                        v-for="(item, index) in formDynamic1.items"
                        :key="item.index"
                        v-if="item.status">
                <Select v-model="LANIP" style="width:100px">
                  <Option v-for="item in LANIPData" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Input v-if="LANIP == 'Static'" placeholder="Ip Address" class="mr-20 w104"></Input>
                <span class="subtitles"> PORT </span>
                <Input style="width: 100px" />
                <span class="subtitles"> VLAN ID </span>
                <Input style="width: 100px" />
                <Icon type="ios-add-circle-outline" v-if="item.status==3" style="font-size: 28px;cursor: pointer" @click="handleAdd1"/>
                <div v-if="item.status==4"  @click="handleRemove1(index)" style="cursor: pointer;width: 24px;height: 24px;line-height:24px;text-align: center;border-radius: 50%;border: 1px solid gray;display: inline-block;vertical-align: middle;margin-left: 3px">-</div>
              </FormItem>
              <FormItem label="SUB-NET"
                        v-for="(item, index) in formDynamic2.items"
                        :key="item.index"
                        v-if="item.status">

                <Input style="width: 420px" />
                <Icon type="ios-add-circle-outline" v-if="item.status==5" style="font-size: 28px;cursor: pointer" @click="handleAdd2"/>
                <div v-if="item.status==6"  @click="handleRemove2(index)" style="cursor: pointer;width: 24px;height: 24px;line-height:24px;text-align: center;border-radius: 50%;border: 1px solid gray;display: inline-block;vertical-align: middle;margin-left: 3px">-</div>
              </FormItem>
              <FormItem style="position:absolute;right: 15px;top: 15px;">
                <Button type="success" @click="Save">Save</Button>
                <Button style="margin-left: 8px" @click="Cancel">Cancel</Button>
              </FormItem>
            </Form>
          </template>
        </div>
        <div>
          <Collapse v-model="value1">
            <Panel :name='index+1+""' v-for="(data,index) in CollapseData" :key="index">
              <span>{{data.title}}</span>
              <p slot="content">
              <ul class="list">
                <li>
                  <span>*</span>
                  <span>Site Address</span>
                </li>
                <li style="width:300px;">
                  <span>{{data.SiteAddress}}</span>
                </li>
                <li style="position:absolute;right: -30px;top: 0px;">
                  <Button style="background: #8ea2b5;color: #fff;border: none">Edit</Button>
                  <Button style="background: #ff8844;color: #fff;border: none;" @click="Delete(data,index)">Delete</Button>
                </li>
              </ul>
              <ul class="list">
                <li>
                  <span>*</span>
                  <span>Topology Role</span>
                </li>
                <li style="width:300px;">
                  <span>{{data.TopologyRole}}</span>
                </li>
              </ul>
              <ul class="list">
                <li>
                  <span>*</span>
                  <span>SD-WAN Bandwidth</span>
                </li>
                <li style="width:300px;">
                  <span>{{data.SDWANBandwidth}}</span>
                </li>
              </ul>
              <ul class="list">
                <li>
                  <span>*</span>
                  <span>Access Type</span>
                </li>
                <li style="width:300px;">
                  <span>{{data.AccessType}}</span>
                </li>
              </ul>
              </p>
            </Panel>
          </Collapse>
        </div>
        <div class="next">
          <span @click="firstJump">Next</span>
          <Icon type="md-arrow-round-forward"/>
        </div>
      </div>
      <div class="mainContent2" v-if="display.second">
        <template>
          <Collapse v-model="value3">
            <Panel name="1">
              <input type="checkbox" value="是我" checked>
              <span style="font-size: 14px;font-weight: 700;width: 190px;">10Mbps Monthly Rental Fee </span>
              <span style="display: inline-block;margin-left: 40px;font-size: 16px">500HKD/Month</span>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Bandwidth </span>
                <span class="word">10Mbps </span>
              </p>

              <p slot="content">
                <span class="word" style="margin-right: 30px">Desciption </span>
                <span class="word">SD-WAN Standard Fee</span>
              </p>
            </Panel>
            <Panel name="2">
              <input type="checkbox" value="是我">
              <span style="font-size: 14px;font-weight: 700;width: 190px;">10Mbps Yearly Rental Fee </span>
              <span style="display: inline-block;margin-left: 40px;font-size: 16px">5000HKD/Year</span>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Bandwidth </span>
                <span class="word">10Mbps </span>
              </p>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Desciption </span>
                <span class="word">SD-WAN Standard Fee</span>
              </p>
            </Panel>
            <Panel name="3">
              <input type="checkbox" value="是我">
              <span style="font-size: 14px;font-weight: 700;width: 190px;">100Mbps Yearly Rental Fee </span>
              <span style="display: inline-block;margin-left: 40px;font-size: 16px">2500HKD/Year</span>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Bandwidth </span>
                <span class="word">100Mbps </span>
              </p>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Desciption </span>
                <span class="word">SD-WAN Standard Fee</span>
              </p>
            </Panel>
            <Panel name="4">
              <input type="checkbox" value="是我">
              <span style="font-size: 14px;font-weight: 700;width: 190px;">100Mbps Yearly Rental Fee </span>
              <span style="display: inline-block;margin-left: 40px;font-size: 16px">25000HKD/Year</span>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Bandwidth </span>
                <span class="word">100Mbps </span>
              </p>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Desciption </span>
                <span class="word">SD-WAN Standard Fee</span>
              </p>
            </Panel>
            <Panel name="5">
              <input type="checkbox" value="是我" checked>
              <span style="font-size: 14px;font-weight: 700;width: 190px;">CPE-M Device Fee </span>
              <span style="display: inline-block;margin-left: 40px;font-size: 16px">200HKD/Month</span>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Desciption </span>
                <span class="word">SD-WAN Standard Fee</span>
              </p>
            </Panel>
            <Panel name="6">
              <input type="checkbox" value="是我" checked>
              <span style="font-size: 14px;font-weight: 700;width: 190px;">License Fee </span>
              <span style="display: inline-block;margin-left: 40px;font-size: 16px">100HKD/Month</span>
              <p slot="content">
                <span class="word" style="margin-right: 30px">Desciption </span>
                <span class="word">SD-WAN Standard Fee</span>
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
              <span class="secondSpan">5 Months</span>
            </li>
            <li>
              <span class="firstSpan">Topology</span>
              <span class="secondSpan">Full-mesh</span>
            </li>
          </ul>
          <h4>Site</h4>
          <Collapse v-model="value2" >
            <Panel name= '1'>
              Site3-Meihui Building,Guangzhou
              <p slot="content">
              <ul class="list">
                <li>
                  <span>Site Address</span>
                </li>
                <li>
                  <span>Meihui Building,Guangzhou</span>
                </li>

              </ul>
              <ul class="list">
                <li>
                  <span>Topology Role</span>
                </li>
                <li>
                  <span>Any to Any</span>
                </li>
              </ul>
              <ul class="list">
                <li>
                  <span>SD-WAN Bandwidth</span>
                </li>
                <li>
                  <span>10Mbps</span>
                </li>
              </ul>
              <ul class="list">
                <li>
                  <span>Access Type</span>
                </li>
                <li>
                  <span>Internet,MPLS-VPN,4G</span>
                </li>
              </ul>
              </p>
            </Panel>
            <Panel name= '2'>
              Site2-Jinyu Building，Shanghai
              <p slot="content">
              <ul class="list">
                <li>
                  <span>Site Address</span>
                </li>
                <li>
                  <span>Jinyu Building, Shanghai</span>
                </li>

              </ul>
              <ul class="list">
                <li>
                  <span>Topology Role</span>
                </li>
                <li>
                  <span>Any to Any</span>
                </li>
              </ul>
              <ul class="list">
                <li>
                  <span>SD-WAN Bandwidth</span>
                </li>
                <li>
                  <span>10Mbps</span>
                </li>
              </ul>
              <ul class="list">
                <li>
                  <span>Access Type</span>
                </li>
                <li>
                  <span>Internet,MPLS0-VPN,4G</span>
                </li>
              </ul>
              </p>
            </Panel>
            <Panel name= '3'>
              Site1-Dacheng Building, Beijing
              <p slot="content">
              <ul class="list">
                <li>
                  <span>Site Address</span>
                </li>
                <li>
                  <span>Dacheng Building, Beijing</span>
                </li>

              </ul>
              <ul class="list">
                <li>
                  <span>Topology Role</span>
                </li>
                <li>
                  <span>Any to Any</span>
                </li>
              </ul>
              <ul class="list">
                <li>
                  <span>SD-WAN Bandwidth</span>
                </li>
                <li>
                  <span>10Mbps</span>
                </li>
              </ul>
              <ul class="list">
                <li>
                  <span>Access Type</span>
                </li>
                <li>
                  <span>Internet,MPLS0-VPN,4G</span>
                </li>
              </ul>
              </p>
            </Panel>
          </Collapse>
          <h4 style="margin-top: 20px">Fee Info</h4>
          <Table :columns="columns1" :data="data1" style="margin-bottom: 60px"></Table>
          <div style="text-align: center">
            <Button type="primary" style="font-size: 14px;margin-bottom: 60px" @click="thirdJump">Confirm</Button>
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
        <h6 style="text-align: center;font-size: 14px">5s later this page will redirect to the <span style="color: #4486fa;cursor: pointer" @click="jumpPage">order info page</span>automatically.Or you can press the hyperlink right now</h6>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  #businessOrderSDW{
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
        width: 1120px;
        margin: 0 auto;
        margin-left: 0;
        .word{
          display: inline-block;
          width: 120px;
          text-align: right;
          font-size: 14px;
          color: gray;
        }
        .create{
          padding-bottom: 20px;
          h6{
            display: inline-block;
            font-weight: 700;
            font-size: 16px;
            vertical-align: middle;
            margin-right: 10px;
          }
          button{
            font-size: 12px;
          }
        }
        .createData{
          padding: 20px;
          background-color: #f9fafd;
          position: relative;
          .subtitles{
            font-size: 14px;
            display: inline-block;
            margin:0 5px 0 10px;
            color: #8390a4;
          }
          .ivu-form-item-label{
            font-size: 14px;
            color: #8390a4;
          }
          .ivu-form-item-content{
            margin-left: 100px !important;
          }
        }
        .ivu-collapse-header{
          background-color: #f6f9fe;
        }
        .ivu-collapse-item{
          font-size: 14px;
        }
        .ivu-form-item{
          margin-left: 48px;
        }
        .ivu-form-item-content{
          margin-bottom: 20px;

          .ivu-form-item-content{
            margin-left: 0px !important;
          }
        }
        .ivu-collapse-content-box{
          padding: 1px 0;
        }
        .list{
          margin: 25px 0;
          position: relative;
          li{
            font-size: 14px;
            color: #8390a4;
            display: inline-block;
            width: 160px;

          }
          li:nth-child(1){
            text-align: right;
            button{

            }
            span{
              display: inline-block;
            }
            span:nth-child(1){
              color: red;
              vertical-align: middle;
            }
            span:nth-child(2){
              margin-right: 20px;
            }
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
          button{
            width: 40px;
          }
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
        .ivu-collapse-header{
          background-color: #f6f9fe;
        }
        .ivu-collapse-item{
          font-size: 14px;
        }
        .list{
          margin: 25px 0;
          position: relative;
          li{
            font-size: 14px;
            color: #8390a4;
            display: inline-block;
          }
          li:nth-child(1){
            width: 130px;
            margin-right: 20px;
            text-align: right;
          }

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
        Topology: [
          {
            value: 'Please Select Type',
            label: 'Please Select Type'
          },
          {
            value: 'Full-mesh',
            label: 'Full-mesh',
          },
          {
            value: 'Hub-spoke',
            label: 'Hub-spoke',
          },
          {
            value: 'Other',
            label: 'Other',
          },
        ],
        WLANIPData: [
          {
            value: 'DHCP',
            label: 'DHCP',
          },
          {
            value: 'Static',
            label: 'Static',
          },
        ],
        LANIPData: [
          {
            value: 'DHCP',
            label: 'DHCP',
          },
          {
            value: 'Static',
            label: 'Static',
          },
        ],
        model1: 'Please Select Cycle',
        model2: 'Full-mesh',
        model3: '',
        LANIP: 'Static',
        WLANIP: 'DHCP',
        value:'',
        value1: '1',
        value2: '1',
        value3: '1',
        formDynamic: {
          items: [
            {
              index: 1,
              status:1
            }
          ]
        },
        formDynamic1: {
          items: [
            {
              index: 3,
              status:3
            }
          ]
        },
        formDynamic2: {
          items: [
            {
              index: 5,
              status:5
            }
          ]
        },
        index: 1,
        index1: 3,
        index2: 5,
        createData:false,
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
            align:'center',
            width:200
          },
          {
            title: 'Price with Tax',
            key: 'Price',
            align:'center'
          },
          {
            title: 'Subscription Cycle(Months)',
            key: 'SubscriptionCycle',
            align:'center',
            width:200
          },
          {
            title: 'Quantity',
            key: 'Quantity',
            align:'center'
          },
          {
            title: 'Tax(HKD)',
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
            Price: '500HKD/Month',
            SubscriptionCycle: '5',
            Quantity: '3',
            Tax: '750',
            Subtotal: '7500',
          },
          {
            FeeName: 'CPE-M Device Fee',
            Price: '200HKD/Month',
            SubscriptionCycle: '5',
            Quantity: '3',
            Tax: '300',
            Subtotal: '3000',
          },
          {
            FeeName: 'License Fee',
            Price: '100HKD/Month',
            SubscriptionCycle: '5',
            Quantity: '3',
            Tax: '150',
            Subtotal: '1500',
          },

        ],
        formItem: {
          input: '',
          select: 'Please Select Role',
          select1: 'Please Select Bandwidth',
          checkbox: [],
        },
        formItemDataRole:[
          {
            value:'Please Select Role',
            label:'Please Select Role',
          },
          {
            value:'Any to Any',
            label:'Any to Any',
          },
          {
            value:'Hub',
            label:'Hub',
          },
          {
            value:'Spoke',
            label:'Spoke',
          },
          {
            value:'Other',
            label:'Other',
          },
        ],
        formItemDataBandwidth:[
          {
            value:'Please Select Bandwidth',
            label:'Please Select Bandwidth',
          },
          {
            value:'10Mbps',
            label:'10Mbps',
          },
          {
            value:'100Mbps',
            label:'100Mbps',
          }
        ],
        ruleValidate: {
          name: [
            { required: true, message: 'The name cannot be empty',trigger: 'blur' }
          ],
        },
        CollapseData: [],
        CollapseData2: [
          {
            "title":"Site3-Meihui Building，Guangzhou",
            "SiteAddress":"Meihui Building，Guangzhou",
            "TopologyRole":" Any to Any",
            "SDWANBandwidth":" 10Mpbs",
            "AccessType":"Internet,MPLS-VPN,4G",
          },{
          "title":"Site2-Jinyu Building，Shanghai",
          "SiteAddress":"Jinyu Building，Shanghai",
          "TopologyRole":" Any to Any",
          "SDWANBandwidth":" 10Mpbs",
          "AccessType":"Internet,MPLS-VPN,4G",
        },{
            "title":"Site1-Dacheng Building，Beijing",
            "SiteAddress":"Dacheng Building，Beijing",
            "TopologyRole":" Any to Any",
            "SDWANBandwidth":" 10Mpbs",
            "AccessType":"Internet,MPLS-VPN,4G",
        }],
        title:''
      }
    },
    mounted(){
        this.title=this.$route.query.name;
    },
    methods:{
      handleAdd () {
        this.index++;
        this.formDynamic.items.push({
          value: '',
          index: this.index,
          status:2
        });
      },
      handleAdd1 () {
        this.index1++;
        this.formDynamic1.items.push({
          value: '',
          index: this.index1,
          status:4
        });
      },
      handleAdd2 () {
        this.index2++;
        this.formDynamic2.items.push({
          value: '',
          index: this.index2,
          status:6
        });
      },
      handleRemove (index) {
        this.formDynamic.items[index].status = 0;
      },
      handleRemove1 (index) {
        this.formDynamic1.items[index].status = 0;
      },
      handleRemove2 (index) {
        this.formDynamic2.items[index].status = 0;
      },
      firstJump(){
        scrollTo(0,0);
        this.display.first = false;
        this.display.second = true;
        this.current++
      },
      secondBack(){
        scrollTo(0,0);
        this.display.first = true;
        this.display.second = false;
        this.current--
      },
      secondJump(){
        scrollTo(0,0);
        this.display.second = false;
        this.display.third = true;
        this.current++
      },
      thirdJump(){
        scrollTo(0,0);
        this.display.third = false;
        this.display.fourth = true;
        this.current++
      },
      jumpPage(){
        let userName = window.sessionStorage.getItem('user')
        let headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
        this.$http.post('/productOrder/orderSubmit?type=1&productId='+this.$route.query.title+'&userName='+userName,headers).then(res=>{
          this.$router.push({
            path:'/page/order/orderDetailsSDW',
            query:{
              Subscription:res.data.subscriptionNo
            }
          });
        }).catch(error=>{

        })
      },
      createDisplay(){
        this.createData = true
      },
      Save(){
        this.createData = false;
        this.CollapseData2.length && this.CollapseData.unshift(this.CollapseData2.pop());
      },
      Cancel(){
        this.createData = false
      },
      Delete(data,index){
        const r = this.CollapseData[index];
        this.CollapseData.splice(index,1);
        this.CollapseData2.push(r);
      },
      goToProductPage(){
        window.open(window.location.origin+window.location.pathname+'#/page/product/ProductPage?title='+'Elastic Compute Service');
      }
    }
  }
</script>



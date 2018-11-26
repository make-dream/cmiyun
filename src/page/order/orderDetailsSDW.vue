<template>
  <div id="orderDetailsSDW">
    <h5>Accounts > My Subscription > Subscription info</h5>
    <div class="content">
      <div class="contactUS">
        <ul>
          <li>
            <span class="first" style="margin-bottom: 50px;">Status</span>
            <span class="second">{{this.data.status}}</span>
            <span class="suffix">(Update Time: {{this.data.createTime}})</span>
            <Button style="background: #ff9102;border: 1px solid #ff9102;color: #fff;float:right;">Contact Us</Button>
          </li>
          <li style="margin-bottom: 30px">
            <span class="first">Total/Tax</span>
            <span class="second">12000HKD/5Months,1200HKD</span>
          </li>
        </ul>
      </div>
      <h4>Basic Info</h4>
      <div class="info">
        <ul>
          <li>
            <span class="first" style="margin-bottom: 30px;">Subscription No</span>
            <span class="second">{{this.data.Subscription}}</span>
          </li>
          <li style="margin-bottom: 30px">
            <span class="first">Create Time</span>
            <span class="second">{{this.data.createTime}}</span>
          </li>
          <li style="margin-bottom: 30px">
            <span class="first">Effective Time</span>
            <span class="second"></span>
          </li>
          <li style="margin-bottom: 30px;">
            <span class="first">Product Name</span>
            <span class="second">{{this.data.productName}}</span>
          </li>
        </ul>
      </div>
      <h4>Configuration Info</h4>
      <div class="info">
        <ul>
          <li>
            <span class="first" style="margin-bottom: 30px;">Subscription Cycle</span>
            <span class="second">5 Months</span>
          </li>
          <li style="margin-bottom: 30px">
            <span class="first">Topology</span>
            <span class="second">Full-mesh</span>
          </li>
        </ul>
      </div>
      <div class="collapse">
        <template>
          <Collapse v-model="value1">
            <Panel name="1">
              <span style="font-size: 14px;font-weight: 700;width: 190px;">Site1-Dacheng Building，Beijing</span>
              <p slot="content">
                <strong class="word" style="margin-right: 30px">Site Address </strong>
                <span>DaCheng Building, Beijing </span>
              </p>
              <p slot="content">
                <strong class="word" style="margin-right: 30px">Topology Role </strong>
                <span >Any to Any </span>
              </p>
              <p slot="content">
                <strong class="word" style="margin-right: 30px">SD-WAN Bandwidth </strong>
                <span >10Mbps </span>
              </p>
              <p slot="content">
                <strong class="word" style="margin-right: 30px">Access Type </strong>
                <span>Internet,MPLS-VPN,4G </span>
              </p>
            </Panel>
            <Panel name="2">
              <span style="font-size: 14px;font-weight: 700;width: 190px;">Site2-Jinyu Building，Shanghai</span>
              <p slot="content">
                <strong class="word" style="margin-right: 30px">Site Address </strong>
                <span>Jinyu Building，Shanghai</span>
              </p>
              <p slot="content">
                <strong class="word" style="margin-right: 30px">Topology Role </strong>
                <span >Any to Any </span>
              </p>
              <p slot="content">
                <strong class="word" style="margin-right: 30px">SD-WAN Bandwidth </strong>
                <span >10Mbps </span>
              </p>
              <p slot="content">
                <strong class="word" style="margin-right: 30px">Access Type </strong>
                <span>Internet,MPLS-VPN,4G </span>
              </p>
            </Panel>
            <Panel name="3">
              <span style="font-size: 14px;font-weight: 700;width: 190px;">Site3-Meihui Building，Guangzhou</span>
              <p slot="content">
                <strong class="word" style="margin-right: 30px">Site Address </strong>
                <span>Meihui Building，Guangzhou</span>
              </p>
              <p slot="content">
                <strong class="word" style="margin-right: 30px">Topology Role </strong>
                <span >Any to Any </span>
              </p>
              <p slot="content">
                <strong class="word" style="margin-right: 30px">SD-WAN Bandwidth </strong>
                <span >10Mbps </span>
              </p>
              <p slot="content">
                <strong class="word" style="margin-right: 30px">Access Type </strong>
                <span>Internet,MPLS-VPN,4G </span>
              </p>
            </Panel>

          </Collapse>
        </template>
      </div>
      <h4>Fee Info</h4>
      <Table :columns="FeeInfo" :data="FeeInfoData" style="margin-bottom: 50px"></Table>
      <h4>Configuration Order</h4>
      <Table :columns="OrderInfo" :data="OrderInfoData"></Table>
    </div>
  </div>
</template>

<style lang="less">
  #orderDetailsSDW{
    width: 1200px;
    margin: 20px auto;
    .ivu-table-column-center{
      row-span: 2 !important;
    }
    h5{
      font-size: 14px;
      color: #919daf;
      font-weight: 400;
      margin-bottom: 10px;
    }
    h4{
      font-size: 18px;
      color: #8390a4;
      margin:40px 0 30px 10px;
      font-weight: 400;
    }
    .content{
      background: #fff;
      padding: 30px 40px;
      .contactUS{
        border-bottom: 2px solid #eceff9;
        li{
          position: relative;
          span{
            display: inline-block;
          }
          .first{
            font-size: 18px;
            width: 60px;
            color: #8390a4;
            font-weight: 400;
            text-align: right;
          }
          .second{
            margin-left: 30px;
            font-size: 18px;
            font-weight: 400;
          }
          .suffix{
            font-size: 16px;
            color: #cbd3e0;
            display: inline-block;
            margin-left: 5px;
          }
        }
      }
      .info{
        li{
          position: relative;
          width: 600px;
          span{
            display: inline-block;
          }
          .first{
            font-size: 14px;
            width: 150px;
            color: #8390a4;
            font-weight: 400;
            text-align: right;
          }
          .second{
            margin-left: 30px;
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
      .collapse{
        .ivu-collapse-header{
          background-color: rgb(209,236,247);
        }
        p{
          margin-bottom: 10px;
          font-size: 14px;
        }
        .word{
          display: inline-block;
          width: 135px;
          text-align: right;
        }
      }
      th{
        background: #f6f7fb;
      }
    }
  }
</style>

<script>
  export default {
    data(){
      return{
        FeeInfo: [
          {
            title: 'Fee Name',
            key: 'FeeName',
            align:'center',
            width:190
          },
          {
            title: 'Price with Tax',
            key: 'Price',
            align:'center',
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
            align:'center',
          },
          {
            title: 'Tax（HKD）',
            key: 'tax',
            align:'center',
          },
          {
            title: 'Subtotal(HKD)',
            key: 'Subtotal',
            align:'center',
          }
        ],
        FeeInfoData: [
          {
            FeeName: '10Mbps Monthly Rental Fee',
            Price: '500HKD/Month',
            SubscriptionCycle: '5',
            Quantity: '3',
            tax: '750',
            Subtotal: '7500',
          },
          {
            FeeName: 'CPE-M Device Fee',
            Price: '200HKD/Month',
            SubscriptionCycle: '5',
            Quantity: '3',
            tax: '300',
            Subtotal: '3000',
          },
          {
            FeeName: 'License Fee',
            Price: '100HKD/Month',
            SubscriptionCycle: '5',
            Quantity: '3',
            tax: '150',
            Subtotal: '1500',
          },
        ],
        OrderInfo: [
          {
            title: 'Config NO.',
            key: 'configNo',
            align:'center',
          },
          {
            title: 'Service',
            key: 'service',
            align:'center',
          },
          {
            title: 'Operation',
            key: 'operation',
            align:'center',
          },
          {
            title: 'Update Time',
            key: 'updateTime',
            align:'center',
          },
          {
            title: 'Status',
            key: 'status',
            align:'center',
          }
        ],
        OrderInfoData: [],
        name:'',
        times:'',
        productName:'',
        Status:'',
        value1:'1',
        data:{
          createTime:'',
          bandwidth:'',
          updateTime:'',
          Subscription:'',
          effectiveTime:'',
          status:'',
          productName:'',
        }
      }
    },
    created(){
      this.names = this.$route.query.Subscription;
      this.times = this.$route.query.CreateTime;
      this.productName = this.$route.query.ProductName;
      this.Status = this.$route.query.Status;

      let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      let arr = this.names.toString()
      this.$http.post('/productOrder/orderDetail?subscriptionNo='+arr,headers).then(res=>{
        this.data.createTime = res.data.createTime;
        this.data.bandwidth = res.data.bandwidth;
        this.data.updateTime = res.data.updateTime;
        this.data.Subscription = res.data.subscriptionNo;
        this.data.effectiveTime = res.data.effectiveTime;
        this.data.productName = res.data.productName;
        this.data.status = res.data.status;
        if(res.data.status == 0){
          status = 'Inquiry'
        }else if(res.data.status == 1){
         status = 'Pending Confirm'
        }else if(res.data.status == 2){
          status = 'Pending Config'
        }else if(res.data.status == 3){
          status = 'Successful'
        }
        this.data.status = status;
      });
      this.$http.post('/productOrder/getConfigByOrder?subscriptionNo='+arr+'&type=1',headers).then(res=>{
        this.OrderInfoData = res.data
        res.data.map((res,index)=>{
          if(res.status == 0){
            status = 'Inquiry'
          }else if(res.status == 1){
            status = 'Pending Confirm'
          }else if(res.status == 2){
            status = 'Pending Config'
          }else if(res.status == 3){
            status = 'Config Successful'
          }else if(res.status == 4){
            status = 'Pending Deliver'
          }
          this.OrderInfoData[index].status = status;
        })
      })

    }
  }
</script>


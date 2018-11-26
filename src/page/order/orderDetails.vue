<template>
    <div id="orderDetails">
      <h5>Accounts > My Orders > Order Info</h5>
      <div class="content">
        <div class="contactUS">
          <ul>
            <li>
              <span class="first" style="margin-bottom: 50px;">Status</span>
              <span class="second">{{this.status}}</span>
              <span class="suffix">(Update Time: {{this.data.updateTime}})</span>
              <Button style="background: #ff9102;border: 1px solid #ff9102;color: #fff;float:right;">Contact Us</Button>
            </li>
            <li style="margin-bottom: 30px">
              <span class="first">Total/Tax</span>
              <span class="second">7000HKD/7Months,700HKD</span>
            </li>
          </ul>
        </div>
        <h4>Basic Info</h4>
        <div class="info">
          <ul>
            <li>
              <span class="first" style="margin-bottom: 30px;">Subscription No.</span>
              <span class="second">{{this.names}}</span>
            </li>

            <li style="margin-bottom: 30px">
              <span class="first">Create Time</span>
              <span class="second">{{this.data.createTime}}</span>
            </li>
            <li style="margin-bottom: 30px">
              <span class="first">Effective Time</span>
              <span class="second">{{this.data.updateTime}}</span>
            </li>
            <li style="margin-bottom: 30px">
              <span class="first">Product Name</span>
              <span class="second">Cloud Connect Basic</span>
            </li>
          </ul>
        </div>
        <h4>Subscription Info</h4>
        <div class="info">
          <ul>
            <li>
              <span class="first" style="margin-bottom: 30px;">Subscription Cycle</span>
              <span class="second">7 Months</span>
            </li>
            <li style="margin-bottom: 30px">
              <span class="first">Bandwidth</span>
              <span class="second">{{this.data.bandwidth}}</span>
            </li>
            <li style="margin-bottom: 30px">
              <span class="first">Connection Point</span>
              <div v-for="data in connectionPoint" style="display: inline-block">
                <span class="second">{{data.connectSide}}</span>
                <span class="second" style="margin-left: 10px">{{data.accountId}}</span>
              </div>
            </li>
          </ul>
        </div>
        <h4>Fee Info</h4>
        <Table :columns="FeeInfo" :data="FeeInfoData" style="margin-bottom: 50px"></Table>
        <h4>Configuration Order</h4>
        <Table :columns="OrderInfo" :data="OrderInfoData"></Table>
      </div>
    </div>
</template>

<style lang="less">
  #orderDetails{
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
            vertical-align: top;
          }
          .second{
            margin-left: 30px;
            font-size: 14px;
            font-weight: 400;
            vertical-align: top;
          }
          div:nth-child(3){
            display: block !important;
            margin-left: 153px;

          }
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
            },
            {
              title: 'Price with Tax',
              key: 'Price',
              align:'center',
            },
            {
              title: 'Subscription Cycle',
              key: 'SubscriptionCycle',
              align:'center',
            },
            {
              title: 'Quantity',
              key: 'Quantity',
              align:'center',
            },
            {
              title: 'Tax(HKD)',
              key: 'Tax',
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
              FeeName: '10Mbps Monthly Reatal Fee',
              Price: '1000HKD/Month',
              SubscriptionCycle: '7',
              Quantity: '1',
              Tax:'700',
              Subtotal: '7000',
            },
          ],
          OrderInfo: [
            {
              title: 'Config NO',
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
          OrderInfoData: [
            {
              WONo: '1120181101110058',
              service: 'Cloud Connect Service',
              Operation: 'Open',
              UpdateTime: '2018/11/1 10:01:03',
              Status: 'Pending Config',
            },
          ],
          names:'',
          times:'',
          data:{
            createTime:'',
            bandwidth:'',
            updateTime:'',
          },
          connectionPoint:''
        }
      },
      created(){
        this.names = this.$route.query.Subscription;
        this.times = this.$route.query.CreateTime;
        this.status = this.$route.query.Status;
        let load=this.$route.query.load;
        if(load=='-2'){
          this.FeeInfo=[
            {
              title: 'Fee Name',
              key: 'FeeName',
              align:'center',
            },
            {
              title: 'Price with Tax',
              key: 'Price',
              align:'center',
            },
            {
              title: 'Subscription Cycle',
              key: 'SubscriptionCycle',
              align:'center',
            },
            {
              title: 'Quantity',
              key: 'Quantity',
              align:'center',
            },
            {
              title: 'Tax(HKD)',
              key: 'tax',
              align:'center',
            },
            {
              title: 'Subtotal(HKD)',
              key: 'Subtotal',
              align:'center',
            },
            {
              title: 'Operation',
              key: 'Operation',
              align:'center',
            }
          ]
            this.FeeInfoData=[
            {
              FeeName: 'Monthly Reatal Fee',
              Price: '1000HKD/Month',
              SubscriptionCycle: '7',
              Quantity: '1',
              tax: '700',
              Subtotal: '7000',
              Operation:'Cancel'
            },
          ]
        }
        let headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
        let arr = this.names.toString()
        this.$http.post('/productOrder/orderDetail?subscriptionNo='+arr,headers).then(res=>{
          this.data.createTime = res.data.createTime;
          this.data.bandwidth = res.data.bandwidth;
          this.data.ifClient = res.data.ifClient;
          if(res.data.status == 0){
            this.status = 'Inquiry'
          }else if(res.data.status == 1){
            this.status = 'Pending Confirm'
          }else if(res.data.status == 2){
            this.status = 'Pending Config'
          }else if(res.data.status == 3){
            this.status = 'Successful';
            this.data.updateTime = res.data.updateTime;
          }else if(res.status == -1){
            status = 'Canceled'
          }
          this.connectionPoint = res.data.connectionPointList
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
            }else if(res.status == -1){
              status = 'Canceled'
            }
            this.OrderInfoData[index].status = status;
          })
        })
      }
    }
</script>


<template>
  <div id="orderManagement">
    <div class="content">
      <h5>My Orders</h5>
      <div class="table">
        <div class="table_top">
          <span class="font"> Create Time </span>
          <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 234px"></DatePicker>
        </div>
        <div class="table_top">
          <span class="font"> Status </span>
          <Select v-model="model" style="width:207px">
            <Option v-for="item in status" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="table_top">
          <span class="font"> Product Name </span>
          <Input v-model="search" style="width: 230px" />
        </div>
        <button class="button1" @click="search1">Search</button>
        <div class="table_content">
          <Table :columns="columns1" :data="historyData" width="1115px" style="margin-top: 20px" no-data-text="no data"></Table>
          <Page size="small" :total='pages()':page-size='pageSize' @on-change="changePage"	/>
        </div>
        <div v-if="alert" class="alert">
          <p>
            <Icon type="md-close"  style="cursor: pointer " @click="cancel"/>
          </p>
          <h6>Are you sure to cancel this order？</h6>
          <Button type="primary" @click="confirm">Confirm</Button>
          <Button @click="cancel">Cancel</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  #orderManagement{
    .content{
      width: 1200px;
      margin: 20px auto;
      h5{
        font-size: 14px;
        color: #919daf;
        font-weight: 400;
        margin-bottom: 10px;
      }
      .table{
        padding: 30px 40px 100px 40px;
        background: #fff;
        border: 1px solid #e2e9f6;
        position: relative;
        .button1{
          height: 35px;
          line-height: 35px;
          font-size: 16px;
          width: 115px;
          color: #fff;
          background: #42a5f6;
          border-radius: 4px;
          cursor: pointer;
        }
        .table_top{
          display: inline-block;
          margin-right: 30px;
        }
        .font{
          font-size: 14px;
          font-weight: 700;
        }
        .table_content{
          font-weight: 700;

          .ivu-page{
            display: inline-block;
            float: right;
            margin-top: 10px;
          }
        }
        .alert{
          width: 350px;
          background-color: #fff;
          padding: 0 10px 50px 10px;
          position: absolute;
          top: 150px;
          left: 400px;
          z-index: 10;
          border: 1px solid rgb(210,210,210);
          border-radius: 6px;
          text-align: center;
          p{
            width: 100%;
            text-align: right;
            font-size: 26px;
            margin-bottom: 40px;
            border-bottom: 1px solid rgb(210,210,210);
          }
          h6{
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 20px;
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
        status: [
          {
            value: 'All',
            label: 'All'
          },
          {
            value: 'Inquiry',
            label: 'Inquiry'
          },
          {
            value: 'Pending Confirm',
            label: 'Pending Confirm'
          },
          {
            value: 'Refused',
            label: 'Refused'
          },
          {
            value: 'Pending Config',
            label: 'Pending Config'
          },
          {
            value: 'Successful',
            label: 'Successful'
          },
          {
            value: 'Failed',
            label: 'Failed'
          },
          {
            value: 'Canceled',
            label: 'Canceled'
          },
          {
            value: 'Pending Audit',
            label: 'Pending Audit'
          },

        ],
        columns1: [
          {
            title: 'Subscription NO.',
            key: 'subscriptionNo',
            align:'center'
          },
          {
            title: 'Product Name',
            key: 'productName',
            align:'center'
          },
          {
            title: 'Trade Type',
            key: 'tradeType',
            align:'center'
          },
          {
            title: 'Subscript Cycle (Month)',
            key: 'subscriptionCycle',
            align:'center',
            width:140
          },
          {
            title: 'Total(HKD)',
            key: 'totalHkd',
            align:'center',
          },
          {
            title: 'Create Time',
            key: 'createTime',
            align:'center'
          },
          {
            title: 'Status',
            key: 'status',
            align:'center'
          },
          {
            title: 'Operation',
            key: 'Operation',
            align:'center',
            render: (h, params) => {
              if(params.row.status == 'Pending Config' || params.row.status == 'Pending Confirm'){
                if(params.row.tradeType == 'Unsubscribe'){
                  return h('div',[
                    h('Button', {
                      props: {
                        type: 'text',
                        size: 'small'
                      },
                      style:{
                        'margin-right':'10px',
                        'color':'#42a5f6',
                        'font-size':'14px'
                      },
                      on: {
                        click: () => {
                          if(params.row.productName == 'SD-WAN'){
                            this.$router.push({
                              path:'/page/order/orderDetailsSDW',
                              query:{
                                Subscription:params.row.subscriptionNo,
                                ProductName:params.row.productName,
                                CreateTime	:params.row.createTime,
                                Status:params.row.status,
                              }
                            })
                          }else if(params.row.productName == 'Cloud Connect Basic' || params.row.productName == 'Cloud Connect' || params.row.productName == 'Cloud Connect1'){
                            this.$router.push({
                              path:'/page/order/orderDetails',
                              query:{
                                Subscription:params.row.subscriptionNo,
                                ProductName:params.row.productName,
                                Status:params.row.status,
                                CreateTime	:params.row.createTime,
                              }
                            })
                          }else {
                            if(params.row.status == 'Successful'){
                              this.$router.push({
                                path:'/page/order/OrdercustomDetail',
                                query:{
                                  Subscription:params.row.subscriptionNo,
                                  ProductName:params.row.productName,
                                  CreateTime	:params.row.createTime,
                                }
                              })
                            }else{
                              this.$router.push({
                                path:'/page/order/Ordercustom',
                                query:{
                                  Subscription:params.row.subscriptionNo,
                                  ProductName:params.row.productName,
                                  CreateTime	:params.row.createTime,
                                }
                              })
                            }
                          }
                        }
                      }
                    }, 'Detail'),
                  ])
                }else {
                  return h('div',[
                    h('Button', {
                      props: {
                        type: 'text',
                        size: 'small'
                      },
                      style:{
                        'margin-right':'10px',
                        'color':'#42a5f6',
                        'font-size':'14px'
                      },
                      on: {
                        click: () => {
                          if(params.row.type == 2){
                            // if(params.row.status == 'Successful'){
                            //   this.$router.push({
                            //     path:'/page/order/OrdercustomDetail',
                            //     query:{
                            //       Subscription:params.row.subscriptionNo,
                            //       ProductName:params.row.productName,
                            //       CreateTime	:params.row.createTime,
                            //     }
                            //   })
                            // }else{
                              this.$router.push({
                                path:'/page/order/Ordercustom',
                                query:{
                                  Subscription:params.row.subscriptionNo,
                                  ProductName:params.row.productName,
                                  CreateTime	:params.row.createTime,
                                }
                              })
                            // }
                          }else if(params.row.productName == 'SD-WAN'){
                            this.$router.push({
                              path:'/page/order/orderDetailsSDW',
                              query:{
                                Subscription:params.row.subscriptionNo,
                                ProductName:params.row.productName,
                                CreateTime	:params.row.createTime,
                                Status:params.row.status,
                              }
                            })
                          }else if(params.row.productName == 'Cloud Connect Basic'){
                            this.$router.push({
                              path:'/page/order/orderDetails',
                              query:{
                                Subscription:params.row.subscriptionNo,
                                ProductName:params.row.productName,
                                Status:params.row.status,
                                CreateTime	:params.row.createTime,
                              }
                            })
                          }else if(params.row.productName == 'Cloud Connect'){
                            this.$router.push({
                              path:'/page/order/orderDetails',
                              query:{
                                Subscription:params.row.subscriptionNo,
                                ProductName:params.row.productName,
                                Status:params.row.status,
                                CreateTime	:params.row.createTime,
                              }
                            })
                          }else if(params.row.productName == 'Cloud Connect1'){
                            this.$router.push({
                              path:'/page/order/orderDetails',
                              query:{
                                Subscription:params.row.subscriptionNo,
                                ProductName:params.row.productName,
                                Status:params.row.status,
                                CreateTime	:params.row.createTime,
                              }
                            })
                          }
                        }
                      }
                    }, 'Detail'),
                    h('Button', {
                      props: {
                        type: 'text',
                        size: 'small'
                      },
                      style:{
                        'margin-right':'10px',
                        'color':'#42a5f6',
                        'font-size':'14px'
                      },
                      on: {
                        click:()=>{
                          this.alert = true;
                          this.index = params.row.subscriptionNo
                        }
                      }
                    }, 'Cancel'),
                  ])
                }
              }else{
                return h('div',[
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    },
                    style:{
                      'margin-right':'10px',
                      'color':'#42a5f6',
                      'font-size':'14px'
                    },
                    on: {
                      click: () => {
                        if(params.row.productName == 'SD-WAN'){
                          this.$router.push({
                            path:'/page/order/orderDetailsSDW',
                            query:{
                              Subscription:params.row.subscriptionNo,
                              ProductName:params.row.productName,
                              CreateTime	:params.row.createTime,
                              Status:params.row.status,
                            }
                          })
                        }else if(params.row.productName == 'Cloud Connect Basic' || params.row.productName == 'Cloud Connect' || params.row.productName == 'Cloud Connect1'){
                          this.$router.push({
                            path:'/page/order/orderDetails',
                            query:{
                              Subscription:params.row.subscriptionNo,
                              ProductName:params.row.productName,
                              Status:params.row.status,
                              CreateTime	:params.row.createTime,
                            }
                          })
                        }else {
                          if(params.row.status == 'Successful'){
                            this.$router.push({
                              path:'/page/order/OrdercustomDetail',
                              query:{
                                Subscription:params.row.subscriptionNo,
                                ProductName:params.row.productName,
                                CreateTime	:params.row.createTime,
                              }
                            })
                          }else{
                            this.$router.push({
                              path:'/page/order/Ordercustom',
                              query:{
                                Subscription:params.row.subscriptionNo,
                                ProductName:params.row.productName,
                                CreateTime	:params.row.createTime,
                              }
                            })
                          }
                        }
                      }
                    }
                  }, 'Detail'),
                ])
              }
            }
          }
        ],
        data1:[],
        model: 'All',
        search:'',
        pageSize:50,
        HistoryDataEm:[],
        historyData:[],
        alert:false,
        index:''
      }
    },
    methods:{
      pages(){
        let leng = this.data1.length;
        return leng
      },
      changePage(index){
        let _start = ( index - 1 ) * this.pageSize;
        let _end = index * this.pageSize;
        this.historyData = this.HistoryDataEm.slice(_start,_end);
      },
      pageAction(){
        this.HistoryDataEm = this.data1;
        if(this.data1.length < this.pageSize){
          this.historyData = this.HistoryDataEm;
        }else{
          this.historyData = this.HistoryDataEm.slice(0,this.pageSize);
        }
      },
      search1(){
        let headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
        let that = this;
        let resouse = [];
        this.$http.post('/productOrder/orderList',headers).then(res=>{
          this.data1 = res.data;
          res.data.map((res,index)=>{
            if(res.status == 0){
              status = 'Inquiry'
              res.tradeType = 'Subscribe'
            }else if(res.status ==1){
              status = 'Pending Confirm'
              res.tradeType = 'Subscribe'
            }else if(res.status ==2){
              status = 'Pending Config'
              res.tradeType = 'Subscribe'
            }else if(res.status == 3){
              status = 'Successful'
              res.tradeType = 'Subscribe'
            }else if(res.status == -1){
              status = 'Canceled'
              res.tradeType = 'Unsubscribe'
            }
            this.data1[index].status = status;
          });
          if(that.search != '') {
            this.data1.map((item, index) => {
              if (item.productName == this.search) {
                resouse.push(item);
                this.data1 = resouse;

              }
            });
          }
          this.pageAction()
        })

      },
      cancel(){
        this.alert = false
      },

      confirm(){
        let headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
        this.$http.post('/productOrder/cancelOrder?subscriptionNo='+this.index,headers).then(res=>{
          window.location.reload();
          this.$router.push({
            path:'/page/order/orderManagement',
          })
        })
      }
    },
    mounted(){
      let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      this.$http.post('/productOrder/orderList',headers).then(res=>{
        this.data1 = res.data;
        res.data.map((res,index)=>{
          if(res.status == 0){
            status = 'Inquiry'
            res.tradeType = 'Subscribe'
          }else if(res.status ==1){
            status = 'Pending Confirm';
            res.tradeType = 'Subscribe'
          }else if(res.status ==2){
            status = 'Pending Config';
            res.tradeType = 'Subscribe'
          }else if(res.status == 3){
            status = 'Successful';
            res.tradeType = 'Subscribe'
          }else if(res.status == -1){
            status = 'Canceled';
            res.tradeType = 'Subscribe'
          }else if(res.status == -2){
            status = 'Pending Config';
            res.tradeType = 'Unsubscribe'
          }else if(res.status == -3){
            status = 'Invaild';
            res.tradeType = 'Subscribe'
          }else if(res.status == 6){
            status = 'Successful'
            res.tradeType ='Subscribe'
          }
          this.data1[index].status = status;
        });
        this.pageAction()
      })
        .catch(error=>{
        // this.data1 = [
        //   {
        //     subscriptionNo: '20181101100051',
        //     productName: 'Cloud  Connect Basic',
        //     subscriptionCycle: '7',
        //     totalHkd: '7500',
        //     status: 'Pending Config',
        //     createTime:'2017/11/01 23:59',
        //   },
        // ];
        // this.pageAction()
      })
    },
  }
</script>


<template>
  <div id="orderManagement">
    <div class="content">
      <h5>My Products</h5>
      <div class="table">
        <div class="table_top pull-right">
          <Input v-model="search" style="width: 230px" placeholder="Please Input Product Name" icon="ios-search" @click="search1"/>
        </div>
        <Button type="primary" class="mr-20" @click="create">Create</Button>
        <div class="table_content">
          <Table :columns="columns1" :data="historyData" width="1115px" style="margin-top: 20px" no-data-text="no data"></Table>
          <Page size="small" :total='pages()' :page-size='pageSize' />
          <div v-if="alert" class="alert">
              <p>
                <Icon type="md-close"  style="cursor: pointer " @click="cancel"/>
              </p>
            <Button @click="jumpPage1">Cloud Connect Basic</Button>
            <Button @click="jumpPage2">SD-WAN</Button>
            <Button @click="jumpPage3">Cloud Connect</Button>
            <Button style="margin-right: 0" @click="jumpPage4">Cloud Connect1</Button>
            <Button @click="jumpPage5">Cloud Connect2</Button>
            <Button @click="jumpPage6">Elastic Compute Service</Button>
          </div>
          <div v-if="alert2" class="alert2">
            <p>
              <Icon type="md-close"  style="cursor: pointer " @click="cancel2"/>
            </p>
            <h6 style="font-size: 14px;">Are you sure to Unsubscribe？</h6>
            <Button type="primary" @click="create2">Comfirm</Button>
            <Button @click="cancel2">Cancel</Button>

          </div>
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
        }
       /* .ivu-page-item-active{
          background: #42a5f6;
          border-radius: 50%;
          color: white;
          a{
            color: white;
          }
        }*/
        .font{
          font-size: 14px;
          font-weight: 700;
        }
        .table_content{
          font-weight: 700;
          position: relative;
          .alert{
            width: 705px;
            background-color: #fff;
            padding: 0 10px 50px 10px;
            position: absolute;
            top: 80px;
            left: 250px;
            z-index: 10;
            border: 1px solid rgb(210,210,210);
            border-radius: 6px;
            button{
              width: 160px;
              margin:0 10px 10px 0;
            }
            p{
              width: 100%;
              text-align: right;
              font-size: 30px;
              margin-bottom: 10px;
              border-bottom: 1px solid rgb(210,210,210);
            }
          }
          .alert2{
            width: 350px;
            background-color: #fff;
            padding: 0 10px 50px 10px;
            position: absolute;
            text-align: center;
            top: 80px;
            left: 380px;
            z-index: 10;
            border: 1px solid rgb(210,210,210);
            border-radius: 6px;
            h6{
              margin:30px 0 20px 0;
            }
            p{
              width: 100%;
              text-align: right;
              font-size: 30px;
              margin-bottom: 10px;
              border-bottom: 1px solid rgb(210,210,210);
            }
          }
        .ivu-page{
          display: inline-block;
          float: right;
          margin-top: 10px;

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
        columns1: [
          {
            title: 'Product Name',
            key: 'productName',
            align:'center'
          },
          {
            title: 'Fee Name',
            key: 'feeName',
            align:'center',
            width:200
          },
          {
            title: 'Effective Time',
            key: 'effectiveTime',
            align:'center',
          },
          {
            title: 'Expiry Time',
            key: 'expiryTime',
            align:'center',
          },
          {
            title: 'Status',
            key: 'status',
            align:'center'
          },
          {
            title: 'Service NO.',
            key: 'subscriptionNo',
            align:'center'
          },
          {
            title: 'Operation',
            key: 'operation',
            align:'center',
            width:220,
            render: (h, params) => {
              if(params.row.status == 'inservice'){
                if(params.row.load==6){
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
                          this.$router.push({
                            path:'/page/cloud/cloudMonitoring',
                            query: {
                              title: params.row.subscriptionNo,
                              productName:params.row.productName
                            }
                          })
                        }
                      }
                    }, 'Detail'),
                  ])
                }else{
              console.log(params.row)

                if(this.display == true){
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
                          this.$router.push({
                            path:'/page/cloud/cloudMonitoring',
                            query: {
                              title: params.row.subscriptionNo,
                              productName:params.row.productName
                            }
                          })
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
                        click: ()=> {
                            console.log(params.row)
                          this.alert2 = true;
                          this.inserviceData = params.row.subscriptionNo;
                        }
                      }
                    }, 'Unsubscribe'),
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
                          this.$router.push({
                            path:'/page/order/BusinessOrder',
                            query: {
                              title: params.row.subscriptionNo,
                              ifClient:params.row.ifClient
                            }
                          })
                        }
                      }
                    }, 'Change'),
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
                          this.$router.push({
                            path:'/page/cloud/cloudMonitoring',
                            query: {
                              title: params.row.subscriptionNo,
                              productName:params.row.productName
                            }
                          })
                        }
                      }
                    }, 'Detail'),
                  ])
                }

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
                        this.$router.push({
                          path:'/page/cloud/cloudMonitoring',
                          query: {
                            title: params.row.subscriptionNo,
                            productName:params.row.productName
                          }
                        })
                      }
                    }
                  }, 'Detail'),
                ])
              }
            }
          }
        ],
        data1:[],
        model: '',
        search:'',
        pageSize:50,
        HistoryDataEm:[],
        historyData:[],
        alert:false,
        alert2:false,
        buttonData1:'Cloud Connect Basic',
        buttonData2:'SD-WAN',
        buttonData3:'Cloud Connect',
        buttonData4:'Cloud Connect1',
        buttonData5:'Cloud Connect2',
        buttonData6:'Elastic Compute Service',
        display:false,
        detail:{}

      }
    },
    methods:{
      pages(){
        let leng = this.data1.length;
        return leng
      },
      cancel(){
        this.alert = false
      },
      cancel2(){
        this.alert2 = false
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
      create(){
        this.alert = true
      },
      create2(){
        this.$http.post('/productOrder/unsubscribeOrder?subscriptionNo=' + this.inserviceData).then(res=>{
          this.$router.push({
            path:'/page/order/orderDetails',
            query:{
              Subscription:res.data.subscriptionNo,
              Status:'Pending Config',
              load: -2,

            }
          })
        })
      },
      search1(){
        let headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
        this.$http.post('/productOrder/bookedBusiness?customerName='+log,headers).then(res=>{
          this.data1[index].status = status;
          this.data1 = res.data;
          this.data1.map(item=>{
              if(item.status == 3){
                item.status = 'inservice'
              }
          });
          if(this.search != ''){
            let arr = []
            this.data1.map(item=>{
              if(item.productName == this.search){
                arr.push(item);
                this.data1 = arr;
                this.pageAction()
              }
            })
          }
        })
      },
      jumpPage1(){
        this.$router.push({
          path:'/page/product/ProductPage',
          query:{
            title:this.buttonData1
          }
        })
      },
      jumpPage2(){
        this.$router.push({
          path:'/page/product/ProductPage',
          query:{
            title:this.buttonData2
          }
        })
      },
      jumpPage3(){
        this.$router.push({
          path:'/page/product/ProductPage',
          query:{
            title:this.buttonData3
          }
        })
      },
      jumpPage4(){
        this.$router.push({
          path:'/page/product/ProductPage',
          query:{
            title:this.buttonData4
          }
        })
      },
      jumpPage5(){
        this.$router.push({
          path:'/page/product/ProductPage',
          query:{
            title:this.buttonData5
          }
        })
      },
      jumpPage6(){
        this.$router.push({
          path:'/page/product/ProductPage',
          query:{
            title:this.buttonData6
          }
        })
      },

    },
    mounted(){
      let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      let log = window.sessionStorage.getItem('user');
        this.$http.post('/productOrder/bookedBusiness?customerName='+log,headers).then(res=>{
            var data=res.data;
          this.data1 = res.data;
          this.data1.map(item=>{
              if(item.status == 3 ){
                item.status = 'inservice'
                item.load=3;
              }else if(item.status == 6){
                item.status = 'inservice';
                item.load=6;
              }else if(item.status == -3){
                item.status = 'Invaild'
              }
          });
          this.pageAction()
        })
    },
  }
</script>


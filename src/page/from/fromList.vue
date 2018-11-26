<template>
    <div class="fromListPage">
        <div class="title">My Form</div>
        <div class="contant">
            <div class="top">
                <strong>All of 3 items </strong>
                <Select v-model="model3" style="width:140px;margin-left:12px;" placeholder="All Status">
                    <Option v-for="item in device" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Button type="primary" style="width:150px;height:32px;border-radius:5px;float:right" @click="creat">Ask for help</Button>
            </div>
            <Table :columns="columns1" :data="data1"></Table>
        </div>
      <Modal
        title="Form Information"
        v-model="modal"
        :mask-closable="false"
      >
        <p>ID:{{id}}</p>
        <p>Type:{{type}}</p>
        <div class="con">
          <Form>
            <FormItem label="Application Time" :label-width="120">
              {{time}}
            </FormItem>
            <FormItem label="Applicant" :label-width="120">
              {{Applicant}}
            </FormItem>
            <FormItem label="Enterprise" :label-width="120">
              {{Enterprise}}
            </FormItem>
            <FormItem label="Product Name" :label-width="120">
              {{Name}}
            </FormItem>
            <FormItem label="Status" :label-width="120">
              {{Status}}
            </FormItem>
            <FormItem label="Fee calculation" :label-width="120">
              {{Fee}}
            </FormItem>
          </Form>
        </div>
        <img class="status" src="../../assets/img/icon-status.png" alt="">
        <ul class="time clearfix">
          <li>2018.11.20 19:09:21</li>
          <li style="padding-left: 40px">2018.11.20 19:12:10</li>
          <li></li>
        </ul>
        <div slot="footer">
          <Button type="primary" size="large" @click="ok" style="display: block;margin:0 auto; ">Close</Button>
        </div>
      </Modal>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            model3:'',
            device:[{
                value:'All Status',
                label:'All Status'
            }],
            id:'',
            type:'',
            time:'',
            Applicant:'',
            Enterprise:'',
            Name:'',
            Status:'',
            Fee:'',
            columns1:[
                {
                    title:'Time',
                    key:'time',
                    align:'center'
                },{
                    title:'Type',
                    key:'Type',
                    align:'center'
                },
              // {
              //       title:'Detail',
              //       key:'Detail',
              //       align:'center',
              //       render: (h, params) => {
              //           return h('div', [
              //               h('Button', {
              //                   props: {
              //                       type: 'primary',
              //                       size: 'small'
              //                   },
              //                   style: {
              //                       backgroundColor:"#fff",
              //                       color:"#42a5f6",
              //                       border:'none'
              //                   },
              //                   on: {
              //                       click: () => {
              //                           this.show(params.row)
              //                       }
              //                   }
              //               }, 'View')
              //           ]);
              //       }
              //   },
                {
                    title:'Status',
                    key:'Status',
                    align:'center'
                },{
                    title:'Operation',
                    key:'Operation',
                    align:'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    backgroundColor:"#fff",
                                    color:"#42a5f6",
                                    border:'none'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.row,params.index)
                                    }
                                }
                            }, 'Detail')
                        ]);
                    }
                }
            ],
            data1:[
                {
                    time:'2018.11.20 19:09:21',
                    Type:'site down',
                    Status:'Done',
                    Applicant:'cmiuser',
                    Enterprise:'chinamobile',
                    ProductName:'SDN',
                    Feecalculation:'NONE',
                    ID: 20180101989131

                },{
                    time:'2018.11.20 13:21:39',
                    Type:'confirm enterprise information',
                    Status:'Done',
                    Applicant:'Jack',
                    Enterprise:'Tencent',
                    ProductName:'Cloud Connect Basic',
                    Feecalculation:'NONE',
                    ID: 20180101989132
                },{
                    time:'2018.11.19 15:13:09',
                    Type:'quota bandwidth ',
                    Status:'Done',
                    Applicant:'LUna',
                    Enterprise:'Tencent',
                    ProductName:'Cloud Connect',
                    Feecalculation:'NONE',
                    ID: 20180101989133
                }
                // ,{
                //     time:'2018.01.07 11:00',
                //     Type:'Enable Products',
                //     Status:'Processing',
                //     Applicant:'Nacy',
                //     Enterprise:'CMI',
                //     ProductName:'Cloud Connect1',
                //     Feecalculation:'NONE',
                //     ID: 20180101989134
                // },{
                //     time:'2018.01.09 12:00',
                //     Type:'Enable Products',
                //     Status:'Done',
                //     Applicant:'Blur',
                //     Enterprise:'Tencent',
                //     ProductName:'Cloud Connect2',
                //     Feecalculation:'NONE',
                //     ID: 20180101989135
                // },{
                //     time:'2018.01.10 12:30',
                //     Type:'confirm enterprise information',
                //     Status:'Done',
                //     Applicant:'Monk',
                //     Enterprise:'CMI',
                //     ProductName:'Elastic Compute Service',
                //     Feecalculation:'NONE',
                //     ID: 20180101989136
                // }
            ],
            modal:false
        }
    },
    methods: {
        creat(){
            this.$router.push('/from/CreatFromPage')
        },
        show(item,index){
          if(index===0){
            console.log(item)
            this.modal=true;
            this.id=item.ID;
            this.type=item.Type;
            this.time=item.time;
            this.Applicant=item.Applicant;
            this.Enterprise=item.Enterprise;
            this.Name=item.ProductName;
            this.Status=item.Status;
            this.Fee=item.Feecalculation;
          }
        },
        ok(){
          this.modal=false;
        }
    },
    components: {

    }
}
</script>

<style lang="less">
  .time{
    li{
      float: left;
      width: 31%;
    }
  }
  .ivu-btn-text{
    display: none;
  }
  .ivu-modal-body{
    p{
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
  .con{
    border: 1px solid #e2e9f6;
  }
  .ivu-form-item{
    margin-bottom: 0;
  }
  .ivu-modal-footer{
    border: none;
  }
  .status{
    display: block;
    margin: 0 auto;
  }
.fromListPage{
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    .title{
        color:#666;
        line-height: 56px;
        font-size: 14px;
        font-weight: 700;
    }
    .contant{
        width: 100%;
        padding: 20px 40px;
        border:1px solid #e2e9f6;
        .top{
            margin-bottom: 20px;
        }
    }

}
</style>

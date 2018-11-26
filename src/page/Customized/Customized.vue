<template>
  <div class="Customized">
    <div class="contant">
        <Breadcrumb separator=">">
            <BreadcrumbItem to="/">User</BreadcrumbItem>
            <BreadcrumbItem to="/components/Customized">Customized</BreadcrumbItem>
        </Breadcrumb>
        <div class="container">
            <div class="tabList">
                <p v-for="(item,index) in TabList" :key="index" @click="choice(index)" :class="{active:tabIndex==index}">{{item}}</p>
            </div>
            <div class="choicePriduct" v-show="display">
                <ul class="typeList">
                    <li @click="example(index,item)" v-for="(item,index) in typeList" :key=index :class="{active:tabIndex1==index||item.activity}">
                        <div class="classification">
                            <Button class="title">{{item.name}}</Button>
                            <Input :v-model="item.placeholder" :placeholder="item.placeholder" style="width: 275px;margin-top:25px;height:40px;margin-left:32px" />
                            <Select :v-model="item.kind" style="width: 275px;margin-top:25px;height:40px;margin-left:32px" :placeholder="item.placeholder1">
                                <Option v-for="item1 in item.kind" :value="item1.value" :key="item1.value">{{ item1.lable }}</Option>
                            </Select>
                            <Select :v-model="item.kind" style="width: 275px;margin-top:25px;height:40px;margin-left:32px" :placeholder="item.placeholder2">
                                <Option v-for="item1 in item.kind1" :value="item1.value" :key="item1.value">{{ item1.lable }}</Option>
                            </Select>
                        </div>
                        <b></b>
                    </li>
                </ul>
                <Button class="search" @click="search">Search</Button>
                <div class="cycle" v-show="show">
                    <div class="title">Recommend Products</div>
                    <div class="cycleList">
                        <Table :columns="columns11" :data="data10" border></Table>
                    </div>
                    <Button class="Inquiry" @click="Inquiry">Inquiry and Pre-order</Button>
                </div>
            </div>
            <div class="submit" v-show="!display">
                <ul class="breedList">
                    <li>
                        <div class="left">Enterprise scale</div>
                        <div class="right">
                            <RadioGroup v-model="disabledGroup">
                                <Radio label="0-50" style="margin-right:30px;"></Radio>
                                <Radio label="50-200" style="margin-right:30px;"></Radio>
                                <Radio label="200-500"></Radio>
                            </RadioGroup>
                        </div>
                    </li>
                    <li>
                        <div class="left">User scale</div>
                        <div class="right">
                            <RadioGroup v-model="disabledGroup1">
                                <Radio label="0-50" style="margin-right:30px;"></Radio>
                                <Radio label="50-200" style="margin-right:30px;"></Radio>
                                <Radio label="200-500"></Radio>
                            </RadioGroup>
                        </div>
                    </li>
                    <li>
                        <div class="left">Scenarios</div>
                        <div class="right">
                            <Select v-model="model1" style="width:275px;height:40px;" placeholder="Please Select the scenarios">
                                <Option v-for="item in scenariosList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </li>
                    <li>
                        <div class="left">Related products</div>
                        <div class="right">
                            <Select v-model="model2" style="width:275px;height:40px;" placeholder="Please Select the related products">
                                <Option v-for="item in productsList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </li>
                    <li>
                        <div class="left">Bugdet</div>
                        <div class="right">
                            <!-- <Select v-model="model3" style="width:275px;height:40px;" placeholder="Please Input your bugdet"> -->
                                <!-- <Option v-for="item in bugdetList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
                                <Input v-model="value" placeholder="Please Input your bugdet" style="width:275px;height:40px;" />
                            <!-- </Select> -->
                        </div>
                    </li>
                    <li>
                        <div class="left">Your Requirements *</div>
                        <div class="right">
                            <Input v-model="value5" type="textarea" placeholder="Please Input your requirements" style="height:90px"/>
                        </div>
                    </li>
                </ul>
                <Button class="search">Submit</Button>
            </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            display:true,
            show:false,
            TabList:['Select the product and specifications','Submit your requirements'],
            tabIndex:0,
            tabIndex1:-1,
            typeList:[{
                name:'Cloud Connect',
                placeholder1:'Please Select each site bandwidth',
                placeholder2:'Please Select subscription cycle',
                placeholder:'Please Input quantity',
                kind:[{
                        value:'10Mbps',
                        lable:'10Mbps'
                    },{
                        value:'100Mbps',
                        lable:'100Mbps'
                    }
                ],
                kind1:[{
                        value:'1 Months',
                        lable:'1 Months'
                    },{
                        value:'2 Months',
                        lable:'2 Months'
                    },{
                        value:'3 Months',
                        lable:'3 Months'
                    },{
                        value:'4 Months',
                        lable:'4 Months'
                    },{
                        value:'5 Months',
                        lable:'5 Months'
                    },{
                        value:'6 Months',
                        lable:'6 Months'
                    },{
                        value:'7 Months',
                        lable:'7 Months'
                    },{
                        value:'8 Months',
                        lable:'8 Months'
                    },{
                        value:'9 Months',
                        lable:'9 Months'
                    },{
                        value:'10 Months',
                        lable:'10 Months'
                    },{
                        value:'11 Months',
                        lable:'11 Months'
                    },{
                        value:'12 Months',
                        lable:'12 Months'
                    }
                ]
            },{
                name:'SD-WAN',
                placeholder:'Please Input quantity',
                placeholder1:'Please Select each site bandwidth',
                placeholder2:'Please Select subscription cycle',
                kind:[{
                        value:'10Mbps',
                        lable:'10Mbps'
                    },{
                        value:'100Mbps',
                        lable:'100Mbps'
                    }
                ],
                kind1:[{
                        value:'1 Months',
                        lable:'1 Months'
                    },{
                        value:'2 Months',
                        lable:'2 Months'
                    },{
                        value:'3 Months',
                        lable:'3 Months'
                    },{
                        value:'4 Months',
                        lable:'4 Months'
                    },{
                        value:'5 Months',
                        lable:'5 Months'
                    },{
                        value:'6 Months',
                        lable:'6 Months'
                    },{
                        value:'7 Months',
                        lable:'7 Months'
                    },{
                        value:'8 Months',
                        lable:'8 Months'
                    },{
                        value:'9 Months',
                        lable:'9 Months'
                    },{
                        value:'10 Months',
                        lable:'10 Months'
                    },{
                        value:'11 Months',
                        lable:'11 Months'
                    },{
                        value:'12 Months',
                        lable:'12 Months'
                    }
                ]
            },{
                name:'ECS',
                placeholder:'Please Input quantity',
                placeholder1:'Please select specifications',
                placeholder2:'Please Select subscription cycle',
                 kind:[
                    {
                    value:'Please select specifications',
                    lable:'Please select specifications'
                    },{
                        value:'1 core 2G',
                        lable:'1 core 2G'
                    },{
                        value:'1 core 4G',
                        lable:'1 core 4G'
                    }
                ],
                kind1:[
                    {
                        value:'Please Select subscription cycle',
                        lable:'Please Select subscription cycle'
                    },{
                        value:'1 Months',
                        lable:'1 Months'
                    },{
                        value:'2 Months',
                        lable:'2 Months'
                    },{
                        value:'3 Months',
                        lable:'3 Months'
                    },{
                        value:'4 Months',
                        lable:'4 Months'
                    },{
                        value:'5 Months',
                        lable:'5 Months'
                    },{
                        value:'6 Months',
                        lable:'6 Months'
                    },{
                        value:'7 Months',
                        lable:'7 Months'
                    },{
                        value:'8 Months',
                        lable:'8 Months'
                    },{
                        value:'9 Months',
                        lable:'9 Months'
                    },{
                        value:'10 Months',
                        lable:'10 Months'
                    },{
                        value:'11 Months',
                        lable:'11 Months'
                    },{
                        value:'12 Months',
                        lable:'12 Months'
                    }
                ]
            }],
            columns11: [
                {
                    title: 'Product Name',
                    key: 'name',
                },
                {
                    title: 'Fee Name',
                    key: 'Fee',
                },
                {
                    title: 'Price with Tax',
                    key: 'Price'
                },
                {
                    title: 'Subscription Cycle (Month)',
                    key: 'Month'
                },
                {
                    title: 'Quantity',
                    key: 'Quantity'
                },
                {
                    title: 'Tax（HKD）',
                    key: 'Tax'
                },
                {
                    title: 'Subtotal (HKD)',
                    key: 'Subtotal'
                }
            ],
            data10: [
                {
                    name: 'Cloud Connect',
                    Fee: '10Mbps Monthly Rental Fee',
                    Price: "1000HKD/Month" ,
                    Month: '5',
                    Quantity:'1',
                    Tax:500,
                    Subtotal:'5000'
                },{
                    name: 'SD-WAN',
                    Fee: '10Mbps Monthly Rental Fee',
                    Price: "500HKD/Month",
                    Month: '5',
                    Quantity:'2',
                    Tax:500,
                    Subtotal:'5000'
                },{
                    name: 'SD-WAN',
                    Fee: 'CPE-M Device Fee',
                    Price:"200HKD/Month",
                    Month: '5',
                    Quantity:'2',
                    Tax:200,
                    Subtotal:'2000'
                },{
                    name: 'SD-WAN',
                    Fee: 'License Fee',
                    Price:"100HKD/Month",
                    Month: '5',
                    Quantity:'2',
                    Tax:100,
                    Subtotal:'1000'
                }
                ,{
                    name: 'Total(HKD)',
                    Fee: '',
                    Price:"",
                    Month: '',
                    Quantity:'',
                    Tax: 1300,
                    Subtotal: 13000
                }
            ],
            disabledGroup:'',
            disabledGroup1:'',
            model1:'',
            model2:'',
            model3:'',
            value5:'',
            value:'',
            scenariosList:[{
                value:'Please select the scenarios',
                label:'Please select the scenarios'
            },{
                value:'Building a small-sized website',
                label:'Building a small-sized website'
            }],
            productsList:[{
                value:'Please select the related products',
                label:'Please select the related products'
            },{
                value:'Cloud Connect',
                label:'Cloud Connect'
            },{
                value:'SD-WAN',
                label:'SD-WAN'
            },{
                value:'ECS',
                label:'ECS'
            }]
        }
    },
    methods: {
        choice(index){
            this.tabIndex = index;
            if(index==1){
                this.display = false;
            }else{
                this.display = true;
            }
        },
        example(index,item){
            this.tabIndex1 = index;
            item.activity = true;
        },
        Inquiry(){
            let userName = window.sessionStorage.getItem('user')
            this.$http.get("/customize/generateProductOrder?productId=product2,product1&userName="+userName)
            .then(res=>{
                let subscriptionNo = res.data.subscriptionNo;
                this.$router.push({
                    path:"/page/order/Ordercustom",
                    query:{
                        subscriptionNo: subscriptionNo
                    }
                })
            })
        },
        search(){
            this.show = true;
        }
    },
    mounted () {
        let list = this.data10;
        let total = '';
        let result = [];
        for(let i=0;i<list.length;i++){
            result.push(list[i].Subtotal);
            total = Number(result[0])+Number(result[1])+Number(result[2])+Number(result[3]);
            this.data10[4].Subtotal = total
        }
    },
}
</script>

<style lang="less">
    .Customized{
        width: 1200px;
        background: #f8f8f8;
        margin: 0 auto;
        .head{
            width: 100%;
            height: 80px;
            background: #4486fa;
            .logo{
                width: 50%;
                float: left;
                padding: 18px 0 18px 120px;
            }
            .list{
                width: 50%;
                float: right;
                padding-top: 30px;
                padding-left: 120px;
                li{
                    font-size: 16px;
                    float: left;
                    color:#c6d5ff;
                    margin-right: 50px;
                    cursor: pointer;
                    a{
                        color:#c6d5ff;
                    }
                    img{
                        display: block;
                        width: 30px;
                        height: 30px;
                        float: left;
                        margin-right: 10px;
                        margin-top: -5px;
                    }
                };
            }
        }
        .contant{
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            .ivu-breadcrumb{
                width: 100%;
                color:#a6b0c5;
                height: 50px;
                line-height: 50px;
                float: left;
                span{
                    a{
                        color:#a6b0c5;
                        font-weight: normal;
                    }
                }
            }
            .container{
                width: 100%;
                padding-bottom: 60px;
                background: #fff;
                padding-top: 50px;
                float: left;
                .tabList{
                    width: 810px;
                    height: 50px;
                    margin: 0 auto;
                    border:1px solid #dbe0ef;
                    border-radius: 25px;
                    box-sizing: border-box;
                    p{
                        width: 50%;
                        float: left;
                        height: 48px;
                        line-height: 50px;
                        color:#a6b0c5;
                        text-align: center;
                        cursor: pointer;
                        background: #f4f7fe;
                        box-sizing: border-box;
                    }
                    p.active{
                        background: #fff;
                        color:#4486fa;
                    }
                    p:nth-child(1){
                        border-right: 1px solid #dbe0ef;
                        border-bottom-left-radius: 25px;
                        border-top-left-radius: 25px;
                    }
                    p:nth-child(2){
                        border-bottom-right-radius: 25px;
                        border-top-right-radius: 25px;
                    }
                }
                .choicePriduct{
                    width: 100%;
                    margin-top:20px;
                    .typeList{
                        width: 100%;
                        li{
                            width: 100%;
                            height: 100px;
                            box-sizing: border-box;border-left: 4px solid #fff;
                            .classification{
                                width: 1100px;
                                height: 100%;
                                border-bottom: 1px solid #eceff9;
                                margin-left: 40px;
                                float: left;
                                .title{
                                    width: 166px;
                                    height: 52px;
                                    margin-top: 25px;
                                    // border:1px solid #636e80;
                                    box-sizing: border-box;
                                    span{
                                        font-size: 12px;
                                        line-height: 40px;
                                        color:#636e80;
                                    }
                                }
                                .ivu-input-wrapper{
                                    input{
                                        height: 40px;
                                    }
                                }
                                .ivu-select-selection{
                                    height: 40px;
                                    span{
                                        line-height: 40px;
                                    }
                                }
                                .ivu-select-dropdown-list{
                                        li{
                                           line-height: 30px;
                                           height: 30px;
                                        }
                                    }
                            }
                            b{
                                display: block;
                                width: 20px;
                                height: 20px;
                                border-radius: 50%;
                                border: 1px solid #f6f8fc;
                                float: right;
                                margin-top: 40px;
                                margin-right: 20px;
                            }
                        }
                        li.active{
                            background: #f6f9fe;
                            border-left: 4px solid #4486fa;
                            box-sizing: border-box;
                            b{
                                background: url("../../assets/img/xuanzhong.png") no-repeat;
                                background-size: 100% 100%;
                            }
                        }
                    }
                    .search{
                        display: block;
                        width: 120px;
                        height: 40px;
                        line-height: 26px;
                        background: #4486fa;
                        color:#fff;
                        font-size: 16px;
                        margin: 30px auto;
                        border-radius: 5px;
                    }
                    .cycle{
                        width: 100%;
                        padding:0 50px;
                        .title{
                            width: 100%;
                            line-height: 54px;
                            font-size: 14px;
                            color:#636e80;
                        }
                        .cycleList{
                            width: 100%;
                        }
                        .ivu-table-cell{
                            padding: 0;
                            text-align: center;
                            width: 100%;
                        }
                        .Inquiry{
                            width: 200px;
                            height: 40px;
                            background: #4486fa;
                            border-radius: 5px;
                            color:#fff;
                            font-size: 14px;
                            float: right;
                            margin-top: 20px;
                        }
                    }
                }
                .submit{
                    width: 100%;
                    overflow: hidden;
                    margin-top: 40px;
                    li{
                        width: 100%;
                        margin-top: 30px;
                        overflow: hidden;
                        .left{
                            float: left;
                            width: 335px;
                            text-align: right;
                            font-size: 12px;
                        }
                        .right{
                            width: 640px;
                            float: left;
                            margin-left: 30px;
                            .ivu-select-selection{
                                height: 40px;
                                .ivu-select-placeholder{
                                    line-height: 40px;
                                }
                            }
                            ul{
                                li{
                                    margin-top: 0;
                                }
                            }
                        }
                    }
                    .search{
                        display: block;
                        width: 120px;
                        height: 40px;
                        line-height: 26px;
                        background: #4486fa;
                        color:#fff;
                        font-size: 16px;
                        margin-left: 360px;
                        margin-top: 40px;
                        border-radius: 5px;
                    }
                    li:nth-child(3){
                        .left{
                            line-height: 40px;
                        }
                    }
                    li:nth-child(4){
                        .left{
                            line-height: 40px;
                        }
                    }
                    li:nth-child(5){
                        .left{
                            line-height: 40px;
                        }
                    }
                     li:nth-child(6){
                        .ivu-input{
                            height: 90px;
                        }
                    }

                }
            }
        }
        .fotter{
            width: 100%;
            padding: 0 120px;
            overflow: hidden;
            p{
                width: 50%;
                line-height: 74px;
                float: left;
                font-size: 16px;
                color:#c7cfde;
            }
            p:nth-child(1){
                text-align: left;
            }

            p:nth-child(2){
                text-align: right;
            }
        }
    }
</style>

<template>
    <div class="CreatFromPage">
        <div class="title">My Form > Create a new form</div>
        <div class="contant">
            <ul>
                <li>
                    <p>Chose your question type</p>
                    <Select v-model="model1" style="width:240px" placeholder="dropdown and select one">
                        <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </li>
                <li>
                    <p>Please input in your question detail on there</p>
                    <Input v-model="question" placeholder="" type="textarea" style="width: 800px;height:80px;" />
                    <Button style="width:120px;height:36px;margin-left:300px;margin-top:10px;">Add Pictures</Button>
                </li>
                <li>
                    <p>Select a way of return of view for this time</p>
                    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                        <Checkbox label="SMS" checked='checked'></Checkbox>
                        <Checkbox label="E-mail"></Checkbox>
                        <Checkbox label="Telephone"></Checkbox>
                    </CheckboxGroup>
                </li>
                <li>
                    <p>Please tell us more detail:</p>
                </li>
                <li>
                    <p>Full Name</p>
                    <Input v-model="fullName" placeholder="" style="width: 240px" />
                </li>
                <li>
                    <p>Telephone Number</p>
                    <Input v-model="telNum" placeholder="" style="width: 240px" />
                </li>
                <li>
                    <p>E-mail</p>
                    <Input v-model="email" placeholder="" style="width: 240px" />
                </li>
            </ul>
            <Button type="primary" style="width:120px;margin-right:20px;margin-left:430px">OK</Button>
            <Button style="width:120px">Cancel</Button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            model1:'',
            question:'',
            fullName:'',
            telNum:'',
            email:'',
            checkAllGroup:'',
            typeList:[
                {
                    value:'dropdown and select one',
                    label:'dropdown and select one'
                }
            ]
        }
    },
    methods: {
        checkAllGroupChange(){
            
        }
    },
    components: {

    }
}
</script>

<style lang="less">
.CreatFromPage{
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    .title{
        color:#666;
        line-height: 56px;
        font-size: 14px;
        font-weight: 700;
    }
    .contant{
        width: 100%;
        padding: 20px 40px 60px 40px;
        border:1px solid #e2e9f6;
        ul{
            padding-bottom: 40px;
            li{
                margin-top: 20px;
                overflow: hidden;
                p{
                    color:#333;
                    margin-right: 20px;
                    display: block;
                    float: left;
                    width: 280px;
                    text-align: right;
                }
            }
            li.ivu-select-item{
                margin-top: 0;
            }
            li:nth-child(2){
                .ivu-input{
                    height: 80px;
                }
            }
        }
    }   
}
</style>

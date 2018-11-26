<template>
  <div id="SDWMonitoring">
    <h5>SD-WAN</h5>
    <div class="content">
      <strong style="width:100px;text-align:left">Service NO : </strong>
      <Select v-model="modelNo" style="width:280px" placeholder="1120181101100058">
        <Option v-for="item in wo" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <div class="map">
        <img src="../../assets/img/SDWMonitoring.png" alt="">
        <p class="dis">
          <span style="margin-top:13px;display:block">CMI</span>
          <span style="margin-top:10px;display:block">SD-WAN</span>
        </p>
        <div class="left">
          <div class="mask1">
            <p style="padding-left:12px;margin-top:10px;overflow:hidden">CPE : cpe-US-xlo</p>
            <p style="padding-left:12px;overflow:hidden">Link Status: <span style="display:inline-block;float;width:12px;height:12px;border-radius:50%;background:#6bff0a;"></span></p>
            <p style="padding-left:12px;">Packet Loss : < 0.5%</p>
          </div>
        </div>
        <div class="right">
          <div class="mask2">
            <p style="padding-left:12px;margin-top:10px;overflow:hidden">CPE : cpe-HK-16u</p>
            <p style="padding-left:12px;overflow:hidden">Link Status: <span style="display:inline-block;float;width:12px;height:12px;border-radius:50%;background:#ffff08;"></span></p>
            <p style="padding-left:12px;overflow:hidden">0.5 % < Packet Loss < 0.1 %</p>
          </div>
        </div>
      </div>
      <h4>CPE Monitor</h4>
      <strong>Device Name : </strong>
      <Select v-model="model3" style="width:280px">
        <Option v-for="item in device" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <div style="margin:10px 0 15px 0">
        <strong>Location :</strong>
        <span>HongKong</span>
      </div>
      <div class="line1">
        <div style="position: absolute;width: 400px;left: 18px;top: 20px;">
          <Button style="background: #fff;border: 1px solid #42a5f6;color: #42a5f6; margin-right:20px;cursor: pointer;" v-for="(item,index) in buttonList" :class="{active:tabIndex==index}" @click="choice(index,item)" :key="index" >{{item.name}}</Button>
        </div>
        <div id="line1"></div>
      </div>
      <h4>vGW Monitor</h4>
      <strong>Device Name : </strong>
      <Select v-model="model4" style="width:280px">
        <Option v-for="item in device1" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <div style="margin:10px 0 15px 0">
        <strong>Location :</strong>
        <span>HongKong</span>
      </div>
      <div class="line2">
        <div style="position: absolute;width: 400px;left: 18px;top: 20px;">
          <Button style="background: #fff;border: 1px solid #42a5f6;color: #42a5f6; margin-right:20px;cursor: pointer;" v-for="(item,index) in buttonList" :class="{active:tabIndex1==index}" @click="choice1(index,item)" :key="index" >{{item.name}}</Button>
        </div>
        <div id="line2"></div>
      </div>
      <h4>SD-WAN Controller Monitor</h4>
      <strong>Device Name : </strong>
      <Select v-model="model5" style="width:280px">
        <Option v-for="item in device2" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <div style="margin:10px 0 15px 0">
        <strong>Location :</strong>
        <span>HongKong</span>
      </div>
      <div class="line3">
        <div style="position: absolute;width: 400px;left: 18px;top: 20px;">
           <Button style="background: #fff;border: 1px solid #42a5f6;color: #42a5f6; margin-right:20px;cursor: pointer;" v-for="(item,index) in buttonList" :class="{active:tabIndex2==index}" @click="choice2(index,item)" :key="index" >{{item.name}}</Button>
        </div>
        <div id="line3"></div>
      </div>
        <h4>NetWork Monitor</h4>
        <strong>CPE device name: </strong>
        <Select v-model="model6" style="width:280px;">
          <Option v-for="item in device6" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <div style="margin:10px 0 15px 0">
        <strong>Connection Status: </strong>
        <span style="display: inline-block;width: 10px;height: 10px;background-color: #0bc4ae;border-radius: 50%"></span>
        </div>
        <div style="margin:10px 0 15px 0">
          <strong>Bandwidth :</strong>
          <span>10M</span>
        </div>
        <div class="line4">
          <div style="position: absolute;width: 400px;left: 18px;top: 20px;">
           <Button style="background: #fff;border: 1px solid #42a5f6;color: #42a5f6; margin-right:20px;cursor: pointer;" v-for="(item,index) in buttonList1" :class="{active:tabIndex3==index}" @click="choice3(index,item)" :key="index" >{{item.name}}</Button>
          </div>
          <div id="line4"></div>
        </div>
    </div>

  </div>
</template>

<style lang="less">
  #SDWMonitoring{
    width: 1200px;
    margin: 0 auto;
    h5{
      color: #a6b0c5;
      font-weight: 700;
      font-size: 14px;
      padding: 20px 0;
    }
    .ivu-btn.active{
      color:#fff !important;
      background: #42a5f6 !important;
    }
    .content{
      background-color: #fff;
      padding: 30px;
      .select{
        strong{
          display: inline-block;
          font-size: 14px;
          color: #a6b0c5;
          margin: 0 10px;
          width: 70px;
          text-align: right;
        }
      }
      strong{
        display: inline-block;
        font-size: 14px;
        color: #a6b0c5;
        margin: 0 10px;
        width: 130px;
        text-align: right;
      }
      .map{
        margin: 20px 0 20px 0;
        height: 460px;
        position: relative;
        .dis{
          position: absolute;
          width: 1119px;
          height: 70px;
          background: rgba(255,255,255,.1);
          left: 0;
          bottom: -1px;
          padding-left: 45px;
          span{
            color:#fff;
            font-size: 20px;
            line-height: 20px;
          }
        }
        .left{
          width: 25px;
          height: 40px;
          background: transparent;
          position: absolute;
          left: 57px;
          top: 53px;
          .mask1{
            width: 150px;
            height: 70px;
            background: #fff;
            position: absolute;
            left: 110%;
            top: 70%;
            border:1px solid #787878;
            display:none;
          }
        }
        .left:hover{
          .mask1{
            display: block;
          }
        }
        .right{
          width: 25px;
          height: 40px;
          background: transparent;
          position: absolute;
          right: 117px;
          top: 202px;
          .mask2{
            width: 190px;
            height: 70px;
            background: #fff;
            position: absolute;
            right: 110%;
            top: 70%;
            border:1px solid #787878;
            display:none;
          }
        }
        .right:hover{
          .mask2{
            display:block;
          }
        }
        #map{
          width: 100%;
          height: 100%;
        }
      }
      h4{
        margin: 20px 0;
        font-size: 20px;
      }
      .line1{
        height: 355px;
        border: 1px solid #e2e9f6;
        position: relative;
        #line1{
          width: 100%;
          height: 300px;
          margin-top: 50px;
        }
      }
      .line2{
        height: 355px;
        border: 1px solid #e2e9f6;
        position: relative;
        #line2{
          width: 100%;
          height: 300px;
          margin-top: 50px;
        }
      }
      .line3{
        height: 355px;
        border: 1px solid #e2e9f6;
        position: relative;
        #line3{
          width: 100%;
          height: 300px;
          margin-top: 50px;
        }
      }
      .line4{
        height: 355px;
        border: 1px solid #e2e9f6;
        position: relative;
        #line4{
          width: 100%;
          height: 300px;
          margin-top: 50px;
        }
      }
    }
  }
</style>

<script type="text/ecmascript-6">
  import echarts from 'echarts'
  import 'echarts/map/js/world'
  import {textWord} from '../../assets/js/city'
  export default {
    data(){
      return{
        buttonList:[
          {
            name:'CPU'
          },{
            name:'Memory',
          },{
            name:'Disk'
          }
        ],
        buttonList1:[
          {
            name:'Bandwidth'
          },{
            name:'Packet loss',
          },{
            name:'Latency'
          }
        ],
        tabIndex:0,
        tabIndex1:0,
        tabIndex2:0,
        tabIndex3:0,
        name1:'CPU',
        name2:'CPU',
        name3:'CPU',
        name4:'Bandwidth',
        service: [
          {
            value: 'Pre-constructed width CSP',
            label: 'Pre-constructed width CSP',
          },
        ],
        device: [
          {
            value: 'cpe-HK-16u',
            label: 'cpe-HK-16u',
          },
        ],
        device1: [
          {
            value: 'vGW-HK-16u',
            label: 'vGW-HK-16u',
          },
        ],
        device2: [
          {
            value: 'controller-HK-16u',
            label: 'controller-HK-16u',
          },
        ],
        device6: [
          {
            value: 'cpe-US-xlo',
            label: 'cpe-US-xlo',
          },
        ],
        wo: [
          {
            value: '1120181101100058',
            label: '1120181101100058',
          },{
            value: '1120181001000033',
            label: '1120181001000033',
          },
        ],
        modelNo:'',
        model1: 'Pre-constructed width CSP',
        model2: '1120181101100058',
        model3: 'cpe-HK-16u',
        model4: 'vGW-HK-16u',
        model5: 'controller-HK-16u',
        model6:'cpe-US-xlo',
        map:'',
        line1:'',
        line3:'',
        line4:'',
        bar:'',
        mapData:[
          [{name:'北京'}, {name:'香港',value:95}],
        ],
        geoCoordMap:textWord,
        mapTable:[
          {
            city:'北京',
            title:'A-end',
            introduce:'Account ID:CSP-kjfoe13k',
            table:[
              {
                id:'csp-HK-de3/77777',
                prot:'GE/2/2/8',
                as:'64540',
                vlanId:'314',
                ipaddr:'192.168.253.94/30'
              },
              {
                id:'edge-HK-w2c/88888',
                prot:'GE/1/2/6',
                as:'65181',
                vlanId:'314',
                ipaddr:'192.168.253.94/30'
              },
              {
                id:'csp-HK-o91/77777',
                prot:'FE/2/2/9',
                as:'64540',
                vlanId:'314',
                ipaddr:'192.168.253.94/30'
              },
              {
                id:'edge-HK-921/88888',
                prot:'FE/1/2/7',
                as:'65181',
                vlanId:'314',
                ipaddr:'192.168.253.94/30'
              }
            ]
          },
          {
            city:'香港',
            title:'Z-end',
            introduce:'Account ID:CSP-aabod5k1',
            table:[
              {
                id:'csp-BJ-19e/77779',
                prot:'GE/2/2/8',
                as:'64540',
                vlanId:'314',
                ipaddr:'192.168.253.94/30'
              },
              {
                id:'csp-BJ-13c/88889',
                prot:'GE/2/2/8',
                as:'65181',
                vlanId:'314',
                ipaddr:'192.168.253.94/30'
              },
              {
                id:'csp-HK-de3/77778',
                prot:'GE/2/2/8',
                as:'64540',
                vlanId:'314',
                ipaddr:'192.168.253.94/30'
              },
              {
                id:'csp-HK-de3/77778',
                prot:'GE/2/2/8',
                as:'65181',
                vlanId:'314',
                ipaddr:'192.168.253.94/30'
              }
            ]
          }
        ],
        data1:[46,42,60,33,40,18,20,30,46,34,50,62,60,55,59],
        data2:[39,60,25,62,55,23,45,46,65,60,42,58,69,58,30],
        data3:[26,42,30,33,30,55,39,35,46,40,30,45,61,55,52],
        data4:[49,55,58,62,55,50,52,50,58,65,62,58,69],
        Xzhou:["15:48","15:49","15:50","15:51","15:52","15:53","15:54","15:55","15:56","15:57","15:58","15:59","16:00","16:01","16:02"],
      }
    },
    methods:{
      drawLine1(xzhou,data,name){
        let seriesData = data;
        this.line1 = echarts.init(document.getElementById('line1'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: xzhou,
            axisTick:{
              show:false,
            },
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            },
          },
          yAxis: {
            name:`${name} Usage(%)`,
            nameTextStyle:{
              color:'black'
            },
            max:100,
            min:0,
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            splitLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            }
          },
          grid: {
            left: '30px',
            right: '30px',
            bottom: '20px',
            top: '40px',
            containLabel: true
          },
          tooltip:{
            formatter: '{c0}',
            backgroundColor:'#0bc4ae'
          },
          series: [{
            data: seriesData,
            type: 'line'
          }]
        };
        this.line1.setOption(option)
      },
      drawLine2(xzhou,data,name){
        let seriesData = data;
        this.line2 = echarts.init(document.getElementById('line2'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: xzhou,
            axisTick:{
              show:false,
            },
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            },
          },
          yAxis: {
            name:`${name} Usage(%)`,
            nameTextStyle:{
              color:'black'
            },
            max:100,
            min:0,
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            splitLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            }
          },
          grid: {
            left: '30px',
            right: '30px',
            bottom: '20px',
            top: '40px',
            containLabel: true
          },
          tooltip:{
            formatter: '{c0}',
            backgroundColor:'#0bc4ae'
          },
          series: [{
            data: seriesData,
            type: 'line'
          }]
        };
        this.line2.setOption(option)
      },
      drawLine3(xzhou,data,name){
        let seriesData = data;
        this.line3 = echarts.init(document.getElementById('line3'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: xzhou,
            axisTick:{
              show:false,
            },
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            },
          },
          yAxis: {
            name:`${name} Usage(%)`,
            nameTextStyle:{
              color:'black'
            },
            max:100,
            min:0,
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            splitLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            }
          },
          grid: {
            left: '30px',
            right: '30px',
            bottom: '20px',
            top: '40px',
            containLabel: true
          },
          tooltip:{
            formatter: '{c0}',
            backgroundColor:'#0bc4ae'
          },
          series: [{
            data: seriesData,
            type: 'line'
          }]
        };
        this.line3.setOption(option)
      },
      drawLine4(xzhou,data,name){
        let seriesData = data;
        this.line4 = echarts.init(document.getElementById('line4'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: xzhou,
            axisTick:{
              show:false,
            },
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            },
          },
          yAxis: {
            name:function(name){
              if(name=='Latency'){
                return `${name}(ms)`
              }else{
                return `${name}(%)`
              }
            }(name),
            nameTextStyle:{
              color:'black'
            },
            max:function(name){
              if(name=='Latency'){
                return 1000
              }else{
                return 100
              }
            }(name),
            min:0,
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            splitLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            }
          },
          grid: {
            left: '30px',
            right: '30px',
            bottom: '20px',
            top: '40px',
            containLabel: true
          },
          tooltip:{
            formatter: '{c0}',
            backgroundColor:'#0bc4ae'
          },
          series: [{
            data: seriesData,
            type: 'line'
          }]
        };
        this.line4.setOption(option)
      },
      choice(index,item){
        this.tabIndex = index;
        this.name1 = item.name;
        if(item.name=='CPU'){
          this.data1 = [46,42,60,33,40,18,20,30,46,34,50,62,60,55,59]
        }else if(item.name=='Memory'){
          this.data1 = [55,50,49,53,40,48,45,44,47,39,35,33,55,35,40]
        }else if(item.name=="Disk"){
          this.data1 = [50,48,48,45,45,45,48,49,45,43,40,40,41,40,40]
        }
        this.drawLine1(this.Xzhou,this.data1,this.name1);
      },
      choice1(index,item){
        this.tabIndex1 = index;
        this.name2 = item.name;
        if(item.name=='CPU'){
          this.data2 = [39,60,25,62,55,23,45,46,65,60,42,58,69,58,30]
        }else if(item.name=='Memory'){
          this.data2 = [45,50,52,53,40,42,45,44,47,45,35,45,55,35,40]
        }else if(item.name=="Disk"){
          this.data2 = [38,38,38,35,35,35,37,37,37,40,40,40,41,39,40]
        }
         this.drawLine2(this.Xzhou,this.data2,this.name2);
      },
      choice2(index,item){
        this.tabIndex2 = index;
        this.name3 = item.name;
        if(item.name=='CPU'){
          this.data3 = [26,42,30,33,30,55,39,35,46,40,30,45,61,55,52]
        }else if(item.name=='Memory'){
          this.data3 = [45,50,44,53,40,42,45,40,47,45,40,45,49,35,50]
        }else if(item.name=="Disk"){
          this.data3 = [28,28,28,30,30,30,35,36,37,37,37,37,36,36,36]
        }
         this.drawLine3(this.Xzhou,this.data3,this.name3);
      },
      choice3(index,item){
        this.tabIndex3 = index;
        this.name4 = item.name;
        if(item.name=='Bandwidth'){
          this.data4 = [49,55,58,62,55,50,52,50,58,65,62,58,69]
        }else if(item.name=='Packet loss'){
          this.data4 = [0,0,2,0,0,1,2.5,0,0.5,0,3,0,3.9,0,2]
        }else if(item.name=="Latency"){
          this.data4 = [360,260,290,360,350,400,320,450,330,350,260,350,390,450,400]
        }
        this.drawLine4(this.Xzhou,this.data4,this.name4);
      }
    },
    mounted(){
      this.drawLine1(this.Xzhou,this.data1,this.name1);
      this.drawLine2(this.Xzhou,this.data2,this.name2);
      this.drawLine3(this.Xzhou,this.data3,this.name3);
      this.drawLine4(this.Xzhou,this.data4,this.name4);
    }
  }

</script>

<template>
  <div id="cloudMonitoring">
    <h5>Cloud Connect</h5>
    <div class="content">
      <div class="select">
        <strong style="width:80px">Service : </strong>
        <Select v-model="model1" style="width:280px" @on-change="choiceType" placeholder="Cloud Connect Cloud to Cloud">
          <Option v-for="item in service" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <strong>Service NO. : </strong>
        <Select v-model="model2" :value="model2" :placeholder="model2" style="width:280px">
          <Option :value="model2" :key="model2"></Option>
        </Select>
      </div>
      <div class="map">
        <div id="map" v-show="show"></div>
        <div id="map1" v-show="show1"></div>
        <div id="bgWord" v-show="show">
          <div id="bgFloat" style="z-index: 2"></div>
          <div style="z-index: 3">
          <p style="font-weight: bold; font-size: 15px; padding-left: 20px; padding-top: 7px;">Basic Info</p>
          <p style="width: 1026px; padding-left: 20px">
            <ul >
              <li style="float: left; margin-right: 10px; ">BandWith:10M</li>
              <li style="float: left; margin-right: 10px; ">A-End-Account-ID:CSP-kjfoe13k1</li>
              <li>Z-End-Account-ID:CSP-aabod6k1</li>
            </ul>
          </p>
          </div>
        </div>
        <div id="bgWord" v-show="show1">
          <div id="bgFloat" style="z-index: 2"></div>
          <div style="z-index: 3">
          <p style="font-weight: bold; font-size: 15px; padding-left: 20px; padding-top: 7px;">Basic Info</p>
          <p style="width: 1026px; padding-left: 20px">
            <ul >
              <li style="float: left; margin-right: 10px; ">BandWith:10M</li>
              <li style="float: left; margin-right: 10px; ">A-End-Account-ID:CSP-ccbod6k1</li>
              <li>Z-End-Address:Dacheng Building,BeiJing </li>
            </ul>
          </p>
          </div>
        </div>
      </div>
      <h4>Edge Monitor</h4>
      <strong>Device Name : </strong>
      <Select v-model="model3" style="width:280px">
        <Option v-for="item in device" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <div style="margin:10px 0 15px 0">
        <strong>Location :</strong>
        <span>HongKong</span>
      </div>
      <div class="line1">
        <div style="position: absolute;width: 300px;left: 18px;top: 20px;height:50px">
          <Button style="background: #fff;border: 1px solid #42a5f6;color: #42a5f6; margin-right:10px;cursor:pointer" v-for="(item,index) in buttonList" :key="index" @click="choice(index,item)" :class="{active:tabIndex==index}">{{item.name}}</Button>
        </div>
        <div id="line1"></div>
      </div>
      <h4>Network Monitor</h4>
      <div style="margin:10px 0 15px 0;width:100%">
        <strong>Connection State :</strong>
        <span style="display: inline-block;background-color: #0bc4ae;width: 14px;height: 14px;border-radius: 50%"></span>
      </div>
      <div style="margin:10px 0 15px 0">
        <strong>Bandwidth :</strong>
        <span>10M</span>
      </div>
      <div class="line2">
        <div style="position: absolute;width: 310px;left: 18px;top: 20px;height:50px;">
          <Button style="background: #fff;border: 1px solid #42a5f6;color: #42a5f6;margin-right:10px;" v-for="(item,index) in buttonList1" :key="index" @click="choice1(index,item)" :class="{active:tabIndex1==index}">{{item.name}}</Button>
        </div>
        <div id="line2"></div>
      </div>
    </div>

  </div>
</template>

<style lang="less">
  #cloudMonitoring{
    width: 1200px;
    margin: 0 auto;
    h5{
      color: #a6b0c5;
      font-weight: 700;
      font-size: 14px;
      padding: 20px 0;
    }
    .content{
      background-color: #fff;
      padding: 30px;
      overflow: hidden;
      .select{
        strong{
          display: inline-block;
          font-size: 14px;
          color: #a6b0c5;
          margin: 0 10px;
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
        /*background-image:url(../../assets/img/bgmap.jpg);*/
        #map{
          width: 1140px;
          height: 460px;
        }
        #map1{
          width: 1140px;
          height: 460px;
        }
        #bgWord{
          color: white;
          margin-top: -54px;
          /*margin-left: 20px;*/
          z-index: 1;
          position: absolute;
          width: 1140px;
          height: 55px;
        }
        #bgFloat{
          position: absolute;
          width: 1140px;
          height: 55px;
          opacity: 0.1;
          background-color: white;
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
      .ivu-btn.active{
        color:#fff !important;
        background: #42a5f6 !important;
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
      .bar{
        height: 355px;
        border: 1px solid #e2e9f6;
        position: relative;
        #bar{
          width: 100%;
          height: 100%;
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
        tabIndex:0,
        tabIndex1:0,
        service: [
          {
            value: 'Cloud Connect Cloud to Cloud',
            label: 'Cloud Connect Cloud to Cloud',
          },{
            value: 'Cloud Connect On-Premise to Cloud',
            label: 'Cloud Connect On-Premise to Cloud',
          }
        ],
        device: [
          {
            value: 'edge-HK-w2c',
            label: 'edge-HK-w2c',
          },
        ],
        wo: [
          {
            value: '1120181101100058',
            label: '1120181101100058',
          },
        ],
        buttonList:[{
          name:'CPU'
        },{
          name:'Memory'
        },{
          name:'Disk'
        }],
        name:'CPU',
        buttonList1:[{
          name:'BandWidth'
        },{
          name:'Latency'
        },{
          name:'Packet loss'
        }],
        name1:'BandWidth',
        data:[46,42,40,33,40,18,20,30,46,44,50,62,60,55,59],
        data1:[49,55,58,62,55,50,52,50,58,65,62,58,69],
        model1: '',
        model2: '',
        model3: 'edge-HK-w2c',
        map:'',
        line1:'',
        line2:'',
        bar:'',
        mapData:[
          [{name:'北京'}, {name:'香港',value:95}],
        ],
        geoCoordMap:textWord,
        mapTable:[
          {
            city:'BeiJing',
            title:'Z-end',
            introduce:'Account ID:CSP-aabod6k1',
            table:[
              {
                id:'csp-BJ-19e/77779',
                prot:'GE/2/3/1',
                as:'64542',
                vlanId:'314',
                ipaddr:'192.168.253.101/30'
              },
              {
                id:'edge-BJ-13c/88889',
                prot:'GE/1/2/5',
                as:'65502',
                vlanId:'314',
                ipaddr:'192.168.253.102/30'
              },
              {
                id:'csp-BJ-31p/77779',
                prot:'GE/1/1/9',
                as:'64542',
                vlanId:'314',
                ipaddr:'192.168.254.101/30'
              },
              {
                id:'edge-BJ-301/88889',
                prot:'GE/2/2/5',
                as:'65502',
                vlanId:'314',
                ipaddr:'192.168.254.102/30'
              }
            ]
          },
          {
            city:'HongKong',
            title:'A-end',
            introduce:'Account ID:CSP-kjfoe13k1',
            table:[
              {
                id:'csp-HK-de3/77777',
                prot:'GE/2/2/8',
                as:'64540',
                vlanId:'314',
                ipaddr:'192.168.253.93/30'
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
                prot:'GE/2/2/9',
                as:'64540',
                vlanId:'314',
                ipaddr:'192.168.254.93/30'
              },
              {
                id:'edge-HK-921/88888',
                prot:'GE/1/2/7',
                as:'65181',
                vlanId:'314',
                ipaddr:'192.168.254.94/30'
              }
            ]
          }
        ],
        mapTable1:[
          {
            city:'BeiJing',
            title:'Z-end',
            introduce:'Address : Dacheng Building,BeiJing ',
            table:[
              {
                id:'csp-BJ-19e/77779',
                prot:'GE/1/3/1',
                as:'64540',
                vlanId:'314',
                ipaddr:'192.168.253.73/30'
              },
              {
                id:'edge-BJ-13c/88889',
                prot:'GE/1/2/5',
                as:'65181',
                vlanId:'314',
                ipaddr:'192.168.253.74/30'
              },
              {
                id:'N/A',
                prot:'N/A',
                as:'N/A',
                vlanId:'N/A',
                ipaddr:'N/A'
              },{
                id:'N/A',
                prot:'N/A',
                as:'N/A',
                vlanId:'N/A',
                ipaddr:'N/A'
              }
            ]
          },
          {
            city:'HongKong',
            title:'A-end',
            introduce:'Account ID:CSP-ccbod6k1',
            table:[
              {
                id:'N/A',
                prot:'N/A',
                as:'63340',
                vlanId:'314',
                ipaddr:'192.168.253.77/30'
              },
              {
                id:'edge-HK-w2c/88888',
                prot:'GE/1/2/6',
                as:'65181',
                vlanId:'314',
                ipaddr:'192.168.253.78/30'
              },
              {
                id:'N/A',
                prot:'N/A',
                as:'N/A',
                vlanId:'N/A',
                ipaddr:'N/A'
              },
              {
                id:'N/A',
                prot:'N/A',
                as:'N/A',
                vlanId:'N/A',
                ipaddr:'N/A'
              }
            ]
          }
        ],
        show:true,
        show1:false,
        standard:'Cloud Connect Cloud to Cloud'
      }
    },
    methods:{
      choice(index,item){
        this.tabIndex = index;
        if(this.standard=='Cloud Connect Cloud to Cloud'){
          if(item.name == 'CPU'){
            this.data = [50,40,50,33,40,46,40,36,33,39,55,42,60,58,55];
          }else if(item.name == 'Memory'){
            this.data = [45,40,49,40,42,48,45,44,47,39,35,42,55,35,40]

          }else if(item.name == 'Disk'){
            this.data = [40,41,38,38,38,45,44,45,45,43,34,34,34,34,34]
          }
        }else{
          if(item.name == 'CPU'){
            this.data = [56,42,40,33,40,18,20,30,46,44,70,62,60,55,59]
          }else if(item.name == 'Memory'){
            this.data = [55,50,49,53,40,48,45,44,47,39,35,33,55,35,40,]
          }else if(item.name == 'Disk'){
            this.data = [50,48,48,45,45,45,48,49,45,43,40,40,41,40,40]
          }
        }

        this.drawLine1(this.data,item.name);
      },
      choice1(index,item){
        this.tabIndex1 = index;
        if(this.standard=='Cloud Connect Cloud to Cloud'){
          if(item.name == 'BandWidth'){
            this.data1 = [66,69,65,68,55,57,60,63,50,60,62,66,60,66,55]
          }else if(item.name == 'Packet loss'){
            this.data1 = [0,0,2,0,0,1,0,0,0.5,0,0,0,0,0,0.5]
          }else if(item.name=='Latency'){
            this.data1 = [298,260,290,360,350,370,320,400,330,350,260,310,300,390,400]
          }
        }else{
          if(item.name == 'BandWidth'){
            this.data1 = [49,55,58,62,55,50,52,50,58,65,62,58,69]
          }else if(item.name == 'Packet loss'){
            this.data1 = [0,0,2,0,0,1,2.5,0,0.5,0,3,0,3.9,0,2]
          }else if(item.name=='Latency'){
            this.data1 = [360,260,290,360,350,400,320,450,330,350,260,350,390,450,400]
          }
        }
        this.drawLine2(this.data1,item.name);
      },
      drawMap(data){
        this.map = echarts.init(document.getElementById("map"));
        let mapData = {
          'SHData':[
            [{name:'北京'}, {name:'香港',value:10}],
          ]
        };
        let geoCoordMap = this.geoCoordMap;
        let GZData = mapData.SHData;
        let convertData = function (data) {
          let res = [];
          for (var i = 0; i < data.length; i++) {
            let dataItem = data[i];
            let fromCoord = geoCoordMap[dataItem[0].name];
            let toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
              res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
              });
            }
          }
          return res;
        };
        let series = [];
        let _this = this;
        [['北京', GZData]].forEach(function (item, i){
          series.push(
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              symbolSize: 12,
              rippleEffect: {
                brushType: 'stroke'
              },
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  formatter: '{b}'
                }
              },
              itemStyle: {
                normal: {
                  // color:'#fdea4d'
                  color:'#27fee8'
                }
              },
              data: item[1].map(function (dataItem) {
                return {
                  name:'BeiJing',
                  value: geoCoordMap[dataItem[0].name]
                };
              })
            },
            {
              type: 'lines',
              zlevel: 2,
              symbolSize: 10,
              effect: {
                show: false,
              },
              lineStyle: {
                normal: {
                  // color: "#fdea4d",
                  color: '#27fee8',
                  width: 2,
                  opacity: 0.6,
                  curveness: 0.4,
                }
              },
              data: convertData(item[1])
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              label: {
                normal: {
                  show: true,
                  position: 'bottom',
                  formatter: '{b}'
                }
              },
              symbol:"circle",
              symbolSize: 10,
              rippleEffect: {
                brushType: 'stroke',
              },
              itemStyle: {
                normal: {
                  // color:'#fdea4d'
                  color:'#27fee8'
                }
              },
              data: item[1].map(function (dataItem) {
                return {
                  name: 'HongKong',
                  value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
              })
            });
        });
        let option = {
          // backgroundColor: '#b7dfff',
          backgroundColor: '#1966ee',
          geo: {
            center: [105.97, 33.71],
            zoom:3,
            map: 'world',
            show:true,
            label: {
              emphasis: {
                show: false
              }
            },

            roam: true,
            top:"50px",
            bottom:"50px",
            right:"50px",
            left:"50px",
            itemStyle: {
              normal: {
                // areaColor: '#2598f4',
                areaColor: '#0c54e8',
                // borderColor:"#b7dfff",
                // borderColor:"#1966ee",
                borderColor:" rgba(255,255,255,0.2)",
                borderWidth:0.8,
              },
              emphasis: {
                // areaColor: '#2b8dea'
                areaColor:'#2979f9'
              }
            }
          },
          tooltip:{
            trigger:'item',
            formatter:function(params){
              let arr = [];
              _this.mapTable.map((res,index)=>{
                console.log("111=>",params.name)
                 console.log("111=>",res.city)
                if(params.name == res.city){
                   arr = `<div><div style=""><h5 style="color: #fff;display: inline-block;margin-right: 10px;font-size: 14px">${res.title}</h5><span style="font-size: 12px;color: #cbdcfa;">${res.introduce}</span></span></div><table border="1" style="border: 1px solid #6b9bf0;border-collapse: collapse;text-align: center;"><tr><td>Device Name/ID</td><td>PORT TYPE/PORT</td><td>AS#</td><td>VLAN ID</td><td>IP Addr</td></tr><tr><td>${res.table[0].id}</td><td>${res.table[0].prot}</td><td>${res.table[0].as}</td><td>${res.table[0].vlanId}</td><td>${res.table[0].ipaddr}</td></tr><tr><td>${res.table[1].id}</td><td>${res.table[1].prot}</td><td>${res.table[1].as}</td><td>${res.table[1].vlanId}</td><td>${res.table[1].ipaddr}</td></tr><tr><td>${res.table[2].id}</td><td>${res.table[2].prot}</td><td>${res.table[2].as}</td><td>${res.table[2].vlanId}</td><td>${res.table[2].ipaddr}</td></tr><tr><td>${res.table[3].id}</td><td>${res.table[3].prot}</td><td>${res.table[3].as}</td><td>${res.table[3].vlanId}</td><td>${res.table[3].ipaddr}</td></tr></table></div>`
                }
              });
              return arr
            },
            padding:15
          },
          series: series
        };
        this.map.setOption(option)
      },
      drawMap1(data){
        this.map = echarts.init(document.getElementById("map1"));
        let mapData = {
          'SHData':[
            [{name:'北京'}, {name:'香港',value:10}],
          ]
        };
        let geoCoordMap = this.geoCoordMap;
        let GZData = mapData.SHData;
        let convertData = function (data) {
          let res = [];
          for (var i = 0; i < data.length; i++) {
            let dataItem = data[i];
            let fromCoord = geoCoordMap[dataItem[0].name];
            let toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
              res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
              });
            }
          }
          return res;
        };
        let series = [];
        let _this = this;
        [['北京', GZData]].forEach(function (item, i){
          series.push(
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              symbolSize: 12,
              rippleEffect: {
                brushType: 'stroke'
              },
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  formatter: '{b}'
                }
              },
              itemStyle: {
                normal: {
                  // color:'#fdea4d'
                  color:'#27fee8'
                }
              },
              data: item[1].map(function (dataItem) {
                return {
                  name: 'BeiJing',
                  value: geoCoordMap[dataItem[0].name]
                };
              })
            },
            {
              type: 'lines',
              zlevel: 2,
              symbolSize: 10,
              effect: {
                show: false,
              },
              lineStyle: {
                normal: {
                  // color: "#fdea4d",
                  color: '#27fee8',
                  width: 2,
                  opacity: 0.6,
                  curveness: 0.4,
                }
              },
              data: convertData(item[1])
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              label: {
                normal: {
                  show: true,
                  position: 'bottom',
                  formatter: '{b}'
                }
              },
              symbol:"circle",
              symbolSize: 10,
              rippleEffect: {
                brushType: 'stroke',
              },
              itemStyle: {
                normal: {
                  // color:'#fdea4d'
                  color:'#27fee8'
                }
              },
              data: item[1].map(function (dataItem) {
                return {
                  name: 'HongKong',
                  value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
              })
            });
        });
        let option = {
          // backgroundColor: '#b7dfff',
          backgroundColor: '#1966ee',
          geo: {
            center: [105.97, 33.71],
            zoom:3,
            map: 'world',
            show:true,
            label: {
              emphasis: {
                show: false
              }
            },

            roam: true,
            top:"50px",
            bottom:"50px",
            right:"50px",
            left:"50px",
            itemStyle: {
              normal: {
                // areaColor: '#2598f4',
                areaColor: '#0c54e8',
                // borderColor:"#b7dfff",
                // borderColor:"#1966ee",
                borderColor:" rgba(255,255,255,0.2)",
                borderWidth:0.8,
              },
              emphasis: {
                // areaColor: '#2b8dea'
                areaColor:'#2979f9'
              }
            }
          },
          tooltip:{
            trigger:'item',
            formatter:function(params){
              let arr = [];
              _this.mapTable1.map((res,index)=>{
                if(params.name == res.city){
                   arr = `<div><div style=""><h5 style="color: #fff;display: inline-block;margin-right: 10px;font-size: 14px">${res.title}</h5><span style="font-size: 12px;color: #cbdcfa;">${res.introduce}</span></span></div><table border="1" style="border: 1px solid #6b9bf0;border-collapse: collapse;text-align: center;"><tr><td>Device Name/ID</td><td>PORT TYPE/PORT</td><td>AS#</td><td>VLAN ID</td><td>IP Addr</td></tr><tr><td>${res.table[0].id}</td><td>${res.table[0].prot}</td><td>${res.table[0].as}</td><td>${res.table[0].vlanId}</td><td>${res.table[0].ipaddr}</td></tr><tr><td>${res.table[1].id}</td><td>${res.table[1].prot}</td><td>${res.table[1].as}</td><td>${res.table[1].vlanId}</td><td>${res.table[1].ipaddr}</td></tr><tr><td>${res.table[2].id}</td><td>${res.table[2].prot}</td><td>${res.table[2].as}</td><td>${res.table[2].vlanId}</td><td>${res.table[2].ipaddr}</td></tr><tr><td>${res.table[3].id}</td><td>${res.table[3].prot}</td><td>${res.table[3].as}</td><td>${res.table[3].vlanId}</td><td>${res.table[3].ipaddr}</td></tr></table></div>`
                }
              });
              return arr
            },
            padding:15
          },
          series: series
        };
        this.map.setOption(option)
      },
      drawLine1(data,name){
        let data1 = data;
        let name1 = name;
        this.line1 = echarts.init(document.getElementById('line1'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: ['15:48', '15:49', '15:50', '15:51', '15:52', '15:53', '15:54','15:55','15:56','15:57','15:58','15:59',"16:00","16:01","16:02"],
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
            name:`${name1}  Usage(%)`,
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
            data: data1,
            type: 'line'
          }]
        };
        this.line1.setOption(option)
      },
      drawLine2(data,name){
        let data1 = data;
        let name1 = name;
        this.line2 = echarts.init(document.getElementById('line2'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: ['15:48', '17:48', '19:48', '21:48', '23:48','01:48', '03:48', '05:48','07:48','09:48','11:48','13:48','15:48'],
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
                return `${name} (ms)`
              }else{
                return `${name} (%)`
              }
            }(name1),
            nameTextStyle:{
              color:'black'
            },
            max:function(){
              if(name=='Latency'){
                return 1000
              }else{
                return 100
              }
            }(name1),
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
            data: data1,
            type: 'line'
          }]
        };
        this.line2.setOption(option)
      },
      choiceType(value){
        this.standard = value;
        if(this.standard=='Cloud Connect On-Premise to Cloud'){
          this.data = [50,40,50,33,40,46,40,36,33,39,55,42,60,58,55];
          this.data1 = [66,69,65,68,55,57,60,63,50,60,62,66,60,66,55];          this.drawLine1(this.data,this.name);
          this.drawLine2(this.data1,this.name1);
          this.show1 = true;
          this.show = false;
        }else{
          this.show = true;
          this.show1 = false;
        }
      }
    },
    mounted(){
      this.drawMap();
      this.drawMap1();
      this.drawLine1(this.data,this.name);
      this.drawLine2(this.data1,this.name1);
      this.model1 = this.$route.query.productName;
      console.log(this.$route.query.title)
      console.log(this.model1)
      if(this.model1 == 'Cloud Connect'){
        this.model1 = 'Cloud Connect Cloud to Cloud';
        this.model2 = this.$route.query.title;
        this.show = true;
        this.show1 = false;
      }else{
        this.model1 = 'Cloud Connect On-Premise to Cloud';
        this.model2 = this.$route.query.title;
        this.show1 = true;
        this.show = false;
      }
    },
  }

  </script>

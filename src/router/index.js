import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Ordercustom from '../page/order/orderCustom.vue'
import OrdercustomDetail from '../page/order/orderCustomDetail.vue'
import OrderManagement from '../page/order/orderManagement'
import OrderDetails from '../page/order/orderDetails'
import OrderDetailsSDW from '../page/order/orderDetailsSDW'
import BusinessOrder from '../page/order/businessOrder'
import BusinessOrderSDW from '../page/order/BusinessOrderSDW'
import layout from '../page/common/layout'
import Customized from '../../src/page/Customized/Customized'
import Dashboard from '../page/dashboard/dashboard.vue'
import Login from '../page/common/login.vue'
import ProductPage from '../page/product/productPage'
import ProductList from '../page/product/productList'
import CloudMonitoring from '../page/cloud/cloudMonitoring'
import SDWMonitoring from '../page/cloud/SDWMonitoring'
import Mybusiness from '../page/myBusiness/myBusiness.vue'
import fromListPage from '../page/from/fromList'
import CreatFromPage from '../page/from/creatFrom'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/page/order',
      component: layout,
      children:[
        {
          path: '/page/order/orderManagement',  //订单管理
          component: OrderManagement,
        },
        {
          path: '/page/order/orderDetails',   //订单详情 标准 云互联
          component: OrderDetails,
        },
        {
          path: '/page/order/orderDetailsSDW',   //订单详情 标准 SD-WAN
          component: OrderDetailsSDW,
        },
        {
          path: '/page/order/BusinessOrder',   //业务订购
          component: BusinessOrder,
        },
        {
          path: '/page/order/BusinessOrderSDW',   //业务订购SD-WAN
          component: BusinessOrderSDW,
        },
        {
          path: '/page/order/Ordercustom',
          component: Ordercustom,
        },
        {
          path: '/page/order/OrdercustomDetail',
          component: OrdercustomDetail,
        },
        {
          path: '/page/order/Mybusiness',   //已订业务
          component: Mybusiness,
        },
      ]
    },
    {
      path: '/page/product',
      component: layout,
      children:[
        {
          path: '/page/product/productList',  //产品列表
          component: ProductList,
        },
        {
          path: '/page/product/ProductPage',  //产品页
          name: 'ProductPage',
          component: ProductPage
        },
      ]
    },
    {
      path: '/page/cloud',
      component: layout,
      children:[
        {
          path: '/page/cloud/cloudMonitoring',  //云链接监控
          component: CloudMonitoring,
        },
        {
          path: '/page/cloud/SDWMonitoring',  //SD-WAN 云链接监控
          component: SDWMonitoring,
        },
      ]
    },
    {
      path: '/Customized',
      name: 'Customized',
      component: layout,
      children:[
        {
          path: '/Customized',  //定制化询价
          component: Customized,
        },
      ]
    },
    {
      path:'/user',
      component:layout,
      children:[
        {
          path: '/user/Dashboard',  //dashboard
          component: Dashboard,
        },
      ]
    },
    //表单-工单
    {
      path: '/from',
      component: layout,
      children: [
        {
          path: '/from/fromListPage', //工单列表
          component: fromListPage,
        }, {
          path: '/from/CreatFromPage', //新建工单
          component: CreatFromPage,
        },
      ]
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    },

  ]
})

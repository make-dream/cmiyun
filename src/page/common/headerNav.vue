<template>
  <div class="headerNav">
        <div class="head">
            <div class="menu pull-left">
                <Icon type="md-menu" />
                <Nav></Nav>
            </div>
            <div class="logo pull-left">
                <img src="../../assets/img/logo.png" alt="" @click="jump">
                <h4>Cloud Bussiness Platform | CMI</h4>
            </div>
            <ul class="list pull-right">
                <li @click="toWork">
                    <Dropdown >
                    <a href="javascript:void(0)">
                        Form
                    </a>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown>
                    <a href="javascript:void(0)">
                        Enterprise
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>Profiles</DropdownItem>
                        <DropdownItem>Accounts</DropdownItem>
                        <DropdownItem>Certified</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </li>
                <li>
                    <img src="../../assets/img/uesr.png" alt="">
                    <Dropdown @on-click="changeMenu">
                    <a href="javascript:void(0)">
                        User
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>Accounts</DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                        <DropdownItem name="loginOut">{{ $t('navbar.logOut') }}</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </li>
            </ul>
        </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Nav from '../common/nav'
export default {
    data() {
        return {
          show:false,
        }
    },
    methods: {
        changeMenu(name){
          if(name=='loginOut'){
            this.$router.push({
              path:'../../Login'
            })
            sessionStorage.removeItem('user');
          }

      },
      toWork(name){
          this.$router.push({
            path:'/from/fromListPage'
          })
      },
      jump(){
          this.$router.push('/')
      }
    },
    components: {
        Nav,
    }
}
</script>

<style lang="less">
.headerNav{
    width: 100%;
    height: 80px;
    border-bottom:2px solid #42a5f6;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 999;
    .head{
      /*width: 1200px;*/
      margin: 0 auto;
    }
    .menu{
        width: 80px;
        height: 80px;
        background: #42a5f6;
        text-align: center;
        position: relative;
        line-height: 80px;
        cursor:pointer;
        .ivu-icon-md-menu{
            color:#fff;
            font-size: 40px;
        }
        .navList{
            width: 240px;
            position: absolute;
            left: 0;
            top: 80px;
            z-index: 999;
        }
    }

    .logo{
        height:80px;
        margin-left:30px;
        img{
          margin-top: 18px;
          margin-right: 20px;
          cursor: pointer;
          float: left;
        }
        h4{
            font-size: 24px;
            float: left;
            color: #475867;
            font-weight: 400;
            line-height: 80px;
        }
    }
    .list{
        padding-top: 30px;
        padding-left: 20px;
        li{
            font-size: 16px;
            float: left;
            color:#42a5f6;
            margin-right: 50px;
            cursor: pointer;
            a{
                color:#42a5f6;
            }
            .ivu-dropdown-item{
              width: 100%;
            }
            img{
                display: block;
                width: 30px;
                height: 30px;
                float: left;
                margin-right: 10px;
                margin-top: -5px;
            }
            &:last-child{
                margin-right: 30px;
             }
        };
    }
}
</style>

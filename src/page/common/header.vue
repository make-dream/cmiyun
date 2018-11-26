<template>
  <div id="header">
    <div class="border">
      <div class="border_logo">
        <img src="../../assets/img/logo.png" alt="" @click="jump()">
        <h4>Cloud Bussiness Platform | CMI  </h4>
      </div>
      <ul class="list">
        <li><span> Notification</span><Icon type="ios-arrow-down" /></li>
        <li>
          <Dropdown>
            <a href="javascript:void(0)">
              Help
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>Quick Start</DropdownItem>
              <DropdownItem>Tech Support</DropdownItem>
            </DropdownMenu>
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
          <Dropdown>
            <a href="javascript:void(0)">
              User
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>Accounts</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>$t('navbar.logOut')</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
      </ul>
    </div>

  </div>
</template>

<style lang="less">
  #header{
    width: 100%;
    height: 80px;
    border-bottom: 2px solid #42a5f6;
    background: white;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    .border{
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h4{
        font-size: 24px;
        display: inline-block;
        color: #475867;
        font-weight: 400;
      }
      .border_logo{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          margin-right: 20px;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }
      .list{
        display: flex;
        justify-content: center;
        align-items: center;
        .ivu-select-dropdown{
          background: #fff;
        }
        .ivu-dropdown-menu{
          background: #fff;
          li{
            color: #4486fa;
          }
        }
        li{
          font-size: 16px;
          color: #fff;
          margin-right: 45px;
          cursor: pointer;

          a{
            color: #42a5f6;
          }
        };
      }
    }
  }
</style>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{

      }
    },
    methods: {
      jump(){
        this.$router.push('/')
      }
    }
  }
</script>



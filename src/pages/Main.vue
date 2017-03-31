<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="20" class="logo">
        <img src="../assets/logo.png" /> <span>麦粒贷管理后台</span>
      </el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner"><img src="../assets/user.png"/> {{userName}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-show="false">我的消息</el-dropdown-item>
            <el-dropdown-item @click.native="changePassword">修改密码</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside>
        <el-menu :default-active="$route.path" theme="dark" unique-opened router>
          <template v-for="(item,index) in menuList ">
            <el-submenu v-if="item.children && item.children.length" :index="index+''">
              <template slot="title"><i class="el-icon-menu"></i>{{item.permissionName}}</template>
              <el-menu-item v-for="(node,i) in item.children" :key="node.permissionUrl" :index="node.permissionUrl"><i class="el-icon-document"></i>{{node.permissionName}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item.permissionUrl"><i class="el-icon-document"></i>{{item.permissionName}}</el-menu-item>
          </template>
        </el-menu>
      </aside>
      <section class="content-container">
        <el-col :span="24" class="breadcrumb-container">
          <strong class="title">{{$route.name}}</strong>
          <el-breadcrumb separator="/" class="breadcrumb-inner">
            <el-breadcrumb-item v-for="item in $route.matched" :key="item.name">
              {{ item.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="content-wrapper">
          <transition>
            <router-view></router-view>
          </transition>
        </el-col>
      </section>
      <ml-change-password ref="changePassword" changeType="2"></ml-change-password>
    </el-col>
  </el-row>
</template>
<script>
  import userUtil from '../common/userUtil'
  import mlChangePassword from '../component/_changePassword.vue'
  export default {
    data() {
      return {
        userName: '',
        menuList: []
      }
    },
    methods: {
      changePassword() {
        this.$refs.changePassword.show()
      },
      //退出登录
      logout() {
        this.$confirm('确认退出登录吗?', '提示', {}).then(() => {
          userUtil.sid('')
          this.$router.push('/login')
        }).catch(() => {

        });
      },
      pageInit() {
        this.userName = userUtil.name()
      },
      getMenuList() {
        var postData = {
          id: userUtil.uid()
        }
        this.$http.post('', postData).then(response => {
          let {
            status,
            body
          } = response;
          this.menuList = body.result;
        })
           
      }
    },
    mounted() {
      this.pageInit()
      this.getMenuList()
    },
    components: {
      mlChangePassword
    }
  }

</script>
<style scoped>
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }
  
  .header {
    height: 60px;
    line-height: 60px;
    background: #1F2D3D;
    color: #c0ccda;
  }
  
  .logo {
    font-size: 15px;
  }
  
  .logo img {
    width: 40px;
    float: left;
    margin: 10px 10px 10px 18px;
  }
  
  .userinfo {
    text-align: right;
    padding-right: 35px;
  }
  
  .userinfo-inner {
    color: #c0ccda;
    cursor: pointer;
  }
  
  .userinfo-inner img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }
  
  .main {
    background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  }
  
  .main aside {
    width: 200px;
    overflow-y: auto;
    overflow: auto;
    height: 100%;
  }
  
  .main ul {
    margin-bottom: 50px;
  }
  
  .el-submenu [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
  }
  
  .el-menu-item [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
  }
  
  .content-container {
    background: #f1f2f7;
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    left: 200px;
    overflow-y: scroll;
    padding: 20px;
  }
  
  .breadcrumb-container {
    margin-bottom: 15px;
  }
  
  .title {
    width: 200px;
    float: left;
    color: #475669;
  }
  
  .breadcrumb-inner {
    float: right;
  }
  
  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }

</style>

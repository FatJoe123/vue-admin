<template>
  <section>
    <el-form :model="loginForm" :rules="loginRule" ref="loginForm" label-position="left" label-width="0px" class="login_form">
      <h3 class="login_title"></h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号" @keyup.enter.native="submit"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码" @keyup.enter.native="submit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked" checked>记住用户名</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%" :loading="logining" @click="submit">登 录</el-button>
      </el-form-item>
    </el-form>
    <ml-change-password ref="changePassword" changeType="1" :username="loginForm.username"></ml-change-password>
  </section>
</template>
<script>
  import userUtil from '../common/userUtil'
  import mlChangePassword from '../component/_changePassword.vue'
  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRule: {
          username: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        },
        checked: true,
        logining: false
      };
    },
    methods: {
      submit() {
        this.$refs.loginForm.validate((valid) => {
          if (valid && !this.logining) {
            let _data = {
              username: this.loginForm.username,
              password: this.loginForm.password
            }
            this.logining = true
            this.$http.post('', _data).then(response => {
              let {
                status,
                body
              } = response
              this.logining = false
              if (0 == body.code) {
                userUtil.sid(body.result.session)
                userUtil.uid(body.result.user.id)
                userUtil.name(body.result.user.realname)
                if (this.checked) {
                  userUtil.account(body.result.user.username)
                } else {
                  userUtil.account('')
                }
                this.$router.push('/home')
              } else if (10211 == body.code) {
                this.loginForm.password = ''
                this.$refs['changePassword'].show()
              } else {
                this.$message.error(response.body.message)
              }
            }, response => {
              this.logining = false
            })
          } else {
            return false;
          }
        });
      },
      pageInit() {
        if (userUtil.account()) {
          this.loginForm.username = userUtil.account()
        }
      }
    },
    mounted: function () {
      this.pageInit()
    },
    components: {
      mlChangePassword
    }
  }

</script>
<style scoped>
  .login_form {
    width: 360px;
    margin: 10% auto;
    padding: 20px;
    border-top: 0;
    background: #fff;
    color: #666;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 2px 4px 0px, rgba(0, 0, 0, 0.0392157) 0px 0px 6px 0px;
  }
  
  .login_title {
    /*margin: 0;
    text-align: center;
    padding: 0 20px 20px 20px;
    font-size: 22px;
    font-weight: 400;
    color: #1f2f3d;*/
    width: 100%;
    height: 50px;
    margin: 10px auto 20px auto;
    background: url("../assets/title.png") center no-repeat;
    background-size: contain;
  }

</style>

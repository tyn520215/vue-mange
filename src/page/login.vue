<template>
    <div id="login">
      <div id="login_title">
        <h2>GakkiXiaoT</h2>
      </div>
      <el-form :model="loginFrom" :rules="rules" ref="loginFrom" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名"  prop="username">
          <el-input placeholder="请输入用户名"  v-model="loginFrom.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"  prop="username">
          <el-input type="password" placeholder="请输入用户名"  v-model="loginFrom.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-button" @click="submitForm('loginFrom')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import {accountLogin} from '../store/getData'
    export default {
        name: 'App',
        data () {
            return{
              loginFrom:{
                username:null,
                password:null,
              },
              rules:{
                username: [
                  { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                  { required: true, message: '请输入密码', trigger: 'blur' }
                ],
              },
            }
        },
      methods:{
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {

              const res = accountLogin(this.loginFrom.username,this.loginFrom.password);
              console.log(res);
              if(res==undefined){
                this.$message({
                  type: 'success',
                  message: '登录成功'
                });
                this.$router.push('manage')
              }else{
                this.$message({
                  type: 'error',
                  message: res.message
                });
              }
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
    .app input{
      width: 100px;
      height: 30px;
    }
    .login-button{width: 200px;}
    a {
        color: #42b983;
    }
    .el-form-item{width: 300px;height: 50px;line-height: 50px;margin: 0 auto;margin-bottom: 20px;}
  #login{    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);width: 500px;height: 300px;border: 1px solid #e3e3e3;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);    padding: 20px;}
    #login h2{margin-bottom: 60px;}
</style>

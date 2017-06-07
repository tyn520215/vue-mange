<template>
    <div id="Login">
      <div id="login_title">
        <h2>后台管理系统</h2>
      </div>
      <el-form :model="loginFrom" :rules="rules" ref="loginFrom" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名"  prop="username">
          <el-input placeholder="请输入用户名"  v-model="loginFrom.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"  prop="username">
          <el-input type="password" placeholder="请输入用户名"  v-model="loginFrom.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginFrom')">登录</el-button>
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
    a {
        color: #42b983;
    }
    .el-form-item{width: 300px;height: 50px;line-height: 50px;margin: 0 auto;margin-bottom: 20px;}
  #login{margin-top: 150px;}
</style>

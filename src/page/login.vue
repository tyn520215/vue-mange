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
  import axios from 'axios';

  export default {
        name: 'App',
        data () {
            return{
              loginCode:null,
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
              let date =new Date();
               let newdate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
              console.log(newdate)
              var data = {
                  employName:this.loginFrom.username,
                  employJoinDate:newdate,
                  employCode:this.loginFrom.password+'Gakki'
              }
              axios.get('http://localhost:8080/api/login')
                .then(response => {
                    if(response.data.code == 0){
                      this.$message({
                        type: 'success',
                        message: '登录成功'
                      });
                    this.$router.push('manage');
                this.$store.dispatch('addemploay',data);

              }else{
                this.$message({
                  type: 'error',
                  message: '登录失败'
                });
              }
            })
            }else {
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

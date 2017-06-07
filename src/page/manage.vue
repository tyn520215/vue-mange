<template>
    <div class="manage fillcontain">
      <el-row style="height: 100%;">
        <el-col :span="4"  style="min-height: 950px; background-color:rgb(50, 64, 87);">
          <el-menu :default-active="defaultActive" style="height: 100%;" theme="dark" router>
            <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-document"></i>机构审批</template>
              <el-menu-item index="auditSucceed">机构列表</el-menu-item>
              <el-menu-item index="employeeList">额度配置表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-plus"></i>机构管理</template>
              <el-menu-item index="limitDispose">员工列表</el-menu-item>
              <el-menu-item index="organizationList">业务员列表</el-menu-item>
              <el-menu-item index="roleList">角色列表</el-menu-item>
              <el-menu-item index="salesmanList">合作方列表</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="20" style="height: 100%;overflow: auto;">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      computed: {
        defaultActive: function(){
          return this.$route.path.replace('/', '');
        }
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo{width: 320px;}
  /*.el-menu-item-group__title{width: 320px}*/
  .fillcontain{width: 100%;height: 100%}
</style>

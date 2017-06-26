<template>
  <div>
    <span class="employ_span">机构审核 > <em style="color: #3190e8">进入该系统的人列表</em></span>
    <div style="padding: 20px;">
      <el-table
        :data="items"
        border
        style="width: 100%;">
        <el-table-column
          label="加入时间"
          width="180" align="center">
          <template scope="scope">
            <span class="center">{{ scope.row.employJoinDate }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="名称"
          width="180" align="center">
          <template scope="scope">
            <span class="center">{{ scope.row.employName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="xxxx"
          width="180" align="center">
          <template scope="scope">
            <span class="center">{{ scope.row.employCode }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data(){
        return {
            items:this.$store.state.employList
        }
    },
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

    a {
        color: #42b983;
    }
    .employ_span{
      float: left;
      margin: 20px;
    }
</style>

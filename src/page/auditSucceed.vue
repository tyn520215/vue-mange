<template>
  <div>
    <span class="aduit_span">机构审核 > <em style="color: #3190e8">机构列表</em></span>
    <div style="padding: 20px;">
      <el-table
        :data="allFrom"
        border
        style="width: 100%;">
        <el-table-column
          label="序号"
          width="180" align="center">
          <template scope="scope">
            <span class="center">{{ scope.row.companyOid }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="公司名称"
          width="180" align="center">
          <template scope="scope">
            <span class="center">{{ scope.row.companyName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="公司code"
          width="180" align="center">
          <template scope="scope">
            <span class="center">{{ scope.row.companyCode }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template scope="scope">
            <el-button
              size="small"
              @click="dialogFormVisible = true">添加</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="添加" :visible.sync="dialogFormVisible">
        <el-form :model="addFrom" :rules="rules">
          <el-form-item label="公司名称" label-width="100px">
            <el-input v-model="addFrom.companyName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="公司code" label-width="100px">
            <el-input v-model="addFrom.companyCode" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="sureadd">确 定</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>

<script>
//  import { mapState } from 'vuex'
    export default {
      data(){
        return{
            allFrom:[{
              companyOid:'1',
              companyName:'gakki',
              companyCode:'tyernsd',
            }],
          addFrom:{
            companyOid:'1',
            companyName:'',
            companyCode:'',
          },
          rules: {
            companyName: [
              { required: true, message: '请输入名称', trigger: 'change' }
            ],
            companyCode: [
              { type: 'date', required: true, message: '请输入公司code', trigger: 'change' }
            ],
          },
          dialogFormVisible : false
        }
      },
      methods:{
        sureadd(){
          this.addFrom.companyOid++;
          this.allFrom.push({...this.addFrom});
          this.addFrom.companyCode='';
          this.addFrom.companyName='';
          this.addFrom.companyOid=this.addFrom.companyOid++;
          this.dialogFormVisible = false
        },
        handleDelete(index){
            if(index){
              this.allFrom.splice(index, 1);
            }else{
              this.$message({
                message: '没有该数据！'
              });
            }
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
    .aduit_span{    float: left;
      padding: 20px;}
    li {
        display: inline-block;
        margin: 0 10px;
    }
    .center{text-align: center}
    a {
        color: #42b983;
    }
</style>

/**
 * Created by Administrator on 2017/6/2.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import actions from '../store/action';
import mutations from '../store/mutation';

Vue.use(Vuex);
const state = {
  loginname:null,
  id:null,
  accessToken:null,
  auditSucceedList:[{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }],
  employList:{},
  limit:{},
  roleList:{},
  salemanList:{},
  partherList:{},
  organList:{}
}
const store = new Vuex.Store({
  state,
  actions,
  mutations
})


export default store



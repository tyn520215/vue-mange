/**
 * Created by Administrator on 2017/6/2.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import actions from '../store/action';
import mutations from '../store/mutation';

Vue.use(Vuex);
const state = {
  code:null,
  loginname:null,
  id:null,
  accessToken:null,
  auditSucceedList:null,
  employList:[{
  "employName":"Gakki",
  "employJoinDate":"2017-03-02",
  "employCode":"GakkiGakki"
}],
  limit:null,
  roleList:null,
  salemanList:null,
  partherList:null,
  organList:null
}
const store = new Vuex.Store({
  state,
  actions,
  mutations
})


export default store



/**
 * Created by Administrator on 2017/6/2.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import actions from '../store/action';
import mutations from '../store/mutation';

Vue.use(Vuex);
const state = {
  results:{}
}
const store = new Vuex.Store({
  state,
  actions,
  mutations
})


export default store



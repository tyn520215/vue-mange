/**
 * Created by Administrator on 2017/6/2.
 */
import ajax from '../utils/ajax';

export default {
  addNum({commit,state}){
      ajax('GET','http://gank.io/api/data/福利/10/1').then(res =>{
        commit('GET_DATA',res.results)
      })
  }
}


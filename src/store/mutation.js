/**
 * Created by Administrator on 2017/6/2.
 */
export const GET_DATA = 'GET_DATA';

export default {
  [GET_DATA](state, payload){
    state.results = payload
  }
}

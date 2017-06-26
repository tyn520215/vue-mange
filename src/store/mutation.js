/**
 * Created by Administrator on 2017/6/2.
 */
export const GET_AUDIT_DATA = 'GET_AUDIT_DATA';
export const GET_AUDIT_ALLDATA = 'GET_AUDIT_ALLDATA';
export const GET_EMPLOY_DATA = 'GET_EMPLOY_DATA';
export const GET_LOGIN = 'GET_LOGIN';
export const DELETE_AUDIT = 'DELETE_AUDIT';
export const LOGIN_DATA = 'LOGIN_DATA';
export const GET_ADDEMPLOY_DATA = 'GET_ADDEMPLOY_DATA';
export const GET_LIMIT_DATA = 'GET_LIMIT_DATA';
export const GET_ROLE_DATA = 'GET_ROLE_DATA';
export const GET_SALESMAN_DATA = 'GET_SALESMAN_DATA';
export const GET_PARTNER_DATA = 'GET_PARTNER_DATA';
export const GET_ORGAN_DATA = 'GET_ORGAN_DATA';


export default {
  [GET_LOGIN](state,payload){
    state.code = 0
  },
  [GET_AUDIT_DATA](state, payload){
      state.auditSucceedList.push(payload)
  },
  [GET_AUDIT_ALLDATA](state,payload){
    state.auditSucceedList = payload.data
  },
  [GET_ADDEMPLOY_DATA](state, payload){
    state.employList.push(payload)
    console.log(state.employList);

  },
  [DELETE_AUDIT](state,index){
    state.auditSucceedList.splice(index,1)
  },
  [LOGIN_DATA](state,payload){
    state.accessToken = payload.accessToken;
    state.loginname = payload.loginname;
    state.id = payload.id;
  },
  [GET_EMPLOY_DATA](state, payload){
    state.employList = payload
  },
  [GET_LIMIT_DATA](state, payload){
    state.limit = payload
  },
  [GET_ROLE_DATA](state, payload){
    state.roleList = payload
  },
  [GET_SALESMAN_DATA](state, payload){
    state.salemanList = payload
  },
  [GET_PARTNER_DATA](state, payload){
    state.partherList = payload
  },
  [GET_ORGAN_DATA](state, payload){
    state.organList = payload
  },
}

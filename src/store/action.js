/**
 * Created by Administrator on 2017/6/2.
 */
import ajax from '../utils/ajax';
export default {
  sureadd({commit,state},addFrom){
        commit('GET_AUDIT_DATA',addFrom)
  },
  addAll({commit,state}){
    commit('GET_AUDIT_ALLDATA')
  },
  delete({commit,state},index){
    commit('DELETE_AUDIT',index)
  },
  employee({commit,state}){
    ajax('../jsonTest/audit.json').then(res =>{
      commit('GET_EMPLOY_DATA',res.data)
    })
  },
  login({commit,state},){
    ajax('POST','http://192.168.2.25:8380/partner/manager/web/login.action',data).then(res =>{
          commit('LOGIN_DATA',res)
    })

  },
  partner({commit,state}){
      ajax('../jsonTest/audit.json').then(res =>{
      commit('GET_PARTNER_DATA',res.data)
    })
  },
  limit({commit,state}){
    ajax('../jsonTest/audit.json').then(res =>{
      commit('GET_LIMIT_DATA',res.data)
    })
  },
  findRole({commit,state}){
    ajax('../jsonTest/audit.json').then(res =>{
      commit('GET_ROLE_DATA',res.data)
    })
  },
  findSalesman({commit,state}){
    ajax('../jsonTest/audit.json').then(res =>{
      commit('GET_SALESMAN_DATA',res.data)
    })
  },
  findCompany({commit,state}){
    ajax('../jsonTest/audit.json').then(res =>{
      commit('GET_EMPLOY_DATA',res.data)
    })
  },

}


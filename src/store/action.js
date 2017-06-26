/**
 * Created by Administrator on 2017/6/2.
 */
import axios from 'axios';
export default {
  loginUser({commit,state}){
    axios.get('http://localhost:8080/api/login')
      .then(function (response) {
        commit('GET_LOGIN',response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  sureadd({commit,state},addFrom){
    console.log(addFrom)
        commit('GET_AUDIT_DATA',addFrom)
  },
  addemploay({commit,state},addemploy){
    commit('GET_ADDEMPLOY_DATA',addemploy)
  },
  addAll({commit,state}){
    axios.get('http://localhost:8080/api/audit')
      .then(function (response) {
        commit('GET_AUDIT_ALLDATA',response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  delete({commit,state},index){
    commit('DELETE_AUDIT',index)
  },
  employee({commit,state}){
    axios.get('http://localhost:8080/api/employ')
      .then(function (response) {
        commit('GET_EMPLOY_DATA',response.data);

      })
      .catch(function (error) {
        console.log(error);
      });
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


/**
 * Created by Administrator on 2017/6/5.
 */
import axios from 'axios';

/**
 * 账号密码登录
 */
export const accountLogin = () => {
  let resulte = '';
  axios.get('http://localhost:8080/api/login')
    .then(response => {
      resulte = response.data.code;
      return resulte;
      // return JSON.parse(response).data.code;
    })
    .catch(function (error) {
      console.log(error);
    });
};


/**
 * 退出登录
 */


/**
 * Created by Administrator on 2017/6/5.
 */
import ajax from '../utils/ajax';

/**
 * 账号密码登录
 */
export const accountLogin = (username, password) => {
    let data = {
      'employeeDTO.name':username,
      'employeeDTO.password':password
    };
    ajax('POST','http://localhost:8380/partner/manager/web/login.action',data,false)
      .then(res =>{
        console.log(res)
    })
};


/**
 * 退出登录
 */

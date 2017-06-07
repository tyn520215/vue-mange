import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const auditSucceed = r => require.ensure([], () => r(require('@/page/auditSucceed')), 'auditSucceed');
const employeeList = r => require.ensure([], () => r(require('@/page/employeeList')), 'employeeList');
const limitDispose = r => require.ensure([], () => r(require('@/page/limitDispose')), 'limitDispose');
const organizationList = r => require.ensure([], () => r(require('@/page/organizationList')), 'organizationList');
const partner = r => require.ensure([], () => r(require('@/page/partner')), 'partner');
const roleList = r => require.ensure([], () => r(require('@/page/roleList')), 'roleList');
const salesmanList = r => require.ensure([], () => r(require('@/page/salesmanList')), 'salesmanList');



export default new Router({
  routes: [
    {
      path: '/',
      component: login,
    },
    {
      path:'/manage',
      component:manage,
      children:[
        {
          path:'/auditSucceed',
          component:auditSucceed
        },
        {
          path:'/employeeList',
          component:employeeList
        },
        {
          path:'/limitDispose',
          component:limitDispose
        },
        {
          path:'/organizationList',
          component:organizationList
        },
        {
          path:'/partner',
          component:partner
        },
        {
          path:'/roleList',
          component:roleList
        },
        {
          path:'/salesmanList',
          component:salesmanList
        },
      ]
    }
  ]
})

/**
 * Created by Administrator on 2017/6/2.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import actions from '../store/action';
import mutations from '../store/mutation';

Vue.use(Vuex);
const state = {
  loginname:null,
  id:null,
  accessToken:null,
  auditSucceedList:[
    {
    "companyCode": "sdfsd",
    "companyName": "bbb",
    "companyOid": 1
  },
    {
      "companyCode": "sdfh",
      "companyName": "ccc",
      "companyOid": 2
    },
    {
      "companyCode": "kld",
      "companyName": "sdfsd",
      "companyOid": 3
    },
    {
      "companyCode": "aaa",
      "companyName": "aaa",
      "companyOid": 4
    },
    {
      "companyCode": "ssssss",
      "companyName": "ssssss",
      "companyOid": 5
    },
    {
      "companyCode": "12341234",
      "companyName": "321234",
      "companyOid": 6
    },
    {
      "companyCode": "sssssss",
      "companyName": "戈工要在地在2仍其中",
      "companyOid": 7
    },
    {
      "companyCode": "tttt",
      "companyName": "niahi",
      "companyOid": 8
    },
    {
      "companyCode": "11",
      "companyName": "1",
      "companyOid": 9
    },
    {
      "companyCode": "1",
      "companyName": "1111111111111111",
      "companyOid": 10
    }],
  employList:[
    {
      "employeeOid": 1,
      "name": "admin",
      "roleName": "系统管理员角色",
      "roleOid": 1
    },
    {
      "employeeOid": 2,
      "name": "BMD",
      "roleName": "业务管理部",
      "roleOid": 2
    },
    {
      "employeeOid": 3,
      "name": "LCR",
      "roleName": "法律合规审查组",
      "roleOid": 3
    },
    {
      "employeeOid": 4,
      "name": "PMA",
      "roleName": "产品市场分析组",
      "roleOid": 4
    },
    {
      "employeeOid": 5,
      "name": "FA",
      "roleName": "财报分析组",
      "roleOid": 5
    },
    {
      "employeeOid": 6,
      "name": "BA",
      "roleName": "企业经营分析组",
      "roleOid": 6
    },
    {
      "employeeOid": 7,
      "name": "ST",
      "roleName": "现场考察组",
      "roleOid": 7
    },
    {
      "employeeOid": 8,
      "name": "RM",
      "roleName": "风险管理会副主任",
      "roleOid": 8
    },
    {
      "employeeOid": 9,
      "name": "RMO",
      "roleName": "风险管理会主任",
      "roleOid": 9
    },
    {
      "employeeOid": 10,
      "name": "多个实施大幅",
      "roleName": "风险管理会主任",
      "roleOid": 9
    }
  ],
  limit:[
    {
      "partnerPositionOid": 1,
      "positionNum": 2000000,
      "starLevel": 1,
      "starLevelName": "1星"
    },
    {
      "partnerPositionOid": 2,
      "positionNum": 5000000,
      "starLevel": 2,
      "starLevelName": "2星"
    },
    {
      "partnerPositionOid": 3,
      "positionNum": 8000000,
      "starLevel": 3,
      "starLevelName": "3星"
    },
    {
      "partnerPositionOid": 4,
      "positionNum": 15000000,
      "starLevel": 4,
      "starLevelName": "4星"
    },
    {
      "partnerPositionOid": 5,
      "positionNum": 20000000,
      "starLevel": 5,
      "starLevelName": "5星"
    },
    {
      "partnerPositionOid": 6,
      "positionNum": 30000000,
      "starLevel": 6,
      "starLevelName": "6星"
    }
  ],
  roleList:[
    {
    "employeeOid": 1,
    "name": "admin",
    "roleName": "系统管理员角色",
    "roleOid": 1
  },
    {
      "employeeOid": 2,
      "name": "BMD",
      "roleName": "业务管理部",
      "roleOid": 2
    },
    {
      "employeeOid": 3,
      "name": "LCR",
      "roleName": "法律合规审查组",
      "roleOid": 3
    },
    {
      "employeeOid": 4,
      "name": "PMA",
      "roleName": "产品市场分析组",
      "roleOid": 4
    },
    {
      "employeeOid": 5,
      "name": "FA",
      "roleName": "财报分析组",
      "roleOid": 5
    },
    {
      "employeeOid": 6,
      "name": "BA",
      "roleName": "企业经营分析组",
      "roleOid": 6
    },
    {
      "employeeOid": 7,
      "name": "ST",
      "roleName": "现场考察组",
      "roleOid": 7
    },
    {
      "employeeOid": 8,
      "name": "RM",
      "roleName": "风险管理会副主任",
      "roleOid": 8
    },
    {
      "employeeOid": 9,
      "name": "RMO",
      "roleName": "风险管理会主任",
      "roleOid": 9
    },
    {
      "employeeOid": 10,
      "name": "多个实施大幅",
      "roleName": "风险管理会主任",
      "roleOid": 9
    }
  ],
  salemanList:[
    {
      "companyName": "戈工要在地在2仍其中",
      "companyOid": 7,
      "name": "gakki",
      "phone": "12345678910",
      "salesmanOid": 1
    },
    {
      "companyName": "321234",
      "companyOid": 6,
      "name": "ccccccc",
      "phone": "18682495462",
      "salesmanOid": 2
    },
    {
      "companyName": "ssssss",
      "companyOid": 5,
      "name": "rocky6",
      "phone": "18688963948",
      "salesmanOid": 6
    },
    {
      "companyName": "ccc",
      "companyOid": 2,
      "name": "bbb",
      "phone": "11111111111",
      "salesmanOid": 11
    },
    {
      "companyName": "aaa",
      "companyOid": 4,
      "name": "111",
      "phone": "11111111112",
      "salesmanOid": 12
    },
    {
      "companyName": "321234",
      "companyOid": 6,
      "name": "23213",
      "phone": "11111111113",
      "salesmanOid": 13
    },
    {
      "companyName": "sdfsd",
      "companyOid": 3,
      "name": "4546",
      "phone": "11111111114",
      "salesmanOid": 14
    },
    {
      "companyName": "bbb",
      "companyOid": 1,
      "name": "456546",
      "phone": "11111111117",
      "salesmanOid": 15
    },
    {
      "companyName": "北京壮志凌云有限公司",
      "companyOid": 11,
      "name": "赵天霸",
      "phone": "13677778888",
      "salesmanOid": 16
    },
    {
      "companyName": "北京壮志凌云有限公司",
      "companyOid": 11,
      "name": "赵天霸1",
      "phone": "18219524966",
      "salesmanOid": 22
    }
  ],
  partherList:[
    {
      "agencyCode": "gakkixaot",
      "agencyName": "中国谁说的",
      "partnerAgencyOid": 1,
      "positionNum": 30000000,
      "salesmanName": "bbb",
      "starLevelName": "6星",
      "state": "pass"
    },
    {
      "agencyCode": "zbzx",
      "agencyName": "资本在线1",
      "partnerAgencyOid": 2,
      "positionNum": 15000000,
      "salesmanName": "ccccccc",
      "starLevelName": "4星",
      "state": "pass"
    },
    {
      "agencyCode": "zbzx1",
      "agencyName": "2",
      "partnerAgencyOid": 3,
      "positionNum": null,
      "salesmanName": "ccccccc",
      "starLevelName": null,
      "state": "register"
    },
    {
      "agencyCode": "zbzx2",
      "agencyName": "2",
      "partnerAgencyOid": 4,
      "positionNum": null,
      "salesmanName": "ccccccc",
      "starLevelName": null,
      "state": "join"
    },
    {
      "agencyCode": "tiny001",
      "agencyName": "谢安琪",
      "partnerAgencyOid": 5,
      "positionNum": 20000000,
      "salesmanName": "gakki",
      "starLevelName": "5星",
      "state": "pass"
    },
    {
      "agencyCode": "gakki01",
      "agencyName": null,
      "partnerAgencyOid": 6,
      "positionNum": null,
      "salesmanName": "ccccccc",
      "starLevelName": null,
      "state": "register"
    },
    {
      "agencyCode": "gakki04",
      "agencyName": null,
      "partnerAgencyOid": 7,
      "positionNum": null,
      "salesmanName": "gakki",
      "starLevelName": null,
      "state": "cooperate"
    },
    {
      "agencyCode": "rocky3",
      "agencyName": "江南皮革厂",
      "partnerAgencyOid": 8,
      "positionNum": 20000000,
      "salesmanName": "gakki",
      "starLevelName": "5星",
      "state": "pass"
    },
    {
      "agencyCode": "gakki001",
      "agencyName": null,
      "partnerAgencyOid": 9,
      "positionNum": null,
      "salesmanName": "gakki",
      "starLevelName": null,
      "state": "register"
    },
    {
      "agencyCode": "1231222d",
      "agencyName": null,
      "partnerAgencyOid": 10,
      "positionNum": null,
      "salesmanName": "gakki",
      "starLevelName": null,
      "state": "notPass"
    }
  ],
  organList:[ {
    "companyCode": "sdfsd",
    "companyName": "bbb",
    "companyOid": 1
  },
    {
      "companyCode": "sdfh",
      "companyName": "ccc",
      "companyOid": 2
    },
    {
      "companyCode": "kld",
      "companyName": "sdfsd",
      "companyOid": 3
    },
    {
      "companyCode": "aaa",
      "companyName": "aaa",
      "companyOid": 4
    },
    {
      "companyCode": "ssssss",
      "companyName": "ssssss",
      "companyOid": 5
    },
    {
      "companyCode": "12341234",
      "companyName": "321234",
      "companyOid": 6
    },
    {
      "companyCode": "sssssss",
      "companyName": "戈工要在地在2仍其中",
      "companyOid": 7
    },
    {
      "companyCode": "tttt",
      "companyName": "niahi",
      "companyOid": 8
    },
    {
      "companyCode": "11",
      "companyName": "1",
      "companyOid": 9
    },
    {
      "companyCode": "1",
      "companyName": "1111111111111111",
      "companyOid": 10
    }
    ]
}
const store = new Vuex.Store({
  state,
  actions,
  mutations
})


export default store



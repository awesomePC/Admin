import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login',
    meta: { title: '登录', noCache: true },
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/features/404'], resolve),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    hidden: false,
    children: [
      {
        path: '/index',
        component: (resolve) => require(['@/views/index'], resolve),
        name: 'Idex',
        meta: { title: 'Index', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    hidden: false,
    children: [
      {
        path: '/key',
        component: (resolve) => require(['@/views/key'], resolve),
        name: 'Key',
        meta: { title: 'Key', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    hidden: false,
    children: [
      {
        path: '/user',
        component: (resolve) => require(['@/views/user'], resolve),
        name: 'User',
        meta: { title: 'User', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    hidden: false,
    children: [
      {
        path: '/parameters',
        component: (resolve) => require(['@/views/parameters'], resolve),
        name: 'Parameters',
        meta: { title: 'Parameters', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    hidden: false,
    children: [
      {
        path: '/goods',
        component: (resolve) => require(['@/views/goods'], resolve),
        name: 'Goods',
        meta: { title: 'Goods', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    hidden: false,
    children: [
      {
        path: '/others',
        component: (resolve) => require(['@/views/others'], resolve),
        name: 'Others',
        meta: { title: 'Others', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    hidden: false,
    children: [
      {
        path: '/testhome',
        component: (resolve) => require(['@/views/testhome'], resolve),
        name: 'Test',
        meta: { title: 'Test', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
  {
    alwaysShow: true,
    children: [
      {
        component: (resolve) => require(['@/views/system/user/index'], resolve),
        hidden: false,
        meta: {
          icon: 'peoples',
          noCache: true,
          title: '用户管理'
        },
        name: 'User',
        path: 'user'
      },
      {
        component: (resolve) => require(['@/views/system/role/index'], resolve),
        hidden: false,
        meta: {
          icon: 'role',
          noCache: true,
          title: '角色管理'
        },
        name: 'Role',
        path: 'role'
      },
      {
        component: (resolve) => require(['@/views/system/menu/index'], resolve),
        hidden: false,
        meta: {
          icon: 'menu',
          noCache: true,
          title: '菜单管理'
        },
        name: 'Menu',
        path: 'menu'
      }
      // {
      //     component: "system/dept/index",
      //     hidden: false,
      //     meta: {
      //         icon: "dept",
      //         noCache: true,
      //         title: "部门管理"
      //     },
      //     name: "Dept",
      //     path: "dept"
      // },
      // {
      //     component: "system/job/index",
      //     hidden: false,
      //     meta: {
      //         icon: "Steve-Jobs",
      //         noCache: true,
      //         title: "岗位管理"
      //     },
      //     name: "Job",
      //     path: "job"
      // },
      // {
      //     component: "system/dict/index",
      //     hidden: false,
      //     meta: {
      //         icon: "dictionary",
      //         noCache: true,
      //         title: "字典管理"
      //     },
      //     name: "Dict",
      //     path: "dict"
      // },
      // {
      //     component: "system/timing/index",
      //     hidden: false,
      //     meta: {
      //         icon: "timing",
      //         noCache: true,
      //         title: "任务调度"
      //     },
      //     name: "Timing",
      //     path: "timing"
      // }
    ],
    component: Layout,
    hidden: false,
    meta: {
      'icon': 'system',
      'noCache': true,
      'title': '系统管理'
    },
    name: '系统管理',
    path: '/system',
    redirect: 'noredirect'
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/features/401'], resolve),
    hidden: true
  },
  { path: '*',
    redirect: '/404',
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: (resolve) => require(['@/views/features/redirect'], resolve)
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: (resolve) => require(['@/views/home'], resolve),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [
      {
        path: 'center',
        component: (resolve) => require(['@/views/system/user/center'], resolve),
        name: '个人中心',
        meta: { title: '个人中心' }
      }
    ]
  }
]

export default new Router({
  // mode: 'hash',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

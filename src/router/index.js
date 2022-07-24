/*
 * @Author: Harry
 * @Date: 2022-04-20 20:40:43
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-07-24 20:51:51
 * @FilePath: \vite\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import useStore from '@/store'

import Home from '@/views/home/Home.vue'
import TabNav from '@/views/TabNav/TabNav.vue'
import About from '@/views/About/About.vue'
// import ImgManage from '@/views/ImgManage/ImgManage.vue'
// import Setting from '@/views/Setting/Setting.vue'
// 按需引入
// const TabNav = () => import('@/views/TabNav/TabNav.vue')
// const About = () => import('@/views/About/About.vue')
const ImgManage = () => import('@/views/ImgManage/ImgManage.vue')
const Setting = () => import('@/views/Setting/Setting.vue')

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: TabNav,
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          title: '首页 | BlazeB2 图床'
        }
      },
      {
        path: '/imanage',
        name: 'imanage',
        component: ImgManage,
        meta: {
          title: '图床管理 | BlazeB2 图床'
        }
      },
      {
        path: '/setting',
        name: 'setting',
        component: Setting,
        meta: {
          title: '全局配置 | BlazeB2 图床'
        }
      },
      {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
          title: '关于页面 | BlazeB2 图床'
        }
      }
    ]
  }

]
const router = new VueRouter({
  routes
})
// 路由前置守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(
  (to, from) => {
    let storeInit = null
    if (storeInit === null) {
      storeInit = useStore()
    }
    if (to.path === '/home' || to.path === '/imanage' || to.path === '/setting') {
      storeInit.handleIsLogined()
      if (storeInit.isLogined) {
        storeInit.setNewAuthMsg()
      } else {
        console.log('您还未输入信息，还无法使用该程序')
      }
    }
  }
)
export default router

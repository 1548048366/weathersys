import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 引入组件
import showPage from "../components/showPage";
import chengdu from "../view/chengdu";
import dazhou from "../view/dazhou";
import xuanhan from "../view/xuanhan";
import yibin from "../view/yibin";
import mianyang from "../view/mianyang";
const  routes = [
  {
    path: '/',
    redirect: '/chengdu'
  },
  {
    path: '/showPage',
    component: showPage
  },
  {
    path: '/chengdu',
    component: chengdu
  },
  {
    path: '/mianyang',
    component: mianyang
  },
  {
    path: '/dazhou',
    component: dazhou
  },
  {
    path: '/xuanhan',
    component: xuanhan
  },
  {
    path: '/yibin',
    component: yibin
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router


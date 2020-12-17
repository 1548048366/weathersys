import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 引入组件
import showPage from "../components/showPage";
import city from "../view/city";


const  routes = [
  {
    path: '/showPage',
    component: showPage
  },
  {
    path: '/city',
    component: city
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router


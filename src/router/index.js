import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "@/views/home.vue";
import echarts from "@/views/echarts.vue";
import ueditor from "@/views/ueditor.vue";
import main from "@/views/main.vue";
import Login from '@/components/common/Login.vue';   //1.先导入Login组件

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/login'}, //4.添加重定向路由规则
  {path: '/login',component: Login},                          //2.然后导入一个新的路由规则
  {
    path: '/home',
    name:'home',
    component: home,
    children:[
      {path:'/main',name:'main', component:main},
      {path:'/echarts',name:'echarts', component:echarts},
      {path:'/ueditor',name:'ueditor',component:ueditor},

    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

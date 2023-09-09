import Vue from 'vue'
import Vuex from "vuex"//引用vuex
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css'
import store from './store'
import axios from "axios";//全局挂载axios


Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI,{size:"mini"});
Vue.prototype.$eventBus = new Vue();
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

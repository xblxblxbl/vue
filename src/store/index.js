import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  //全局状态，公共state状态，存储所有组件的状态,存对象
  state: {
    user:{
      name:'',
    }
  },
  //唯一取值方法，计算属性
  getters: {
    getUser(state){
      return state.user;
    }
  },
  //唯一可以修改state值的方法，同步阻塞的
  mutations: {
    updateUser(state,user){
      state.user=user;
    }
  },
  actions: {
    asyncUpdateUser(context,user){
      context.commit('updateUser',user);//调用mutations用commit来调，调actions用dispatch来调
    }
  },
  modules: {
  }
})

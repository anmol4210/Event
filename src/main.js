import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    
    events:{}
  },
  mutations: {
    storestatus(state,status){
      state.events[status.id]={value:status.stat}
    }

 },
 getters:{
   status:(state) => (id) => {
    
     let temp=state.events[id];
     if(temp){
       return temp
     }
     else{
     return {"value":"no"}
    } 
   }
 }
})

new Vue({
  router,
store,
 

  render: h => h(App)
}).$mount('#app')

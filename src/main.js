import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './registerServiceWorker'
import '@css/main.scss'
import api from './api/index'

Vue.config.productionTip = false
Vue.prototype.$http = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

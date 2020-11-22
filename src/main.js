import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//css
import '@/assets/style/base.scss'
//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//axios
import axios from '@/assets/api/axiosConfig'
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

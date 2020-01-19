import Vue from "vue";
import router from './router'
import App from './App'
import "babel-polyfill"
import './config/element-config'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

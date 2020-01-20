import Vue from "vue";
import routes from './router'
import App from './App'
import 'babel-polyfill'
import initRouter from './config/router'

Vue.config.productionTip = false;

export { initRouter }

new Vue({
  el: '#app',
  router: initRouter(routes),
  render: h => h(App)
})

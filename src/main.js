import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import router from './router'

import './css/reload-styles.css'
import './css/style.css'
import '../public/css/media.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

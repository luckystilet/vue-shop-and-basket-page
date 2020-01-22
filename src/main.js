import Vue from 'vue'
import App from './App.vue'
import store from './store/'

import './css/reload-styles.css'
import './css/style.css'
import '../public/css/media.css'


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

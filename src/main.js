import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/config/index'
import i18n from '@/config/i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

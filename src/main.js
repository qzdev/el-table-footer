// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import ElTableFooter from '../packages/index'

Vue.use(ElTableFooter)
Vue.use(ElementUi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

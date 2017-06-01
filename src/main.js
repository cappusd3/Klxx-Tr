// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './vuex/store'

// Vue.use(iView)
Vue.use(iView)

// custome directive global ?where is the correct space?
// Vue.directive('latex', {
//   bind (el, binding) {},
//   inserted (el, binding) {},
//   update (el, binding, vnode, oldVnode) {},
//   componentUpdated () {},
//   unbind () {}
// })

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

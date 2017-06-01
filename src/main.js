// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
  {path: '/goods', component: goods},
  {path: '/seller', component: seller},
  {path: '/ratings', component: ratings}
  ]
})

let vue = new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {App}
})

vue.$mount('#app')
router.push('/goods')

import Vue from 'vue'
import App from './App.vue'
import smoothScroll from "./lib/smooth-scroll.js";
Vue.use(smoothScroll)
new Vue({
  el: '#app',
  render: h => h(App)
})

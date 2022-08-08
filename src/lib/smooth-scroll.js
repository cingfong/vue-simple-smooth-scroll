import SmoothScroll from './smooth-scroll.vue'

const smoothScroll = {
  install(Vue, options) {
    Vue.component(SmoothScroll.name, SmoothScroll)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(smoothScroll)
}
export default smoothScroll


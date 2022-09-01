import Vue from 'vue'
import App from './App.vue'
import ayInput from "./components/ayInput.vue";
import ayInputAdd from "./components/ayInputAdd.vue";
import instal from 'ssy-npm-component/src/index'

const components = {
  ayInput,
  ayInputAdd
}
const install = (Vue) => {
  // 遍历注册全局组件
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}
Vue.config.productionTip = false
Vue.use(instal)
Vue.use(install)

new Vue({
  render: h => h(App),
}).$mount('#app')

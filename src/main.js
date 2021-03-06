import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require("./assets/main.scss")
require("./assets/animations.scss")

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import store from './store.js'//导入store对象

new Vue({
  el: '#app',
  store,//配置store选项，指定为store，相当于store：store，会自动注入子组件，在子组件中通过this.$store
  render: h => h(App)
})

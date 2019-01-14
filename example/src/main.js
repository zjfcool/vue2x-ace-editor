import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAceEditor from 'vue2x-ace-editor'

Vue.component(VueAceEditor.name,VueAceEditor);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

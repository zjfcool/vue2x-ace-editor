import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 全局引入将不用在init方法中引入资源
import ace from 'brace'
import "brace/ext/language_tools";
import "brace/mode/python"
import "brace/snippets/python"
import "brace/theme/eclipse"

import {VueAceEditor,VueSplitEditor,VueStaticHighlight} from 'vue2x-ace-editor'

Vue.component(VueAceEditor.name, VueAceEditor);
Vue.component(VueSplitEditor.name, VueSplitEditor);
Vue.component(VueStaticHighlight.name, VueStaticHighlight);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
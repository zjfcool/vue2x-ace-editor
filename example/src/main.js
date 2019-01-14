import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 全局引入将不用在init方法中引入资源
import ace from 'brace'
import "brace/ext/language_tools";
const languages = ["python"];
const themes = ["eclipse"];
languages.forEach(lang => {
  require(`brace/mode/${lang}`);
  require(`brace/snippets/${lang}`);
});

themes.forEach(theme => {
  require(`brace/theme/${theme}`);
});
import VueAceEditor from 'vue2x-ace-editor'

Vue.component(VueAceEditor.name, VueAceEditor);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
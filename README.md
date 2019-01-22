vue2x-ace-editor
=
[ace](https://ace.c9.io/) editor component by vue

[demo](https://zjfcool.github.io/vue2x-ace-editor/example/dist)

Update
=
1. 2019-1-17 添加VueSplitEditor组件
2. 2019-1-21 添加VueStaticHighlight组件

How to use
=
* Install
```javascript
npm install --save vue2x-ace-editor
```
* Import component
1. 默认
```javascript
import Editor from 'vue2x-ace-editor';
export default {
    ...
    components:{
        Editor
    }
    ...
}
```
2. 按需
```javascript
import {VueAceEditor,VueSplitEditor,VueStaticHighlight} from 'vue2x-ace-editor';
export default {
    ...
    components:{
        VueAceEditor,
        VueSplitEditor,
        VueStaticHighlight
    }
    ...
}
```

* Introduction of necessary documents

    `注意：引入资源时最好是以静态的方式引入，动态的方式引入，打包时webpack会将url里的变量替换为正则 .* 进而打包了不相关文件。(如: import('brace/ext/'+var),将打包ext文件下面的所有文件。)`
1. 方法一全局引入
```javascript
import ace from 'brace'
import 'brace/ext/language_tools';
import 'brace/mode/python'
import 'brace/snippets/python';
import 'brace/theme/eclipse';
```
2. 方法二,init时加载资源
```javascript
methods: {
    editorInit() {
        require("brace/ext/language_tools");
        require(`brace/mode/python`);
        require(`brace/snippets/python`);
        require(`brace/theme/eclipse`);
    }
}
```
* use component in template
1. VueAceEditor
``` html
<editor 
    height="300px" 
    ref="editor" 
    :content="content"  
    :options="{
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        tabSize:2
    }" 
    :fontSize='14' 
    :lang="'python'" 
    :theme="'eclipse'"
    @onChange="editorChange"
    @init="editorInit">
    <div>toolbar or something</div>    
</editor>
```
2. VueSplitEditor
``` html
<vue-split-editor
      ref="editor"
      lang="python"
      theme="monokai"
      height="330px"
      :splits="2"
      :options="{
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        tabSize: 2
       }"
      :content="content2"
      orientation="below"
    ></vue-split-editor>
```
3. VueStaticHighlight
```html
<vue-static-highlight
  content="balabala"
  theme="chrome"
  lang="text">
</vue-static-highlight>
```
[VueAceEditor|VueSplitEditor|VueStaticHighlight Document](https://github.com/zjfcool/vue2x-ace-editor/blob/master/editor/README.md)
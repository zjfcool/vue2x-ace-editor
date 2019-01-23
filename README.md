vue2x-ace-editor
=

[ace](https://ace.c9.io/) editor component by vue

Example
=
[demo](https://zjfcool.github.io/vue2x-ace-editor/example/dist)

Introduction
=
* VueSplitEditor: 分成一个或多个editor；
* VueStaticHighlight: 单纯高亮多种语言；
* VueAceEditor: 代码编辑器；

How to use
=
Install
-
```javascript
npm install --save vue2x-ace-editor
```
Import component
-
* 默认
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
* 按需
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

Introduction of necessary documents
-
`注意：引入资源时最好是以静态的方式引入，动态的方式引入，打包时webpack会将url里的变量替换为正则 .* 进而打包了不相关文件。(如: import('brace/ext/'+var),将打包ext文件下面的所有文件。)`
* 方法一全局引入
```javascript
import ace from 'brace'
import 'brace/ext/language_tools';
import 'brace/mode/python'
import 'brace/snippets/python';
import 'brace/theme/eclipse';
```
* 方法二,init时加载资源
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
Use component in template
-
* VueAceEditor
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
* VueSplitEditor
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
* VueStaticHighlight
```html
<vue-static-highlight
  content="balabala"
  theme="chrome"
  lang="text"
  @init="init">
  <div>toolbar or something</div> 
</vue-static-highlight>
```
[VueAceEditor|VueSplitEditor|VueStaticHighlight Document](https://github.com/zjfcool/vue2x-ace-editor/blob/master/editor/README.md)
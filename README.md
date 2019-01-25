vue2x-ace-editor
=
[![](https://img.shields.io/npm/v/vue2x-ace-editor.svg)](https://www.npmjs.com/package/vue2x-ace-editor)

[ace](https://ace.c9.io/) editor component by vue

Example
=
[demo](https://zjfcool.github.io/vue2x-ace-editor/example/dist)

Introduction
=
* VueSplitEditor: split one or more editor;
* VueStaticHighlight: Simply highlighting multiple languages;
* VueAceEditor: [Customizable Code Tips](https://github.com/zjfcool/vue2x-ace-editor/blob/master/example/src/views/SetComplete.vue);

How to use
=
Install
-
```javascript
npm install --save vue2x-ace-editor
```
Import component
-
* default
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
* on demand
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

Introducing dependency
-
`Note: When introducing resources, it is better to introduce them in a static way and in a dynamic way. When packaging, webpack will replace the variables in the URL with regular. * and then pack the irrelevant files. (e.g.'import ('brace/ext/'+var), all the files below the EXT file will be packaged. )`
* introduce globally
```javascript
import ace from 'brace'
import 'brace/ext/language_tools';
import 'brace/mode/python'
import 'brace/snippets/python';
import 'brace/theme/eclipse';
```
* introduce initially 
```javascript
methods: {
    editorInit() {
        require("brace/ext/language_tools");
        require("brace/mode/python");
        require("brace/snippets/python");
        require("brace/theme/eclipse");
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
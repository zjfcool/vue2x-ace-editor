vue2x-ace-editor
=
[ace](https://ace.c9.io/) editor component by vue

How to use
=
* Install
```javascript
npm install --save vue2x-ace-editor
```
* Import component
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
* Introduction of necessary documents
```javascript
import 'brace/ext/language_tools';
const languages = ['python'];
const themes = ['eclipse'];
languages.forEach(lang => {
    require(`brace/mode/${lang}`);
    require(`brace/snippets/${lang}`);
});

themes.forEach(theme => {
    require(`brace/theme/${theme}`);
});
```
* use component in template
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
    @onChange="editorChange">
    <div>toolbar or something</div>    
</editor>
```
Props
=
| name      | default    | type      | description     |
| ---------- | :-----------:  | :-----------: | :-----------: |
| content     | ''     | String | 内容 |
| theme     | ''     | String | 主题 |
| lang     | ''     | String | 编程语言 |
| fontSize     | 12     | Number | 字体大小 |
| width     | '100%'     | String | 编辑器宽度 |
| height     | '100%'     | String | 编辑器高度 |
| className     | 'vue-ace-editor'     | String | 自定义编辑器container class |
| readonly     | false     | Boolean | true的时候编辑器不可编辑 |
| options     | {}     | Object | [ace](https://ace.c9.io/) options |
Events
=
| name      | return    | type      | description     |
| ---------- | :-----------:  | :-----------: | :-----------: |
| onChange     | editor     | Object | 编辑器内容发生变化时触发 |
| onFocus     | editor     | Object | 光标focus时触发  |
| onBlur     | editor    | Object | 光标blur时触发 |
| onInput     | editor     | Object | 输入时触发 |
| onCopy     | editor     | Object | 复制代码时触发 |
| onPaste     | editor     | Object | 粘贴代码时触发 |
| init     | editor     | Object | 初始化 |
Functions
=
| name      | return    | params      | description     |
| ---------- | :-----------:  | :-----------: | :-----------: |
| setMode     | editor     |  | 设置编程语言 |
| setTheme     | editor     |  | 设置主题  |
| setFontSize     | editor    |  | 设置字体大小 |
| setValue     | editor     |  | 设置内容 |
| getValue     | editor     |  | 获取内容 |
| setOptions     | editor     |  | 设置配置项 |
| setReadonly     | editor     |  | 设置readonly |
| setCompleteData     | editor     | Array() | 添加实时提示代码 |
| setAutocomplete     | editor     |  | 主动触发代码提示功能 |
| getRowCol     | editor     |  | 获取行列 |
| resize     | editor     |  |  |
| setRange     | range     | (startRow, startCol, endRow, endCol) |  |
| getTextRange     | string     | range | 获取某行某列到*行*列 |
| save     | editor     | storageName | 保存到localstorage |
| undo     | editor     |  |  |
| redo     | editor     |  |  |
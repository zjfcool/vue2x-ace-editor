VueAceEditor
=
Props
-

| name      | default    | type      | description     |
| ---------- | :-----------:  | :-----------: | :-----------: |
| content     | ''     | String | 内容 |
| theme     | ''     | String | 主题 |
| lang     | ''     | String | 编程语言 |
| fontSize     | 12     | Number | 字体大小 |
| width     | '100%'     | String or Number | 编辑器宽度 |
| height     | '100%'     | String or Number | 编辑器高度 |
| className     | 'vue-ace-editor'     | String | 自定义编辑器container class |
| readonly     | false     | Boolean | true的时候编辑器不可编辑 |
| options     | {}     | Object | [ace options](https://github.com/ajaxorg/ace/wiki/Configuring-Ace)  |

Events
-

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
-

| name      | return    | params      | description     |
| ---------- | :-----------:  | :-----------: | :-----------: |
| setMode     | editor     |  | 设置编程语言 |
| setTheme     | editor     |  | 设置主题  |
| setFontSize     | editor    |  | 设置字体大小 |
| setValue     | editor     |  | 设置内容 |
| getValue     | editor     |  | 获取内容 |
| setOptions     | editor     |  | 设置配置项 |
| setReadonly     | editor     |  | 设置readonly |
| setCompleteData     | editor     | [Array](https://github.com/zjfcool/vue2x-ace-editor/blob/master/example/src/views/SetComplete.vue) | 添加实时提示代码 |
| setAutocomplete     | editor     |  | 主动触发代码提示功能 |
| getRowCol     | editor     |  | 获取行列 |
| resize     | editor     |  |  |
| setRange     | range     | (startRow, startCol, endRow, endCol) |  |
| getTextRange     | string     | range | 获取某行某列到*行*列 |
| save     | editor     | storageName | 保存到localstorage |
| undo     | editor     |  |  |
| redo     | editor     |  |  |

VueSplitEditor
=
Props
-

| name      | default    | type      | description     |
| ---------- | :-----------:  | :-----------: | :-----------: |
| content     | []     | Array | 各个split的内容 |
| theme     | ''     | String | 主题 |
| lang     | ''     | String | 编程语言 |
| fontSize     | 12     | Number | 字体大小 |
| width     | '100%'     | String or Number | 编辑器宽度 |
| height     | '100%'     | String or Number | 编辑器高度 |
| className     | 'vue-ace-editor'     | String | 自定义编辑器container class |
| readonly     | false     | Boolean | true的时候编辑器不可编辑 |
| options     | {}     | Object | [ace options](https://github.com/ajaxorg/ace/wiki/Configuring-Ace)  |
| orientation     | 'beside'('below' or 'beside')     | String | bewlow为纵向排列，beside为横向排列 |
| splits     | 2     | Number | 分割数目 |

Events
-

| name      | return    | type      | description     |
| ---------- | :-----------:  | :-----------: | :-----------: |
| onChange     | obj     | Object | 编辑器内容发生变化时触发 |
| onFocus     | split     | Object | 光标focus时触发  |
| onBlur     | split    | Object | 光标blur时触发 |
| onInput     | split     | Object | 输入时触发 |
| onCopy     | txt(复制内容)     | String | 复制代码时触发 |
| onPaste     | obj     | Object | 粘贴代码时触发 |
| init     |      |  | 初始化 |

Functions
-

| name      | return    | params      | description     |
| ---------- | :-----------:  | :-----------: | :-----------: |
| setMode     | split     |  | 设置编程语言 |
| setTheme     | split     |  | 设置主题  |
| setFontSize     | split    |  | 设置字体大小 |
| setValue     | split     |  | 设置内容 |
| getValue     | value:Array     |  | 获取各个editor的内容 |
| setOptions     | split     |  | 设置配置项 |
| setReadonly     | split     |  | 设置readonly |
| setCompleteData     |      | [Array](https://github.com/zjfcool/vue2x-ace-editor/blob/master/example/src/views/SetComplete.vue) | 添加实时提示代码 |
| resize     | split     |  |  |
| setRange     | range     | (startRow, startCol, endRow, endCol) |  |
| setOrientation     |      |  | 设置排列方式 |
| setSplits     |      |  | 设置分割数量 |

VueStaticHighlight
=

Props
-
| name      | default    | type      | description     |
| ---------- | :-----------:  | :-----------: | :-----------: |
| content     | "hello world"     | String | 内容 |
| theme     | ''     | String | 主题 |
| lang     | ''     | String | 编程语言 |
| width     | '100%'     | String or Number | 编辑器宽度 |
| height     | '100%'     | String or Number | 编辑器高度 |
| gutter     | true     | Boolean | 是否显示左侧行号默认显示 |
| trim     | false     | Boolean | 是否忽略两侧空字符，默认不忽略 |
| startLineNumber     | 1     | Number | 开始行号 |
| className     | 'static-highlight-editor'     | String | 自定义编辑器container class |

Events
-

| name      | return    | type      | description     |
| ---------- | :-----------:  | :-----------: | :-----------: |
| init     |      |  | 初始化 |

Functions
-

| name      | return    | params      | description     |
| ---------- | :-----------:  | :-----------: | :-----------: |
| getValue     | content     |  | 获取文本内容 |
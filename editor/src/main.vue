<template>
  <div class="editor-container" :style="{width:width,height:height}">
    <slot></slot>
    <div ref="editor" :class="className" :style="{width:width,height:height}"></div>
  </div>
</template>
<script>
import ace from "brace";
export default {
  name: "VueAceEditor",
  props: {
    lang: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: ""
    },
    fontSize: {
      type: Number,
      default: 12
    },
    content: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    className: {
      type: String,
      default: "vue-ace-editor"
    },
    options: {
      type: Object,
      default: () => ({})
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editor: null,
      session: null
    };
  },
  methods: {
    init() {
      this.editor = ace.edit(this.$refs.editor);
      this.editor.$blockScrolling = Infinity;
      this.session = this.editor.getSession();
      this.$emit("init");
      this.setMode();
      this.setTheme();
      this.setFontSize();
      this.setOptions();
      this.setValue();
      this.setReadonly();
      this.editor.on("focus", this.onFocus);
      this.editor.on("blur", this.onBlur);
      this.editor.on("copy", this.onCopy);
      this.editor.on("paste", this.onPaste);
      this.editor.on("change", this.onChange);
      this.editor.on("input", this.onInput);
    },
    setMode() {
      this.session.setMode(`ace/mode/${this.lang}`);
      return this.editor;
    },
    setTheme() {
      this.editor.setTheme(`ace/theme/${this.theme}`);
      return this.editor;
    },
    setFontSize() {
      this.editor.setFontSize(this.fontSize);
      return this.editor;
    },
    setValue() {
      this.session.setValue(this.content);
      return this.editor;
    },
    getValue() {
      return this.editor.getValue();
    },
    setOptions() {
      this.editor.setOptions(this.options);
      return this.editor;
    },
    setReadonly() {
      this.editor.setReadOnly(this.readonly);
      return this.editor;
    },
    setCompleteData(data) {
      ace.acequire("ace/ext/language_tools").addCompleter({
        getCompletions: function(editor, session, pos, prefix, callback) {
          return callback(null, data);
        }
      });
    },
    setAutocomplete() {
      this.editor.execCommand("startAutocomplete");
      return this.editor;
    },
    getRowCol() {
      return this.editor.selection.getCursor();
    },
    onFocus() {
      this.$emit("onFocus", this.editor);
    },
    onBlur() {
      this.$emit("onBlur", this.editor);
    },
    onChange() {
      this.$emit("onChange", this.editor);
    },
    onInput() {
      this.$emit("onInput", this.editor);
    },
    onCopy() {
      this.$emit("onCopy", this.editor);
    },
    onPaste() {
      this.$emit("onPaste", this.editor);
    },
    resize() {
      this.editor.resize();
      return this.editor;
    },
    setRange(startRow, startCol, endRow, endCol) {
      let Range = ace.acequire("ace/range").Range;
      return new Range(startRow, startCol, endRow, endCol);
    },
    /**
     * @param(r) type:new Range()
     */
    getTextRange(r) {
      return this.session.getTextRange(r);
    },
    save(storageName) {
      localStorage[storageName] = this.getValue();
      this.session.getUndoManager().markClean();
      return this.editor;
    },
    undo() {
      this.editor.undo();
      return this.editor;
    },
    redo() {
      this.editor.redo();
      return this.editor;
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    fontSize() {
      this.setFontSize();
    },
    content() {
      this.setValue();
    },
    theme() {
      this.setTheme();
    },
    lang() {
      this.setMode();
    }
  }
};
</script>
<style scoped>
.editor-container {
  position: relative;
}
</style>


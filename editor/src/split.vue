<template>
  <div class="editor-container" :style="{width:cW,height:cH}">
    <slot></slot>
    <div ref="editor" :class="className" :style="{width:cW,height:cH}"></div>
  </div>
</template>
<script>
import ace from "brace";
import "brace/ext/split";
const { Split } = ace.acequire("ace/split");
export default {
  name: "VueSplitEditor",
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
      type: Array,
      default: () => []
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
    },
    orientation: {
      type: String,
      default: "beside"
    },
    splits: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      editor: null,
      split: null
    };
  },
  computed: {
    cH() {
      if (typeof this.height === "number") return this.height + "px";
      if (typeof this.height === "string") return this.height;
      return "";
    },
    cW() {
      if (typeof this.width === "number") return this.width + "px";
      if (typeof this.width === "string") return this.width;
      return "";
    }
  },
  methods: {
    init() {
      this.editor = ace.edit(this.$refs.editor);
      this.$emit("init");
      this.split = new Split(
        this.editor.container,
        `ace/theme/${this.theme}`,
        this.splits
      );
      this.editor.env.split = this.split;
      this.splitEditor = this.split.getEditor(0);
      this.availableOptions = this.splitEditor.$options;
      this.split.forEach(editor => {
        editor.$blockScrolling = Infinity;
        editor.on("focus", this.onFocus);
        editor.on("blur", this.onBlur);
        editor.on("copy", this.onCopy);
        editor.on("paste", this.onPaste);
        editor.on("change", this.onChange);
        editor.on("input", this.onInput);
      });
      this.setMode();
      this.setTheme();
      this.setFontSize();
      this.setOptions();
      this.setValue();
      this.setReadonly();
      this.setOrientation();
    },
    setMode() {
      this.split.forEach(editor => {
        editor.getSession().setMode(`ace/mode/${this.lang}`);
      });
      return this.split;
    },
    setTheme() {
      this.split.forEach(editor => {
        editor.setTheme(`ace/theme/${this.theme}`);
      });
      return this.split;
    },
    setFontSize() {
      this.split.forEach(editor => {
        editor.setFontSize(this.fontSize);
      });
      return this.split;
    },
    setValue() {
      this.split.forEach((editor, index) => {
        editor.getSession().setValue(this.content[index] || "");
      });
      return this.split;
    },
    getValue() {
      let ret = []
      this.split.forEach(editor => {
        ret.push(editor.getValue());
      });
      return ret;
    },
    setOptions() {
      this.split.forEach(editor => {
        if (Object.keys(this.options).length === 0) return;
        Object.keys(this.options).forEach(k => {
          this.availableOptions.hasOwnProperty(k)
            ? editor.setOption(k, this.options[k])
            : console.warn(
                `VueAce: editor option ${k} was activated but not found. Did you need to import a related tool or did you possibly mispell the option?`
              );
        });
      });
      return this.split;
    },
    setReadonly() {
      this.split.forEach(editor => {
        editor.setReadOnly(this.readonly);
      });
      return this.split;
    },
    setCompleteData(data) {
      ace.acequire("ace/ext/language_tools").addCompleter({
        getCompletions: function(editor, session, pos, prefix, callback) {
          return callback(null, data);
        }
      });
    },
    onFocus() {
      this.$emit("onFocus", this.split);
    },
    onBlur() {
      this.$emit("onBlur", this.split);
    },
    onChange(obj) {
      obj = Object.assign(obj, {
        value: this.getValue(),
        split: this.split
      });
      this.$emit("onChange", obj);
    },
    onInput() {
      this.$emit("onInput", this.split);
    },
    onCopy(txt) {
      this.$emit("onCopy", txt);
    },
    onPaste(obj) {
      this.$emit("onPaste", obj);
    },
    resize() {
      this.split.forEach(editor=>{
        editor.resize();
      });
      return this.split;
    },
    setRange(startRow, startCol, endRow, endCol) {
      let Range = ace.acequire("ace/range").Range;
      return new Range(startRow, startCol, endRow, endCol);
    },
    setOrientation() {
      this.editor.env.split.setOrientation(
        this.editor.env.split[this.orientation.toUpperCase()]
      );
    },
    setSplits() {
      this.editor.env.split.setSplits(this.splits);
      this.split.forEach(editor => {
        editor.$blockScrolling = Infinity;
        editor.on("focus", this.onFocus);
        editor.on("blur", this.onBlur);
        editor.on("copy", this.onCopy);
        editor.on("paste", this.onPaste);
        editor.on("change", this.onChange);
        editor.on("input", this.onInput);
      });
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy: function() {
    this.editor.destroy();
    this.editor.container.remove();
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
    },
    height() {
      this.$nextTick(() => {
        this.resize();
      });
    },
    width() {
      this.$nextTick(() => {
        this.resize();
      });
    },
    orientation() {
      this.setOrientation();
    },
    splits() {
      this.setSplits();
    }
  }
};
</script>
<style scoped>
.editor-container {
  position: relative;
}
</style>


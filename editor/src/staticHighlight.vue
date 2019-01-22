<template>
  <div class="static-highlight">
    <slot></slot>
    <div :class="className" :style="{height:cH,width:cW}" ref="editor">{{content}}</div>
  </div>
</template>

<script>
import ace from "brace";
import "brace/ext/static_highlight";

const highlight = ace.acequire("ace/ext/static_highlight");
export default {
  name: "VueStaticHighlight",
  props: {
    lang: {
      type: String,
      default: "text"
    },
    theme: {
      type: String,
      default: "twilight"
    },
    gutter: {
      type: Boolean,
      default: true
    },
    height: {
      type: [String, Number],
      default: 200
    },
    width: {
      type: [String, Number],
      default: "100%"
    },
    content: {
      type: String,
      default: `hello world`
    },
    startLineNumber: {
      type: Number,
      default: 1
    },
    className: {
      type: String,
      default: "static-highlight-editor"
    },
    trim: {
      type: Boolean,
      default: false
    }
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
  data() {
    return {};
  },
  methods: {
    init() {
      const that = this;
      Promise.all([
        import(`brace/mode/${this.lang}`),
        import(`brace/theme/${this.theme}`)
      ])
        .then(() => {
          highlight(
            this.$refs.editor,
            {
              mode: `ace/mode/${this.lang}`,
              theme: `ace/theme/${this.theme}`,
              startLineNumber: that.startLineNumber,
              showGutter: that.gutter, //是否显示行数
              trim: that.trim //是否去除前后空字符
            },
            highlighted => {}
          );
        })
        .catch(err => console.log(err));
    },
    getValue() {
      return this.content;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  }
};
</script>
<style scoped>
.static-highlight {
  position: relative;
}
</style>


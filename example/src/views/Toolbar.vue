<template>
  <div class="toolbar">
    <vue-ace-editor
      ref="editor"
      :content="content"
      :fontSize="14"
      height="300px"
      lang="python"
      theme="eclipse"
      @init="editorInit"
      @onInput="editorInput"
    >
      <ul class="btn-groups">
        <li @click="copyText">复制</li>
        <li @click="undo" :class="{'disable':isUndoBtnDisabled}">后退</li>
        <li @click="save" :class="{'disable':isSaveBtnDisabled}">保存</li>
        <li @click="redo" :class="{'disable':isRedoBtnDisabled}">前进</li>
      </ul>
    </vue-ace-editor>
  </div>
</template>

<script>
import { copy } from "@/assets/js/util";
export default {
  name: "toolbar",
  data() {
    return {
      isSaveBtnDisabled: true,
      isRedoBtnDisabled: false,
      isUndoBtnDisabled: false,
      content: ""
    };
  },
  methods: {
    editorInit() {
      require("brace/ext/language_tools");
      require(`brace/mode/python`);
      require(`brace/snippets/python`);
      require(`brace/theme/eclipse`);
      if (localStorage.saveEditor) {
        this.content = localStorage.saveEditor;
      }
    },
    editorInput(editor) {
      this.updateBtnStatus(editor);
    },
    copyText() {
      copy(this.$refs.editor.getValue());
    },
    save() {
      if (this.isSaveBtnDisabled) return;
      const editor = this.$refs.editor.save("saveEditor");
      this.updateBtnStatus(editor);
    },
    redo() {
      if (this.isRedoBtnDisabled) return;
      const editor = this.$refs.editor.redo();
      this.updateBtnStatus(editor);
    },
    undo() {
      if (this.isUndoBtnDisabled) return;
      const editor = this.$refs.editor.undo();
      this.updateBtnStatus(editor);
    },
    updateBtnStatus(editor) {
      this.isSaveBtnDisabled = editor.session.getUndoManager().isClean();
      this.isRedoBtnDisabled = !editor.session.getUndoManager().hasRedo();
      this.isUndoBtnDisabled = !editor.session.getUndoManager().hasUndo();
    }
  }
};
</script>

<style lang="css" scoped>
.toolbar {
}
.btn-groups {
  position: absolute;
  z-index: 999;
  top: 12px;
  right: 12px;
}
.btn-groups li {
  display: inline-block;
  padding: 8px;
  border: 1px solid #e6e6e6;
  color: #666;
  font-size: 12px;
  border-radius: 2px;
}
.btn-groups li:hover {
  cursor: pointer;
}
.btn-groups li + li {
  margin-left: 8px;
}
.btn-groups li.disable {
  cursor: not-allowed;
  background-color: #e6e6e6;
}
</style>